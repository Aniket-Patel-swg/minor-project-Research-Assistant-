export class ConverterException extends Error {
    public statusCode: number;

    constructor(message: string, statusCode: number = 400, public details?: any) {
        super(message);
        this.statusCode = statusCode;
        this.name = 'ConverterException';
    }
}

export class ServiceException extends Error {
    public statusCode: number;

    constructor(message: string, statusCode: number = 500, public details?: any) {
        super(message);
        this.statusCode = statusCode;
        this.name = 'ServiceException';
    }
}

export class ClientException extends Error {
    public statusCode: number;

    constructor(message: string, statusCode: number = 502, public details?: any) {
        super(message);
        this.statusCode = statusCode;
        this.name = 'ClientException';
    }
}


export class BadRequestException extends Error {
    public statusCode: number;

    constructor(message: string, statusCode: number = 400, public details?: any) {
        super(message);
        this.statusCode = statusCode;
        this.name = 'BadRequestException';
    }
}