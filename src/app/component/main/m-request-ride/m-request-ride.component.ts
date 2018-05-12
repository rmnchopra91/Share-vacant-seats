import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-m-request-ride',
  templateUrl: './m-request-ride.component.html',
  styleUrls: ['./m-request-ride.component.css']
})
export class MRequestRideComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  requestRide(){
    this.router.navigate(['/aadharVerify']);
  }
}
