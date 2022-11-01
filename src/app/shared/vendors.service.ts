import { Injectable } from '@angular/core';
import { Assettype } from './assettype';
import { Vendor } from './vendor';
import { Vendortype } from './vendortype';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VendorsService {

  formVendorData:Vendor=new Vendor();

  vendors:Vendor[];
  ventorTypes:Vendortype[];
  assetTypes:Assettype[];

  constructor(private httpClient:HttpClient) { }

  //Get all vendors
  getAllVendors() : Observable<any>{
    return this.httpClient.get(environment.apiUrl + '/api/vendors');
  }

  //retrieve all vendors for listing
  bindGetAllVendorsList(){
    this.httpClient.get(environment.apiUrl + '/api/vendors')
    .toPromise()
    .then(
      (response) => {
        console.log(response);
        this.vendors = response as Vendor[]
      },
    );
  }

  //GET all vendor types for binding
bindGetAllVendorTypes(){
  this.httpClient.get(environment.apiUrl + "/api/vendortypes")
  .toPromise()
  .then(
    data=>{
      console.log(data);
      this.ventorTypes=data as Vendortype[]
    }
  );
}

  //GET all asset types for binding
  bindGetAllAssetTypes(){
    this.httpClient.get(environment.apiUrl + "/api/assettypes")
    .toPromise()
    .then(
      data=>{
        console.log(data);
        this.assetTypes=data as Assettype[]
      }
    );
  }

  //Insert Vendor
  insertVendor(vendor:Vendor):Observable<any>{
    return this.httpClient.post(environment.apiUrl + '/api/vendors',vendor);
  }

  //Update Vendor
  updateVendor(vendor:Vendor):Observable<any>{
    return this.httpClient.put(environment.apiUrl + '/api/vendors',vendor);
  }

  //Delete Vendor
  deleteVendor(vendorId:number){
    return this.httpClient.delete(environment.apiUrl + "/api/vendors/" + vendorId);
  }

  //Get a particular vendor
  getVendorById(vendorId:number):Observable<any>{
    return this.httpClient.get(environment.apiUrl + "/api/vendors/" + vendorId);
  }

}
