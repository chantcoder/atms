import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HandyUiExamplesRoutingModule } from './handy-ui-examples-routing.module';
import { HuiDashboardComponent } from './hui-dashboard/hui-dashboard.component';


@NgModule({
  declarations: [
    HuiDashboardComponent
  ],
  imports: [
    CommonModule,
    HandyUiExamplesRoutingModule
  ]
})
export class HandyUiExamplesModule { }
