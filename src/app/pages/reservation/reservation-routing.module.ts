import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateGroupReservationComponent } from './group/create-group-reservation/create-group-reservation.component';
import { AddServicesRetailReservationComponent } from './retail/add-services-retail-reservation/add-services-retail-reservation.component';
import { CheckInRetailReservationComponent } from './retail/check-in-retail-reservation/check-in-retail-reservation.component';
import { CheckOutRetailReservationComponent } from './retail/check-out-retail-reservation/check-out-retail-reservation.component';
import { FindRetailReservationComponent } from './retail/find-retail-reservation/find-retail-reservation.component';
import { InvoicesRetailReservationComponent } from './retail/invoices-retail-reservation/invoices-retail-reservation.component';
import { NewRetailReservationComponent } from './retail/new-retail-reservation/new-retail-reservation.component';

const routes: Routes = [
  {
    path: 'retail-new',
    component: NewRetailReservationComponent
  },
  {
    path: 'retail-search',
    component: FindRetailReservationComponent
  },
  {
    path: 'retail-check-in',
    component: CheckInRetailReservationComponent
  },
  {
    path: 'retail-add-services',
    component: AddServicesRetailReservationComponent
  },
  {
    path: 'retail-check-out',
    component: CheckOutRetailReservationComponent
  },
  {
    path: 'retail-invoice',
    component: InvoicesRetailReservationComponent
  },
  {
    path: 'group-create',
    component: CreateGroupReservationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationRoutingModule { }
