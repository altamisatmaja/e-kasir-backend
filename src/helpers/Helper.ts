interface Response<T> {
    status: string;
    code: number;
    message: string;
    data?: T;
    errors?: Error;
    token?: string;
}

const ResponseHelper = <T>(
    status: string, 
    code: number, 
    message: string, 
    data: T | null = null, 
    error: Error | null = null
): Response<T> => {
    if (error) {
        return { status, code, message: `Terjadi kesalahan: ${error.message}`, errors: error };
    }

    return { status, code, message, data: data ?? undefined };
}

const ResponseHelperWithToken = <T>(
    status: string, 
    code: number, 
    message: string, 
    data: T | null = null, 
    token: string | null = null, 
    error: Error | null = null
): Response<T> => {
    if (error) {
        return { status, code, message: `Terjadi kesalahan: ${error.message}`, errors: error, token: undefined };
    }

    return { status, code, message, data: data ?? undefined, token: token ?? undefined };
}

export default { Response: ResponseHelper, ResponseWithToken: ResponseHelperWithToken };
