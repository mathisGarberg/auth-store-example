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

  @Effect({ dispatch: false })
  login$: any = this.actions$.pipe(
    ofType(actions.AuthActionTypes.LOGIN),
    map((_: any) => _.payload),
    delay(2000),
    tap((data: any) => {
        this.authService.login(data).pipe(
          map(user => {
            console.log(user);
            this.authToken.setTokenPayload(user);
            this.store.dispatch(new actions.AuthTokenPayload(user));
            this.store.dispatch(new actions.LoginSuccess(user));
            this.router.navigate([this.redirectUrl]);
          }),
          catchError(error => 
            of(this.store.dispatch(new actions.AuthFailure(error)))
          )
        ).subscribe();
      }
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store<AuthState>,
    private authService: AuthService,
    private authToken: AuthTokenService,
    private router: Router
  ) {}
}
