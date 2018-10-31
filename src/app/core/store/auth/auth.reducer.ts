import { Action } from '@ngrx/store';
import { AuthActions, AuthActionTypes } from './auth.actions';


export interface AuthState {

}

export const authInitialState: AuthState = {

};

export function authReducer(state = authInitialState, action: AuthActions): AuthState {
  switch (action.type) {

    default:
      return state;
  }
}


