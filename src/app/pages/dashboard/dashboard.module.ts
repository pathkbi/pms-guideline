import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataViewModule} from 'primeng/dataview';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardSearchComponent } from './dashboard-search/dashboard-search.component';
import { DashboardListQuestionsComponent } from './dashboard-list-questions/dashboard-list-questions.component';


@NgModule({
  declarations: [
    DashboardListQuestionsComponent,
    DashboardSearchComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DataViewModule
  ]
})
export class DashboardModule { }
