import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';

import { AuthTokenService } from '../core/services/auth-token.service';
import { AppState } from '../core/store/index';
import * as fromAuth from '../core/store/auth';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  authState: Observable<any>;
  loggedIn: boolean;

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private authToken: AuthTokenService
  ) {
    this.authState = this.store.pipe(
      select(fromAuth.getLoggedIn)
    );
  }

  ngOnInit() {
    this.authState.subscribe((loggedIn: boolean) => {
      this.loggedIn = loggedIn;
    });
  }

  logout() {
    this.store.dispatch(new fromAuth.Logout());
    this.authToken.setTokenPayload(null);
    this.router.navigate(['/login']);
  }

}
