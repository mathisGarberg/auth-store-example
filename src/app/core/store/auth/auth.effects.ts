import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as actions from './auth.actions';
import { of } from 'rxjs';
import { tap, filter, switchMap, map, exhaustMap, catchError, delay } from 'rxjs/operators';
import { AuthState } from './auth.reducer';
import { Store } from '@ngrx/store';
// import { AuthTokenService } from '../../services/services/auth-token.service';
import { AuthService } from '../../services/auth.service';
import { AuthTokenService } from '../../services/auth-token.service';
import { Router, ActivatedRoute } from '@angular/router';


@Injectable()
export class AuthEffects {
  redirectUrl = '/home';

  constructor(
    private actions$: Actions,
    private store: Store<AuthState>,
    private authService: AuthService,
    private authToken: AuthTokenService,
    private router: Router
  ) {}
}
