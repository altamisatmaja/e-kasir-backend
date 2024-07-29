import { Request, Response } from "express"
import Helper from "../helpers/Helper";
import BusinessCategories from "../database/models/BusinessCategories";

const ListOfBusinessCategory = async (

) => {
    // TODO
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
        return res.status(201).json(Helper.Response('success', 201, 'Data kategori bisnis telah ditambahkan', data));
    } catch (error:any) {
        return res.status(500).json(Helper.Response('failed', 500, 'Oops, terjadi kesalahan', null, error));
    }
}

const UpdateBusinessCategory = () => {
    // TODO
}


export { StoreBusinessCategory };