import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromAuth from './auth.reducer';

export const getAuthState = createFeatureSelector<fromAuth.AuthState>('auth');
