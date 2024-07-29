import { Request, Response } from "express"
import Helper from "../helpers/Helper";
import BusinessCategories from '../database/models/BusinessCategories';

const ListOfBusinessCategory = async (
    req: Request,
    res: Response
) => {
    try {
        const businessCategories = await BusinessCategories.findAll();

        return res.status(200).json(Helper.Response('success', 200, 'Data kategori bisnis telah ditambahkan', businessCategories));
    } catch (error:any) {
        return res.status(500).json(Helper.Response('failed', 500, 'Oops, terjadi kesalahan', null, error));
    }
}


const StoreBusinessCategory = async (
    req: Request,
    res: Response
) => {
    try {
        const name = req.body.name;

        if(typeof name !== 'string' || !name || name.trim() === '') return res.status(400).json(Helper.Response('failed', 400, 'Nama kategori bisnis tidak boleh kosong!'));

        const businessCategories = await BusinessCategories.create({
            name: name
        });

        const data = {
            id: businessCategories.id,
            name: businessCategories.name
        }
        return res.status(200).json(Helper.Response('success', 200, 'Data kategori bisnis telah ditambahkan', data));
    } catch (error:any) {
        return res.status(500).json(Helper.Response('failed', 500, 'Oops, terjadi kesalahan', null, error));
    }
}

const UpdateBusinessCategory = async (
    req: Request,
    res: Response
) => {
    try {
        const nameBusinessCategory = req.body.name;
        const idBusinessCategory = req.params.id;

        if(typeof nameBusinessCategory !== 'string' || !nameBusinessCategory || nameBusinessCategory.trim() === '') return res.status(400).json(Helper.Response('failed', 400, 'Nama kategori bisnis tidak boleh kosong!'));

        const businessCategory = await BusinessCategories.findByPk(idBusinessCategory);

        if(!businessCategory || businessCategory === null) return res.status(400).json(Helper.Response('failed', 400, 'Data gagal ditemukan'));

        businessCategory.name = nameBusinessCategory;
        businessCategory.save();

        const data = {
            id: businessCategory.id,
            name: businessCategory.name
        }

        return res.status(200).json(Helper.Response('success', 200, 'Data kategori bisnis telah diubah', data));
    } catch (error:any) {
        return res.status(500).json(Helper.Response('failed', 500, 'Oops, terjadi kesalahan', null, error));
    }
}


export { StoreBusinessCategory, ListOfBusinessCategory, UpdateBusinessCategory };