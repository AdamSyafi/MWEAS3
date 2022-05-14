import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagePage } from './manage.page';

const routes: Routes = [
  {
    path: '',
    component: ManagePage
  },
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then( m => m.PaymentPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagePageRoutingModule {}
