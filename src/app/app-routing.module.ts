import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './component/main/main.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { MAuthenticationComponent } from './component/main/m-authentication/m-authentication.component';
import { MShareRideComponent } from './component/main/m-share-ride/m-share-ride.component';
import { MRequestRideComponent } from './component/main/m-request-ride/m-request-ride.component';
import { MRideListComponent } from './component/main/m-ride-list/m-ride-list.component';

import { AuthGuard } from "./auth-guard.service";


const appRoutes: Routes = [
    {path: '', component: MainComponent},
    {path: 'tab1', canActivate: [AuthGuard], component: MAuthenticationComponent},
    {path: 'tab2', component: MShareRideComponent},
    {path: 'rideList', component: MRideListComponent},
    {path: 'tab3', component: MRequestRideComponent}
  ];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule{

}