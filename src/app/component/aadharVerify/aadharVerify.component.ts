import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'aadhar-verify',
  templateUrl: './aadharVerify.component.html',
  styleUrls: ['./aadharVerify.component.css']
})
export class AadharVerifyComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  aadharNumberSubmitRide(){
    this.router.navigate(['/otpVerify']);
  }

}
