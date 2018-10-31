import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthTokenService } from '../core/services/auth-token.service';
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
    private router: Router,
    private authToken: AuthTokenService
  ) {}

  ngOnInit() {}

  logout() {
    this.authToken.setTokenPayload(null);
    this.router.navigate(['/login']);
  }

}
