import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Store } from '@ngrx/store';

import { AuthState } from '../store/auth/auth.reducer';

const USER_TOKEN = 'token';

export interface Credentials {
  access_token: string;
  expires_in: number;
  token_type: string;
  username: string;
  token: string;
}

@Injectable()
export class AuthTokenService {
  _credentials: Credentials | null;

  constructor(private store: Store<AuthState>) {}

  setTokenPayload(credentials?: any, remember?: boolean): void {
    this._credentials = credentials || null;


    if (credentials) {
      const storage = remember ? localStorage : sessionStorage;
      storage.setItem(USER_TOKEN, JSON.stringify(credentials));
    } else {
      sessionStorage.removeItem(USER_TOKEN);
      localStorage.removeItem(USER_TOKEN);
    }
  }

  getTokenPayload(token): any {
    return JSON.parse(token);
  }

  get credentials(): Credentials | null {
    return this._credentials;
  }

}
