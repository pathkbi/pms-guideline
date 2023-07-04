import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigRoutingModule } from './config-routing.module';
import { ConfigHotelComponent } from './config-hotel/config-hotel.component';
import { ConfigRoomComponent } from './config-room/config-room/config-room.component';
import { ConfigRoomTypeComponent } from './config-room/config-room-type/config-room-type.component';
import { ConfigRoomViewComponent } from './config-room/config-room-view/config-room-view.component';
import { ConfigRoomStatusComponent } from './config-room/config-room-status/config-room-status.component';
import { ConfigFloorComponent } from './config-room/config-floor/config-floor.component';
import { ConfigFacilityComponent } from './config-room/config-facility/config-facility.component';
import { ConfigAreaComponent } from './config-room/config-area/config-area.component';
import { ConfigPropertyComponent } from './config-room/config-property/config-property.component';
import { ConfigDiagramComponent } from './config-diagram/config-diagram.component';
import { ConfigCurrencyComponent } from './config-currency/config-currency/config-currency.component';
import { ConfigTransactionComponent } from './config-currency/config-transaction/config-transaction.component';
import { ConfigPaymentComponent } from './config-currency/config-payment/config-payment.component';
import { ConfigPriceComponent } from './config-currency/config-price/config-price.component';
import { ConfigPricePolicyComponent } from './config-currency/config-price-policy/config-price-policy.component';
import { ConfigPeriodComponent } from './config-currency/config-period/config-period.component';
import { ConfigStageComponent } from './config-currency/config-stage/config-stage.component';


@NgModule({
  declarations: [
    ConfigHotelComponent,
    ConfigRoomComponent,
    ConfigRoomTypeComponent,
    ConfigRoomViewComponent,
    ConfigRoomStatusComponent,
    ConfigFloorComponent,
    ConfigFacilityComponent,
    ConfigAreaComponent,
    ConfigPropertyComponent,
    ConfigDiagramComponent,
    ConfigCurrencyComponent,
    ConfigTransactionComponent,
    ConfigPaymentComponent,
    ConfigPriceComponent,
    ConfigPricePolicyComponent,
    ConfigPeriodComponent,
    ConfigStageComponent
  ],
  imports: [
    CommonModule,
    ConfigRoutingModule
  ]
})
export class ConfigModule { }
