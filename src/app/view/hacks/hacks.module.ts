import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HacksRoutingModule } from './hacks-routing.module';
import { HacksDashboardComponent } from './hacks-dashboard/hacks-dashboard.component';


@NgModule({
  declarations: [
    HacksDashboardComponent
  ],
  imports: [
    CommonModule,
    HacksRoutingModule
  ]
})
export class HacksModule { }
