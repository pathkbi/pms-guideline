import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FnbRoutingModule } from './fnb-routing.module';
import { FnbOrderComponent } from './fnb-order/fnb-order.component';
import { FnbPaymentComponent } from './fnb-payment/fnb-payment.component';
import { FnbDiscountComponent } from './fnb-discount/fnb-discount.component';
import { FnbVoidComponent } from './fnb-void/fnb-void.component';
import { FnbUndoCheckComponent } from './fnb-undo-check/fnb-undo-check.component';


@NgModule({
  declarations: [
    FnbOrderComponent,
    FnbPaymentComponent,
    FnbDiscountComponent,
    FnbVoidComponent,
    FnbUndoCheckComponent
  ],
  imports: [
    CommonModule,
    FnbRoutingModule
  ]
})
export class FnbModule { }
