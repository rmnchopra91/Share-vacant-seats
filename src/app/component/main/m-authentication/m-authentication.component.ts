import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-m-authentication',
  templateUrl: './m-authentication.component.html',
  styleUrls: ['./m-authentication.component.css']
})
export class MAuthenticationComponent implements OnInit {

  private adhaarViewFlag: boolean = false;
  private otpViewFlag: boolean = false;
  
  constructor(private router: Router) { }

  ngOnInit() {
    this.adhaarViewFlag = true;
  }

  adhaarVerification(){
    this.adhaarViewFlag = false;
    this.otpViewFlag = true;
  }
  otpVerification(){
    this.adhaarViewFlag = false;
    this.otpViewFlag = false;
    this.router.navigate(['/']);
  }

}
