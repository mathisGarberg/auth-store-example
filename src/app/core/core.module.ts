import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers } from './store/index';
import { AuthEffects } from './store/auth';

import { AuthGuard } from './services/auth.guard';
import { AuthTokenService } from './services/auth-token.service';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers, {}),
    EffectsModule.forRoot([AuthEffects]),
  ],
  declarations: [],
  providers: [
    AuthGuard,
    AuthTokenService
  ]
})
export class CoreModule {}
