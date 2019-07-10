import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './modules/general/home/home.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', loadChildren: './modules/general/contact/contact.module#ContactModule' },
  { path: 'about', loadChildren: './modules/general/about/about.module#AboutModule' },
  {
    path: 'items',
    loadChildren: './modules/application/items/items.module#ItemsModule'
  },
  {
    path: 'news',
    loadChildren: './modules/application/news/news.module#NewsModule'
  },
  {
    path: 'nasa',
    loadChildren: './modules/application/nasa/nasa.module#NasaModule'
  },
  {
    path: 'feature3',
    loadChildren: './modules/application/feature3/feature3.module#Feature3Module'
  },


  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
