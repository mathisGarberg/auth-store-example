import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [
    ReactiveFormsModule,
    FontAwesomeModule
  ]
})
export class SharedModule {}
