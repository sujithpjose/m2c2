// httpConfig.interceptor.ts
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpResponse,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';

import { environment } from './../../../environments/environment';

@Injectable()
export class PrefixInterceptor implements HttpInterceptor {

    constructor(

    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = 'my-token-string-from-server';

        // Authentication by setting header with token value
        /*  if (token) {
             request = request.clone({
                 setHeaders: {
                     Authorization: token
                 }
             });
         } */

        if (!request.headers.has('Content-Type')) {
            request = request.clone({
                setHeaders: {
                    'content-type': 'application/json'
                }
            });
        }

        request = request.clone({
            headers: request.headers.set('Accept', 'application/json')
        });

        // prepend api route to url
        request = this.prependBaseUrl(request);

        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                /* if (event instanceof HttpResponse) {
                    console.log('event--->>>', event);
                } */
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                // console.error(error);
                return throwError(error);
            }));
    }

    private prependBaseUrl(request: HttpRequest<any>): HttpRequest<any> {
        const url = `${environment.apiUrl + request.url}`;
        return request.clone({ url });
    }

}
