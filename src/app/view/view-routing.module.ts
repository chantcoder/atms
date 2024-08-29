import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JsChallangesComponent } from './js-challanges/js-challanges.component';

const routes: Routes = [
  { path: 'jschallanges', component: JsChallangesComponent },
  { path: '', component: JsChallangesComponent },
  { path: '**', redirectTo: 'jschallanges', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule { }
