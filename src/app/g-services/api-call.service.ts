import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class ApiCallService {
/***************.....variable declaration Start..... **************/
  private headers: any;
  private url: string = 'https://jsonplaceholder.typicode.com/';

/***************.....variable declaration End..... **************/

  constructor(private http: HttpClient) { }

  public httpCall(apiName: string, requestData: object= {}){
    
    let httpUrl = this.url;
    let httpMethod: string = 'get';
    
    this.headers = new Headers();
    switch (apiName) {
      case 'posts':
        httpUrl += apiName;
        break;
    
      default:
        break;
    }

    return this.http[httpMethod](httpUrl);
  }

}
