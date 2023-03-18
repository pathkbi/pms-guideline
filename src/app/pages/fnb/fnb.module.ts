import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FnbRoutingModule } from './fnb-routing.module';
import { FnbOrderComponent } from './fnb-order/fnb-order.component';
import { FnbPaymentComponent } from './fnb-payment/fnb-payment.component';


@NgModule({
  declarations: [
    FnbOrderComponent,
    FnbPaymentComponent
  ],
  imports: [
    CommonModule,
    FnbRoutingModule
  ]
})
export class FnbModule { }
