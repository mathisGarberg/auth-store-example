import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { faGhost } from '@fortawesome/free-solid-svg-icons';

import * as fromAuth from '../core/store/auth';
import { AppState } from '../core/store/index';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  isLoading: boolean;
  authState: Observable<any>;
  errorMsg: string;

  title = 'Log In';
  faGhost = faGhost;

  constructor(
    private store: Store<AppState>,
    private formBuilder: FormBuilder
  ) {
    this.authState = this.store.pipe(
      select(fromAuth.getAuthState)
    );
  }

  ngOnInit() {
    this.createForm();

    this.authState.subscribe(res => {
      this.isLoading = res.isLoading;
      this.errorMsg = res.error;
    });
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      remember: true
    });
  }

  login() {
    const loginContext = this.loginForm.value;

    this.store.dispatch(new fromAuth.Login(loginContext));
  }

}
