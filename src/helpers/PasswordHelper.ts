import bcrypt from 'bcrypt';

const passwordHelper = async (password: string, password_confirmation: string, status: string | null, code: number | null, message: string | null) => {
    if(password !== password_confirmation){
        return({
            status: status,
            code: code,
            message: message,
        });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
}

export default { passwordHelper };