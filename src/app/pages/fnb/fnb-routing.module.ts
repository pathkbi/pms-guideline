import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FnbDiscountComponent } from './fnb-discount/fnb-discount.component';
import { FnbOrderComponent } from './fnb-order/fnb-order.component';
import { FnbPaymentComponent } from './fnb-payment/fnb-payment.component';
import { FnbUndoCheckComponent } from './fnb-undo-check/fnb-undo-check.component';
import { FnbVoidComponent } from './fnb-void/fnb-void.component';

const routes: Routes = [
  {
    path: 'order',
    component: FnbOrderComponent
  },
  {
    path: 'payment',
    component: FnbPaymentComponent
  },
  {
    path: 'discount',
    component: FnbDiscountComponent
  },
  {
    path: 'undo-check',
    component: FnbUndoCheckComponent
  },
  {
    path: 'void',
    component: FnbVoidComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FnbRoutingModule { }
