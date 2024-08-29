import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { JsChallangesComponent } from './js-challanges/js-challanges.component';


@NgModule({
  declarations: [
    JsChallangesComponent
  ],
  imports: [
    CommonModule,
    ViewRoutingModule
  ]
})
export class ViewModule { }
