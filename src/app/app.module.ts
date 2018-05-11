import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ApiCallService } from './g-services/api-call.service';
import { SharedDataService } from './g-services/shared-data.service';

import { environment } from '../environments/environment';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { MainComponent } from './component/main/main.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { MAuthenticationComponent } from './component/main/m-authentication/m-authentication.component';
import { MShareRideComponent } from './component/main/m-share-ride/m-share-ride.component';
import { MRequestRideComponent } from './component/main/m-request-ride/m-request-ride.component';
import { AuthService } from './auth-service';
import { AuthGuard } from './auth-guard.service';
import { MRideListComponent } from './component/main/m-ride-list/m-ride-list.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    NavbarComponent,
    MAuthenticationComponent,
    MShareRideComponent,
    MRequestRideComponent,
    MRideListComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    AuthService, 
    AuthGuard,
    ApiCallService,
    SharedDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
