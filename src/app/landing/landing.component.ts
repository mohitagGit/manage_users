import { Component } from '@angular/core';
import { ApiService } from '../services/apis.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  currentUserInfo: any = {};
  constructor(private apiService: ApiService, private router:Router){
    const currentUser = apiService.getCurrentLocalUser();
    if(currentUser && currentUser.id){
      apiService.getUserInfo(currentUser.id)
      .subscribe({
        next: (response:[{}]) => {
            console.log("User response: ",response);
            this.currentUserInfo = response[0];
        },
        error: (error) => {
          console.log(error.error);
        }
      })
    }
  }

  onLogoutSession(){
    this.apiService.userLogout()
    .subscribe({
      next: (response:string) => {
          console.log("Login response: ",response);
          localStorage.removeItem("current_user");
          this.router.navigate(['login']);
      },
      error: (error) => {
        console.log(error.error);
      }
    })
  }
}