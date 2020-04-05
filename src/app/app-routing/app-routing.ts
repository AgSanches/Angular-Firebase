import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {SneakerLandingComponent} from "../components/sneaker-landing/sneaker-landing.component";
import {SneakerMainComponent} from "../components/sneaker-main/sneaker-main.component";
import {SneakerLoginComponent} from "../components/sneaker-login/sneaker-login.component";
import {SneakerRegistrationComponent} from "../components/sneaker-registration/sneaker-registration.component";


const appRoutes: Routes = [
  {path: '', component: SneakerLandingComponent, children: [
      {path: '', component: SneakerMainComponent},
      {path: 'Access/Login', component: SneakerLoginComponent },
      {path: 'Access/Registration', component: SneakerRegistrationComponent },
    ]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
    )
  ]
})

export class AppRouting {}