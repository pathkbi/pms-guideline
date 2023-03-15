import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HouseKeepingRoutingModule } from './house-keeping-routing.module';
import { HkTaskAssignmentComponent } from './hk-task-assignment/hk-task-assignment.component';
import { HkProcessToCleanComponent } from './hk-process-to-clean/hk-process-to-clean.component';
import { HkLostAndFoundComponent } from './hk-lost-and-found/hk-lost-and-found.component';
import { HkRoomStatusComponent } from './hk-room-status/hk-room-status.component';


@NgModule({
  declarations: [
    HkTaskAssignmentComponent,
    HkProcessToCleanComponent,
    HkLostAndFoundComponent,
    HkRoomStatusComponent
  ],
  imports: [
    CommonModule,
    HouseKeepingRoutingModule
  ]
})
export class HouseKeepingModule { }
