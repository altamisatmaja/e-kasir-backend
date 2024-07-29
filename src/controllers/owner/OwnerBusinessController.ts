import { Request, Response } from "express";
import { authenticate } from "../../middleware/middleware";
import { CustomJwtPayload } from "../../utils/jwt";
import User from "../../database/models/User";
import Owner from "../../database/models/Owner";

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

        const { 
            business_name, 
            business_picture, 
            business_provice, 
            business_city, 
            business_sub_district, 
            business_address_detail, 
            business_category_id 
        } = req.body
        
        const user = await User.findByPk(userPayload.id);

        return res.status(200).json(userPayload);
    } catch (error:any) {
        
    }
}

export { OwnerStoreBusiness };