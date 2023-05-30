import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigHotelComponent } from './config-hotel/config-hotel.component';
import { ConfigFacilityComponent } from './config-room/config-facility/config-facility.component';
import { ConfigFloorComponent } from './config-room/config-floor/config-floor.component';
import { ConfigRoomTypeComponent } from './config-room/config-room-type/config-room-type.component';
import { ConfigRoomViewComponent } from './config-room/config-room-view/config-room-view.component';
import { ConfigRoomComponent } from './config-room/config-room/config-room.component';

const routes: Routes = [
  {
    path: 'hotel',
    component: ConfigHotelComponent
  },
  {
    path: 'room',
    component: ConfigRoomComponent
  },
  {
    path: 'facility',
    component: ConfigFacilityComponent
  },
  {
    path: 'floor',
    component: ConfigFloorComponent
  },
  {
    path: 'room-type',
    component: ConfigRoomTypeComponent
  },
  {
    path: 'room-view',
    component: ConfigRoomViewComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigRoutingModule { }
