import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import { environment } from '../../../environments/environment';

import * as auth from './auth';

export interface AppState {
  auth: auth.AuthState
}

export const reducers: ActionReducerMap<AppState> = {
  auth: auth.authReducer
};

// export function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
//   return (state: AppState, action: any): AppState => {
//     if(
//       // !action.silent
//       environment.log.store
//     ) {
//       return reducer(state, action);
//     }
//   }
// }


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];

export const effects = [
  auth.AuthEffects
];
