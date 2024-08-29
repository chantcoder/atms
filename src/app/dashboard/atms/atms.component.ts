import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
declare var $: any;


@Component({
  selector: 'app-atms',
  templateUrl: './atms.component.html',
  styleUrls: ['./atms.component.scss'],
})
export class AtmsComponent implements OnInit {
  constructor(private _api: ApiService) { }

  ngOnInit() {
    this.getFlightDetails();

    this.dumyLoaderCall();
  }

  dumyLoaderCall() {
    this.showLoader().then(() => {
      setTimeout(()=>{
        this.hideLoader();
      },500)
    })
  }
  origin: string = '';
  destination: string = '';
  airlines: string = '';
  date: string | any = '';

  cities: any[] = [];
  airlineList: any[] = [];
  allFlightData: any[] = [];

  getFlightDetails() {
    this.showLoader();
    this._api.getFlightData().subscribe({
      next: (result: any[]) => {
        this.allFlightData = result;
        this.cities = [...new Set(result.map(flight => flight.origin))];
        this.airlineList = [...new Set(result.map(flight => flight.airline))];
      },
      error: () => this.hideLoader(),
      complete: () => this.hideLoader()
    });

  }

  swapLocations(): void {
    [this.origin, this.destination] = [this.destination, this.origin];
  }

  // swapLocation() {
  //   let swaplocation = this.origin;
  //   this.origin = this.destination;
  //   this.destination = swaplocation;
  // }


  isOrigin: boolean = false;
  isDestination: boolean = false;
  isDate: boolean = false;
  searchClicked: boolean = false;
  flightsList: any[] = [];
  searchFlight() {
    this.flightsList = [];
    if (
      this.origin == undefined ||
      this.origin == null ||
      this.origin.trim() == ''
    ) {
      this.origin = '';
      this.isOrigin = true;
      return;
    } else {
      this.isOrigin = false;
    }
    if (
      this.destination == undefined ||
      this.destination == null ||
      this.destination.trim() == ''
    ) {
      this.destination = '';
      this.isDestination = true;
      return;
    } else {
      this.isDestination = false;
    }
    if (this.date == undefined || this.date == null || this.date.trim() == '') {
      this.date = '';
      this.isDate = true;
      return;
    } else {
      this.isDate = false;
    }

    if (this.origin == this.destination) {
      alert('origin and destination cant be same');
      this.resetFields();
      return;
    }

    this.searchClicked = true;

    let dateObject = new Date(this.date);
    if (this.airlines != '') {
      this.flightsList = this.allFlightData.filter(
        (flight) =>
          flight.origin == this.origin &&
          flight.destination == this.destination &&
          new Date(flight.departureTime).getFullYear() ===
          dateObject.getFullYear() &&
          new Date(flight.departureTime).getMonth() === dateObject.getMonth() &&
          new Date(flight.departureTime).getDate() === dateObject.getDate() &&
          flight.airline == this.airlines
      );
    } else {
      this.flightsList = this.allFlightData.filter(
        (flight) =>
          flight.origin == this.origin &&
          flight.destination == this.destination &&
          new Date(flight.departureTime).getFullYear() ===
          dateObject.getFullYear() &&
          new Date(flight.departureTime).getMonth() === dateObject.getMonth() &&
          new Date(flight.departureTime).getDate() === dateObject.getDate()
      );
    }
  }


  priceFilterValue: any = null;
  priceFilter() {
    if (this.priceFilterValue == 1) {
      this.sortFlightsByPriceLowToHigh(this.flightsList);
    } else {
      this.sortFlightsByPriceHighToLow(this.flightsList);
    }
  }

  sortFlightsByPriceLowToHigh(flightsList: any[]) {
    this.flightsList = flightsList.sort((a, b) => a.price - b.price);
  }

  sortFlightsByPriceHighToLow(flightsList: any[]) {
    this.flightsList = flightsList.sort((a, b) => b.price - a.price);
  }


  resetFields() {
    this.origin = '';
    this.destination = '';
    this.date = '';
    this.priceFilterValue = null;
    this.airlines = '';
    this.flightsList = [];
    this.searchClicked = false;
    this.isDate = false;
    this.isDestination = false;
    this.isOrigin = false;
  }

  flightBookingList: any[] = [];
  bookFlight(data: any[]) {
    $('.flightDetailModal').modal('show');
    this.flightBookingList.push(data);
  }

  ticketBooked() {
    $('.flightDetailModal').modal('hide');
    setTimeout(() => {
      $('.flightBookedSuccess').modal('show');
    }, 200);
  }


  resetModalData() {
    this.flightBookingList = [];
  }

  resetAfterSuccess() {
    this.resetModalData();
    this.resetFields();
    $('.flightBookedSuccess').modal('hide');
  }


  pendingRequests: number = 0;
  isLoader: boolean = false;
  async showLoader() {
    this.pendingRequests++;
    this.isLoader = true;
  }

  async hideLoader() {
    this.pendingRequests--;
    if (this.pendingRequests === 0) {
      this.isLoader = false;
    }
  }

}
