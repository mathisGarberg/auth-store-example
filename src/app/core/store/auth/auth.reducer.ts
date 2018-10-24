import { Action } from '@ngrx/store';
import { AuthActions, AuthActionTypes } from './auth.actions';


export interface AuthState {
  isLoading: boolean;
  error: any;
  user: any;
}

export const authInitialState: AuthState = {
  isLoading: false,
  error: null,
  user: null
};

export function authReducer(state = authInitialState, action: AuthActions): AuthState {
  switch (action.type) {

    case AuthActionTypes.LOGIN:
      return {
        ...state,
        isLoading: true
      };

    case AuthActionTypes.LOGOUT:
      return {
        ...state,
        user: null
      };

    case AuthActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoading: false
      };

    case AuthActionTypes.TOKEN_RESTORE:
      return {
        ...state,
        user: action.payload
      }

    case AuthActionTypes.AUTH_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };

    default:
      return state;
  }
}
