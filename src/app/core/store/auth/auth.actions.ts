import { Action } from '@ngrx/store';

export enum AuthActionTypes {
  APP_INIT = '[Auth] Init',
  AUTH_INIT = '[Auth] Init',
  LOGIN = '[Auth] Login Action',
  LOGIN_SUCCESS = '[Auth] Login Success',
  LOGOUT = '[Auth] Logout action',
  LOGIN_REDIRECT = '[Auth] Login Redirect Action',
  AUTH_FAILURE = '[Auth] Failure Action',
  AUTH_TOKEN_PAYLOAD = '[Auth] Token Payload',
  NULL_TOKEN = '[Auth] Null Token',
  TOKEN_RESTORE = '[Auth] Token Restore'
}

export class AppInit implements Action {
  readonly type = AuthActionTypes.APP_INIT;
}

export class AuthInit implements Action {
  readonly type = AuthActionTypes.AUTH_INIT;
}

export class Login implements Action {
  readonly type = AuthActionTypes.LOGIN;

  constructor(public payload: any) {}
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LOGIN_SUCCESS;

  constructor(public payload: any) {}
}

export class Logout implements Action {
  readonly type = AuthActionTypes.LOGOUT;
}

export class LoginRedirect implements Action {
  readonly type = AuthActionTypes.LOGIN_REDIRECT;
}

export class AuthFailure implements Action {
  readonly type = AuthActionTypes.AUTH_FAILURE;

  constructor(public payload: any) {}
}

export class AuthTokenPayload implements Action {
  readonly type = AuthActionTypes.AUTH_TOKEN_PAYLOAD;

  constructor(public payload: any) {}
}

export class NullToken implements Action {
  readonly type = AuthActionTypes.NULL_TOKEN;
}

export class TokenRestore implements Action {
  readonly type = AuthActionTypes.TOKEN_RESTORE;

  constructor(public payload: any) {}
}

export type AuthActions = 
  | AppInit
  | AuthInit
  | Login
  | LoginSuccess
  | Logout
  | LoginRedirect
  | AuthFailure
  | AuthTokenPayload
  | NullToken
  | TokenRestore;
