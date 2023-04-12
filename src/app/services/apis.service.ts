import { Injectable } from "@angular/core";
import { ApiObject, loginResponse } from "../login/login.model";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    apiUrl: string = "https://testapi.twirll.com";
    apiToken: string = "6105d90f54bf03c6132be66aab9b01b31aa09e3e01b5400d9adf8d8917a7699e";

    constructor(private http: HttpClient){}
    
    createLogin(postData:ApiObject): Observable<any>{
        return this.http.post(
            `${this.apiUrl}/sessions.json?access_token=${this.apiToken}`, postData, {withCredentials: true}
        )
    }
    
    userLogout(): Observable<any>{
        return this.http.delete(
            `${this.apiUrl}/signout.json?access_token=${this.apiToken}`, {withCredentials: true}
        )
    }
    
    userSession(): Observable<any>{
        return this.http.get(
            `${this.apiUrl}/validate_session.json?access_token=${this.apiToken}`, {withCredentials: true}
        )
    }

    getUserInfo(userId:number): Observable<any> {
        return this.http.get(
            `${this.apiUrl}/users/${userId}/edit.json?access_token=${this.apiToken}`,{withCredentials: true}
        )
    }

    getUserAddresses(postData:any): Observable<any>{
        return this.http.post(
            `${this.apiUrl}/users/retrieve_user_stored_address.json?access_token=${this.apiToken}`, postData, {withCredentials: true}
        )
    }

    updateUserAddress(postData:any): Observable<any>{
        return this.http.post(
            `${this.apiUrl}/users/update_user_address.json?access_token=${this.apiToken}`, postData, {withCredentials: true}
        )
    }

    deleteUserAddress(postData:any): Observable<any>{
        return this.http.post(
            `${this.apiUrl}/users/delete_user_address.json?access_token=${this.apiToken}`, postData, {withCredentials: true}
        )
    }

    getAppConfig(): Observable<any> {
        return this.http.get(
            `${this.apiUrl}/web_config/5/get_app_config.json?access_token=${this.apiToken}`,{withCredentials: true}
        )
    }

    getLocalData = () => {
        const localUrl = 'assets/data/smartphone.json';
        return this.http.get(localUrl)
        .subscribe(response => {
            console.log("local response: ",response)
        })
    }

    getCurrentLocalUser(){
        let returnUser = {} as loginResponse;
        const localUser = localStorage.getItem("current_user");
        if(!localUser || localUser === null || localUser === undefined){
            localStorage.setItem("current_user",JSON.stringify({}));
            return {};
        }
        else{
            return JSON.parse(localUser);
        }
    }
}