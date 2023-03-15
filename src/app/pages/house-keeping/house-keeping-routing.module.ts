import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HkLostAndFoundComponent } from './hk-lost-and-found/hk-lost-and-found.component';
import { HkProcessToCleanComponent } from './hk-process-to-clean/hk-process-to-clean.component';
import { HkRoomStatusComponent } from './hk-room-status/hk-room-status.component';
import { HkTaskAssignmentComponent } from './hk-task-assignment/hk-task-assignment.component';

const routes: Routes = [
  {
    path: 'task-assignment',
    component: HkTaskAssignmentComponent
  },
  {
    path: 'process-to-clean',
    component: HkProcessToCleanComponent
  },
  {
    path: 'lost-and-found',
    component: HkLostAndFoundComponent
  },
  {
    path: 'room-status',
    component: HkRoomStatusComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HouseKeepingRoutingModule { }
