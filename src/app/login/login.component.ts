import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ApiObject } from './login.model';
import { ApiService } from '../services/apis.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username = "";
  password = "";

  constructor(private apiService: ApiService, private router:Router){}

  apiInputObj: ApiObject = {
    session: {
      username: "",
      password: "",
      user_account_type: 1,
    },
    user_login_activity : {
      latitude:"",
      longitude:"",
      device_id:"1",
      device_type:1,
      device_token:"",
      application_id:1,
      app_version:"2023.03.25.11",
      timezone:""
    }
  }

  onLoginSubmit(form:NgForm):void{
    if(this.username && this.password){
      this.apiInputObj.session.username = this.username;
      this.apiInputObj.session.password = this.password;
      this.apiService.createLogin(this.apiInputObj)
      .subscribe({
        next: (response:[{}]) => {
            console.log("Login response: ",response);
            localStorage.setItem("current_user",JSON.stringify(response[0]));
            this.router.navigate(['home']);
        },
        error: (error) => {
          console.log(error.error);
        }
      })
    }
  }
}
