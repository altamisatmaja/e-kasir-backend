import { Response, Request, request, response } from 'express';
import User from '../database/models/User';
import Helper from '../helpers/Helper';
import PasswordHelper from '../helpers/PasswordHelper';
import { generateToken, verifyToken } from '../utils/jwt';

const Register = async (
    req: Request,
    res: Response,
) => {
    try {
        const { email, username, password, password_confirmation, role } = req.body;

        if (!email || !username || !password || !password_confirmation) return res.status(400).json(Helper.Response('failed', 400, 'Data tidak boleh kosong'));

        if (password !== password_confirmation) return res.status(400).json(Helper.Response('failed', 400, 'Password dengan password konfirmasi harus sama'));

        const hashedPassword = await PasswordHelper.hashPassword(password);

        const user = await User.create({ email, username, password: hashedPassword, role });
        const token = generateToken(user.id, user.email, user.username, user.role);

        const data = {
            id: user.id,
            email: user.email,
            username: user.username,
            role: user.role,
        };

        return res.status(201).json(Helper.ResponseWithToken('success', 201, 'User registered successfully', data, token));
    } catch (error: any) {
        return res.status(500).json(Helper.Response('failed', 500, 'Oops, registration failed', null, error));
    }
}

const Login = async (
    req: Request,
    res: Response
) => {
    try {
        const { email, username, password } = req.body;

        if (!email || !password) return res.status(400).json(Helper.Response('failed', 400, 'Data tidak boleh kosong'));

        const user = await User.findOne({ where: { [username ? 'username' : 'email']: username || email } });

        if (!user) return res.status(401).json(Helper.Response('failed', 401, 'Invalid credentials', null));

        const isPasswordValid = await PasswordHelper.comparePassword(password, user.password);

        if (!isPasswordValid) return res.status(401).json(Helper.Response('failed', 401, 'Invalid credentials', null));

        const token = generateToken(user.id, user.email, user.username, user.role);

        const data = {
            id: user.id,
            email: user.email,
            username: user.username,
            role: user.role,
        };

        return res.status(200).json(Helper.ResponseWithToken('success', 200, 'Logged in successfully', data, token));

    } catch (error: any) {
        return res.status(500).json(Helper.Response('failed', 500, 'Oops, login failed', null, error));
    }
}

const Logged = async (
    req: Request,
    res: Response
) => {
    try {
        const header = req.headers.authorization;

        if (!header || !header.startsWith('Bearer ')) return res.status(500).json(Helper.Response('failed', 500, 'Token tidak ditemukan'))

        const token = header.split(' ')[1];
        const decoded = verifyToken(token);

        if (!decoded) {
            return res.status(401).json(Helper.Response('failed', 401, 'Token tidak valid', null));
        }

        const user = await User.findByPk(decoded.id);
        if (!user) {
            return res.status(404).json(Helper.Response('failed', 404, 'User tidak ditemukan', null));
        }

        const data = {
            id: user.id,
            email: user.email,
            username: user.username,
            role: user.role,
        };

        return res.status(200).json(Helper.ResponseWithToken('success', 200, 'Token valid', data, token));

    } catch (error: any) {
        return res.status(500).json(Helper.Response('failed', 500, 'Oops, login failed', null, error));
    }
}


export { Register, Login, Logged };