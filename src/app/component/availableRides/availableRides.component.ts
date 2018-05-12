import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'available-rides',
  templateUrl: './availableRides.component.html',
  styleUrls: ['./availableRides.component.css']
})
export class AvailableRidesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  rideDetails(){
    this.router.navigate(['/tab1']);
  }
}
