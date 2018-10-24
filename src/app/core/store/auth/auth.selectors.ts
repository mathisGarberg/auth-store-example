import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromAuth from './auth.reducer';

export const getAuthState = createFeatureSelector<fromAuth.AuthState>('auth');

export const getAuthLoading = createSelector(
    getAuthState,
    (state: fromAuth.AuthState) => state.isLoading
);

export const getAuthError = createSelector(
    getAuthState,
    (state: fromAuth.AuthState) => state.error
);

export const getLoggedIn = createSelector(
    getAuthState,
    (state: fromAuth.AuthState) => !!state.user
);