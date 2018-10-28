import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers } from './store/index';
import { AuthEffects } from './store/auth';

import { AuthGuard } from './services/auth.guard';
import { AuthTokenFactory, AuthTokenService } from './services/auth-token.service';
import { TokenInterceptor } from './services/token.interceptor';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers, {}),
    EffectsModule.forRoot([AuthEffects]),
  ],
  declarations: [],
  providers: [
    AuthGuard,
    AuthTokenService,
    {
      provide: APP_INITIALIZER,
      useFactory: AuthTokenFactory,
      deps: [AuthTokenService],
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})
export class CoreModule { }
