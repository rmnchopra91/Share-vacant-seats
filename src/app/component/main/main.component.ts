import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLoadShareRide(){
    this.router.navigate(['/tab2']);
  }
  changeRoute(route){
    switch (route) {
      case 'verification':
        this.router.navigate(['/verification']);
        break;
      case 'requestRide':
        this.router.navigate(['/requestRide']);  
        break;
      case 'shareRide':
        this.router.navigate(['/shareRide']);
        break;
      default:
        this.router.navigate(['/']);
        break;
    }
  }

}
