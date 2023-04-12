import { Component } from '@angular/core';
import { ApiService } from './services/apis.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'manage_user';

  constructor(private apiService: ApiService, private router:Router){
    apiService.userSession().subscribe({
      next: (response:any) => {
        if(response && response.session_active){
          if(response.user && response.user.length){
            localStorage.setItem("current_user",JSON.stringify(response.user[0]));
          }
        }
        else{
          this.router.navigate(['login']);
        }
      },
      error: (error) => {
        if(error.error.session_active === false){
          this.router.navigate(['login']);
        }
        if(error.error.errors){
          console.log(error.error);
        }
      }
    })
  }

  // ngOnInit() {}
  getConfig(){
    this.apiService.getAppConfig().subscribe(data =>{
      console.log();
    });
  }
}
