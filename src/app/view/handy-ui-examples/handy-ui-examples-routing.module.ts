import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HuiDashboardComponent } from './hui-dashboard/hui-dashboard.component';

const routes: Routes = [
  {path:'',component:HuiDashboardComponent},
  { path: 'ui-hacks', component: HuiDashboardComponent },
  { path: '**', redirectTo: 'ui-hacks', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HandyUiExamplesRoutingModule { }
