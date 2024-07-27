import { Response, Request } from 'express';
import Role from '../database/models/Role';

const GetRole = async (
    req: Request,
    res: Response
) : Promise<Response> => {
    try {
        const roles = await Role.findAll({
            where: {
                active: true
            }
        });

        return res.status(200).send({
            status: 'success',
            code: 200,
            message : 'Data role user berhasil didapatkan',
            data: roles
        });
    } catch (error) {
        if ( error != null && error instanceof Error){
            return res.status(500).send({
                status: 'success',
                code: 500,
                message : `Terjadi kesalahan: ${error.message}`,
                errors: error,
            });
        }

        return res.status(500).send({
            status: 'success',
            code: 500,
            message : 'Internal Server Error',
            errors: error,
        });
    }
};

export default { GetRole };