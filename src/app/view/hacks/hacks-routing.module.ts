import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HacksDashboardComponent } from './hacks-dashboard/hacks-dashboard.component';

const routes: Routes = [
  {path:'',component:HacksDashboardComponent},
  { path: 'hacks', component: HacksDashboardComponent },
  { path: '**', redirectTo: 'hacks', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HacksRoutingModule { }
