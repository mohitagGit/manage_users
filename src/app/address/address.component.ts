import { Component } from '@angular/core';
import { ApiService } from '../services/apis.service';
import { Router } from '@angular/router';

import { UpdateAddress } from './address.model';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent {
  crUserDelAddress: any = [{}];
  crUserBilAddress: any = [{}];
  constructor(private apiService: ApiService, private router:Router){

    // delivery is 4 billing is 3
    const shippingAddObj = {address_type:4}
    apiService.getUserAddresses(shippingAddObj)
    .subscribe({
      next: (response:[{}]) => {
          console.log("Delivery Address response: ",response);
          this.crUserDelAddress = response;
      },
      error: (error:any) => {
        console.log(error);
      }
    });

    const billingAddObj = {address_type:3}
    apiService.getUserAddresses(billingAddObj)
    .subscribe({
      next: (response:[{}]) => {
          console.log("Billing Address response: ",response);
          this.crUserBilAddress = response;
      },
      error: (error:any) => {
        console.log(error);
      }
    });
  }

  deleteAddressHandler(addressId:number){
    const delAddObj = {user_address_id:[addressId]}
    this.apiService.deleteUserAddress(delAddObj)
    .subscribe({
      next: (response:string) => {
          console.log(response);
      },
      error: (error:any) => {
        console.log(error);
      }
    });
  }

  updateAddressHandler(addToUpdate:UpdateAddress){
    const updateAddObj = {user_address:{
      address_id: addToUpdate.address_id,
      address_line1: addToUpdate.address_line1,
      address_line2: addToUpdate.address_line2,
      city: addToUpdate.city,
      contact_name: addToUpdate.contact_name,
      country: addToUpdate.country,
      email_id: addToUpdate.email_id,
      default_address:true,
      id: addToUpdate.id,
      phone_no: addToUpdate.phone_no,
      state: addToUpdate.state,
      suburb: addToUpdate.suburb,
      zipcode: addToUpdate.zipcode
    }}
    this.apiService.updateUserAddress(updateAddObj)
    .subscribe({
      next: (response:string) => {
          console.log(response);
          console.log("Billing Address response: ",response);
      },
      error: (error:any) => {
        console.log(error);
      }
    });
  }
}
