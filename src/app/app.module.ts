import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/general/home/home.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { JuAutocompleteLibModule } from 'ju-autocomplete-lib';
import { Feature3Module } from './modules/application/feature3/feature3.module';


@NgModule({
  declarations: [AppComponent, HomeComponent, NotFoundComponent,],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    JuAutocompleteLibModule,
    Feature3Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
