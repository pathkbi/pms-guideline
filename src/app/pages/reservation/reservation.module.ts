import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationRoutingModule } from './reservation-routing.module';
import { NewRetailReservationComponent } from './retail/new-retail-reservation/new-retail-reservation.component';
import { FindRetailReservationComponent } from './retail/find-retail-reservation/find-retail-reservation.component';
import { CheckInRetailReservationComponent } from './retail/check-in-retail-reservation/check-in-retail-reservation.component';
import { AddServicesRetailReservationComponent } from './retail/add-services-retail-reservation/add-services-retail-reservation.component';
import { CheckOutRetailReservationComponent } from './retail/check-out-retail-reservation/check-out-retail-reservation.component';
import { InvoicesRetailReservationComponent } from './retail/invoices-retail-reservation/invoices-retail-reservation.component';
import { CreateGroupReservationComponent } from './group/create-group-reservation/create-group-reservation.component';



@NgModule({
  declarations: [
    NewRetailReservationComponent,
    FindRetailReservationComponent,
    CheckInRetailReservationComponent,
    AddServicesRetailReservationComponent,
    CheckOutRetailReservationComponent,
    InvoicesRetailReservationComponent,
    CreateGroupReservationComponent
  ],
  imports: [
    CommonModule,
    ReservationRoutingModule,
  ]
})
export class ReservationModule { }