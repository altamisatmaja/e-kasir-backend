interface Response<T> {
    status: string,
    code: number,
    message: string,
    data?: T,
    errors?: Error;
}

const Response = <T>(
    status: string, 
    code: number, 
    message: string, 
    data: T, 
    error: Error | null = null
) : Response<T> => {
    if(error) return { status, code, message: `Terjadi kesalahan: ${error.message}`, errors: error }

    return { status, code, message, data: data ?? undefined };
}

export default { Response };