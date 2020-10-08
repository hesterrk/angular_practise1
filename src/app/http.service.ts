import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  //dependency injection
  constructor(private http: HttpClient) {}

  myMethod() {
    return this.http.get('https://api.openbrewerydb.org/breweries');
  }
}
