import { Request, Response } from 'express';
import Helper from '../../helpers/Helper';
import { CustomJwtPayload } from '../../utils/jwt';
import Owner from '../../database/models/Owner';

const OwnerUpdatePersonal = async (
    req: Request,
    res: Response
) => {
    try {
        const userPayload = (req as any).user as CustomJwtPayload;
        const userId = userPayload.id;
        const owner = await Owner.findOne({
            where: {
                user_id: userId
            }
        });

        if(!owner) return res.status(404).json(Helper.Response('failed', 404, 'Ups, owner tidak ditemukan'));

        const { full_name, date_of_birth, gender } = req.body;

        if(!full_name || !date_of_birth || !gender) return res.status(400).json(Helper.Response('failed', 400, 'Ups, wajib diiisi!'));

        const validGenders = ['Laki-laki', 'Perempuan'];
        if(typeof full_name !== 'string' || isNaN(Date.parse(date_of_birth)) || !validGenders.includes(gender)) return res.status(400).json(Helper.Response('failed', 400, 'Ups, inputan anda salah'));

        owner.full_name = full_name;
        owner.date_of_birth = new Date(date_of_birth);
        owner.gender = gender;

        await owner.save();

        return res.status(200).json(Helper.Response('success', 200, 'Data berhasil diubah!'));
    } catch (error: any) {
        return res.status(500).json(Helper.Response('failed', 500, 'Oops, registration failed', null, error));
    }
}


export { OwnerUpdatePersonal };