import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';

import { environment } from '../../../environments/environment';

import * as auth from './auth';

export interface AppState {
  auth: auth.AuthState;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: auth.authReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];

export const effects = [
  auth.AuthEffects
];
