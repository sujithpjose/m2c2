import { NextFunction, Request, Response } from 'express';
import { CustomErrorHandler } from '../exception/error-handler';

function errorMiddleware(customError: CustomErrorHandler, request: Request, response: Response, next: NextFunction) {
    console.log('In [errorMiddleware]');

    response
        .status(customError.status)
        .send(customError.error);

    next();
}

export default errorMiddleware;