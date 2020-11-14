const axios = require('axios');
import { ResponseError } from '../models/response-error';
import { CustomErrorHandler } from '../exception/error-handler';

export class RequestService {

    constructor() { }

    public get(url: string): Promise<any> {
        return axios.get(url)
            .then((response: any) => this.processResponse(response))
            .catch((err: any) => this.handleError(err));
    }

    private processResponse(response: any): any {
        if (response.statusText === 'OK') {
            // res.status >= 200 && res.status < 300
            return response.data;
        } else {
            this.handleError();
        }
    }

    private handleError(err?: Error): ResponseError {
        console.log('In [handleError] ', err);
        const error = new ResponseError(0, 'remote server error');
        throw new CustomErrorHandler(error, 404);
    }

}