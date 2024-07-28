interface PasswordValidationResult {
    isValid: boolean,
    message: string,
}

const validatePassword = (
    password: string
): PasswordValidationResult => {
    const minLength = 6;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+{}|:"<>?`~]/.test(password);

    if(password.length < minLength){ return { isValid: false, message: `Minimal karakter password harus ${minLength}`}}
    if(!hasUpperCase){ return { isValid: false, message: `Password harus terdapat huruf besar`}}
    if(!hasLowerCase){ return { isValid: false, message: `Password harus terdapat huruf kecil`}}
    if(!hasNumber){ return { isValid: false, message: `Password harus terdapat angka`}}
    if(!hasSpecialChar){ return { isValid: false, message: `Password harus terdapat simbol`}}
    return {isValid: true, message: 'Password valid'}
}