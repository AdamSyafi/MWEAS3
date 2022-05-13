import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'register',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./Home/Home.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'order',
    loadChildren: () => import('./order/order.module').then( m => m.OrderPageModule)
  },
  {
    path: 'manage',
    loadChildren: () => import('./order/manage/manage.module').then( m => m.ManagePageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./order/manage/payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./about-us/about-us.module').then( m => m.AboutUsPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }