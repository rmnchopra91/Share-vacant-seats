import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../../g-services/api-call.service'
import { SharedDataService } from '../../../g-services/shared-data.service';

@Component({
  selector: 'app-m-ride-list',
  templateUrl: './m-ride-list.component.html',
  styleUrls: ['./m-ride-list.component.css']
})
export class MRideListComponent implements OnInit {

  constructor(
    private _apiCall: ApiCallService,
    private _sd: SharedDataService
  ) { }

  ngOnInit() {
    this.getRideList();
  }

  getRideList(){
    this._apiCall.httpCall('posts')
      .subscribe(response =>{
        console.log('list of get api' , response);
        this._sd.setData('rideList' , response ? response.slice(0,10) : []);
      });
  }

}
