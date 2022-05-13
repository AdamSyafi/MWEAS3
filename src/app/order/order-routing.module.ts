import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderPage } from './order.page';

const routes: Routes = [
  {
    path: '',
    component: OrderPage
  },  {
    path: 'manage-order',
    loadChildren: () => import('./manage-order/manage-order.module').then( m => m.ManageOrderPageModule)
  },
  {
    path: 'payment-method',
    loadChildren: () => import('./payment-method/payment-method.module').then( m => m.PaymentMethodPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderPageRoutingModule {}
