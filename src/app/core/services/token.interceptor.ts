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
      return next.handle(req);
    }
}
