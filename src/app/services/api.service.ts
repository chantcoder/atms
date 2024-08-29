import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) { }

  private dataUrl = '';
  // https://api.npoint.io/378e02e8e732bb1ac55b

  getFlightData(): Observable<any> {
    return this.http.get<any>(this.dataUrl);
  }
}