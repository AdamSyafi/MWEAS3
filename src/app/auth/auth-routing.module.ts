import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthPage } from './auth.page';

const routes: Routes = [
  {
    path: '',
    component: AuthPage
  },
  {
    path: 'apple',
    loadChildren: () => import('./apple/apple.module').then( m => m.ApplePageModule)
  },
  {
    path: 'google',
    loadChildren: () => import('./google/google.module').then( m => m.GooglePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthPageRoutingModule {}
