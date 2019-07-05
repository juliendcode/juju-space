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
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
