import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/general/home/home.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';
import { ItemsComponent } from './modules/application/items/items.component';
import { ItemsModule } from './modules/application/items/items.module';

@NgModule({
  declarations: [AppComponent, HomeComponent, NotFoundComponent, ItemsComponent],
  imports: [BrowserModule.withServerTransition({ appId: 'serverApp' }), AppRoutingModule, ItemsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
