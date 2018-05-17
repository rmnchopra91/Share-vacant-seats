import { Injectable } from '@angular/core';

@Injectable()
export class SharedDataService {
  private sharedDataObj: any = {}; 

  constructor() { }

  public setData(key: any, value: any){
    this.sharedDataObj[key] = value;
  }

  public getData(key: any){
      return this.sharedDataObj[key] ? this.sharedDataObj[key] : null;
  }

  public deleteData(key: any){
    delete this.sharedDataObj[key];
  }


}
