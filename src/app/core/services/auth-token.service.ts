import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Store } from '@ngrx/store';

import { AuthInit, TokenRestore } from '../store/auth/auth.actions';
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
  token$ = new BehaviorSubject(null);
  _credentials: Credentials | null;

  constructor(private store: Store<AuthState>) {}
  
  load(): Promise<any> {
    return new Promise(resolve => {
      this.store.dispatch(new AuthInit());
      let savedToken = sessionStorage
        .getItem(USER_TOKEN) || localStorage.getItem(USER_TOKEN);
      
      // Check if token exists
      if (!!savedToken) {
        try {
          // Set token
          this._credentials = this.getTokenPayload(savedToken);
          this.store.dispatch(new TokenRestore(this.credentials)); // Restore token
        } catch {
          savedToken = null;
        }
      }
      resolve(savedToken);
    });
  }

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

export function AuthTokenFactory(service: AuthTokenService): Function {
  return () => service.load();
};