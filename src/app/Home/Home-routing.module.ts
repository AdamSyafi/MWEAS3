import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './Home.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage,
    children: [
      {
        path: 'order',
        children: [
          {
            path: '',
            loadChildren: () => import('../order/order.module').then(m => m.OrderPageModule)
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
          }
        ]
      },
      {
        path: 'settings',
        children: [
          {
            path: '',
            loadChildren: () => import('../settings/settings.module').then(m => m.SettingsPageModule)
          }
        ]
      },
      {
        path: 'aboutus',
        children: [
          {
            path: '',
            loadChildren: () => import('../aboutus/aboutus.module').then(m => m.AboutusPageModule)
          }
        ]
      }
    ]
  },
  {
    path: 'user',
    loadChildren: () => import('../Home/user/user.module').then( m => m.UserPageModule)
  },
  {
    path: 'runner',
    loadChildren: () => import('../Home/runner/runner.module').then( m => m.RunnerPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
