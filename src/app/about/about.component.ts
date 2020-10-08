import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  // Create an object that will hold all of the results that api returns
  brews: Object;

  // Process is called dependency injection by which we are referncing our service =>
  // 1. we create an instance of it
  constructor(private _http: HttpService) {}

  // This is a lifecycle hook: whatever code inside of here runs when the component renders
  ngOnInit(): void {
    //calling the method from within the http service file
    this._http.myMethod().subscribe((data) => {
      // storing data in the bews object
      this.brews = data;
      console.log(this.brews);
    });
  }
}
