import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

cardArr:any[] = [
  {cardName:'Js Challange',class:"bg-primary text-white",path:'/js-challanges',title:'Click to Visit JS Challanges'},
  {cardName:' Angular Hacks',class:"bg-success text-white",path:'/hacks',title:'Click to See Angular Hacks'},
  {cardName:'UI Handy Examples',class:"bg-warning text-white",path:'/ui-handy-examples',title:'Click to Experience UI Handy Examples'},
  {cardName:'Air Ticketing',class:"bg-warning text-white",path:'/atms',title:'Click to book Flight'},
]











}
