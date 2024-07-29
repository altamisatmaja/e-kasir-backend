import { Request, Response } from "express";
import { authenticate } from "../../middleware/middleware";
import { CustomJwtPayload } from "../../utils/jwt";
import User from "../../database/models/User";
import Owner from "../../database/models/Owner";
import Helper from "../../helpers/Helper";
import Business from "../../database/models/Business";
import upload from "../../services/multer";

const OwnerStoreBusiness = async (
    req: Request,
    res: Response
) => {
    try {
        const userPayload = (req as any).user as CustomJwtPayload;
        const userId = userPayload.id;

        const owner = await Owner.findOne({
            where: {
                user_id : userId
            }
        });

        if(!owner) return res.status(404).json(Helper.Response('failed', 404, 'Ups, owner tidak ditemukan'));

        const business = await Business.findOne({
            where: {
                owner_id: owner.id
            }
        });

        if(!business) return res.status(404).json(Helper.Response('failed', 404, 'Ups, bisnis tidak ditemukan'));

        const { 
            business_name, 
            business_provice, 
            business_city, 
            business_sub_district, 
            business_address_detail, 
            business_category_id 
        } = req.body

        let business_picture = '';
        if (req.file) {
            business_picture = req.file.path;
        }

        if(!business_name || !business_picture || !business_provice || business_city || business_sub_district || business_address_detail || business_category_id) return res.status(400).json(Helper.Response('failed', 400, 'Ups, wajib diiisi!'));
        
        const data = await Business.create({
            owner_id: owner.id,
            business_name: business_name,
            business_picture: business_picture,
            business_province: business_provice,
            business_city: business_city,
            business_sub_district: business_sub_district,
            business_address_detail: business_address_detail,
            business_category_id: business_category_id
        });

        return res.status(201).json(Helper.Response('success', 201, 'Bisnis berhasil disimpan', data));
    } catch (error:any) {
        return res.status(500).json(Helper.Response('failed', 500, 'Oops, registration failed', null, error));
    }
}

export { OwnerStoreBusiness };