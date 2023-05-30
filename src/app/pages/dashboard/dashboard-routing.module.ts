import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardListQuestionsComponent } from './dashboard-list-questions/dashboard-list-questions.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardListQuestionsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
