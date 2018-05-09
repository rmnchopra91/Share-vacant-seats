import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { SwPush, SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  constructor(private swUpdate : SwUpdate){
    // the body of constructor method
  }

  ngOnInit(){
    if(this.swUpdate.isEnabled){
      this.swUpdate.available.subscribe(() => {
        if(confirm("New Version avialable")){
          window.location.reload();
        }
      });
    }
  }
}
