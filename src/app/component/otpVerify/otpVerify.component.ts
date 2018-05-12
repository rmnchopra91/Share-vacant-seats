import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'otp-verify',
  templateUrl: './otpVerify.component.html',
  styleUrls: ['./otpVerify.component.css']
})
export class otpVerifyComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  otpSubmit(){
    this.router.navigate(['/availableRides']);
  }

}
