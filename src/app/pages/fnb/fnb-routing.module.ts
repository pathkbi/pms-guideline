import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FnbOrderComponent } from './fnb-order/fnb-order.component';
import { FnbPaymentComponent } from './fnb-payment/fnb-payment.component';

const routes: Routes = [
  {
    path: 'order',
    component: FnbOrderComponent
  },
  {
    path: 'payment',
    component: FnbPaymentComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FnbRoutingModule { }
