import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtmsComponent } from './dashboard/atms/atms.component';

const routes: Routes = [
  { path: '', component: AtmsComponent },
  { path: 'atms', component: AtmsComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
