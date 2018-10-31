import { Action } from '@ngrx/store';

export enum AuthActionTypes {
  APP_INIT = '[Auth] Init'
}

export class AppInit implements Action {
  readonly type = AuthActionTypes.APP_INIT;
}

export type AuthActions =
  | AppInit;
