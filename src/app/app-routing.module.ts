import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtmsComponent } from './dashboard/atms/atms.component';
import { DashboardComponent } from './app-dashboard/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: "js-challanges",
    loadChildren: () => import('./view/view.module').then(m => m.ViewModule)
  },
  {
    path:'hacks',
    loadChildren:()=> import('./view/hacks/hacks.module').then(m => m.HacksModule)
  },
  {
    path:'ui-handy-examples',
    loadChildren:()=> import('./view/handy-ui-examples/handy-ui-examples.module').then(m=>m.HandyUiExamplesModule)
  },



  { path: '', component: DashboardComponent },
  { path: 'atms', component: AtmsComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
