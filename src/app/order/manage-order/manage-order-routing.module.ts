import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageOrderPage } from './manage-order.page';

const routes: Routes = [
  {
    path: '',
    component: ManageOrderPage
  },
  {
    path: 'payment-method',
    loadChildren: () => import('../manageOrder/payment-method/payment-method.module').then( m => m.PaymentMethodPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageOrderPageRoutingModule {}
