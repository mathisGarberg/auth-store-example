import { Injectable } from '@angular/core';
import {
    HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import { Store } from '@ngrx/store';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import * as fromAuth from '../store/auth';

import { AuthTokenService } from '../services/auth-token.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(
        public authToken: AuthTokenService,
        public store: Store<fromAuth.AuthState>
    ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        if (!!this.authToken.credentials) {
            return this.handleApiRequest(req, next);
        } else {
            return next.handle(req);
        }
    }

    handleApiRequest(request, next): any {
        const token = this.authToken.credentials.access_token;
        request = token ? request.clone({ setHeaders: { Authorization: `Bearer ${token}` } }) : request;
        const handler = next.handle(request).pipe(
            catchError((error, caught) => {
                if (error.status === 401 || error.status === 403) {
                    this.store.dispatch(new fromAuth.Logout());
                    return throwError(error);
                } else {
                    return throwError(error);
                }
            })
        );
        
        return handler;
    }

}