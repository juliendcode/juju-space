import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Feature3RoutingModule } from './feature3-routing.module';
import { Feature3Component } from './feature3.component';
import { JuAutocompleteLibModule } from 'ju-autocomplete-lib';


@NgModule({
  imports: [
    CommonModule,
    Feature3RoutingModule,
    JuAutocompleteLibModule
  ],
  exports: [
    Feature3Component
  ],
  declarations: [
    Feature3Component
  ],
})
export class Feature3Module { }
