import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { AddressComponent } from './address/address.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import { AuthGuard } from './auth/auth.service';

const routes: Routes = [
  {path: '',component:LandingComponent,canActivate: [AuthGuard]},
  {path: 'login',component:LoginComponent},
  {path: 'home',component:LandingComponent,canActivate: [AuthGuard]},
  {path: 'address',component:AddressComponent,canActivate: [AuthGuard]},
  {path: '**',component:PagenotfoundComponent,pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
