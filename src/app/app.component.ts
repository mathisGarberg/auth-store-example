import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from './core/store/index'; 
import * as fromAuth from './core/store/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}
}
