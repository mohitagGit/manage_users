import { Component } from '@angular/core';
import { ApiService } from '../services/apis.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  currentUserInfo: any = {};
  constructor(private apiService: ApiService, private router:Router){
    this.currentUserInfo = apiService.getCurrentLocalUser();
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
