import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Vendor } from 'src/app/shared/vendor';
import { VendorsService } from 'src/app/shared/vendors.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.scss']
})
export class VendorListComponent implements OnInit {

//assign default page
page: number=1;
filter: string='';

  constructor(public vendorsService : VendorsService,
    private toastrService: ToastrService,
    private router:Router) { }

  ngOnInit(): void {
    this.vendorsService.bindGetAllVendorsList();
  }

  //subscrice getAllVendors
  getAllVendorsList(){
    //call service
    this.vendorsService.getAllVendors().subscribe(
      (response) => {
        console.log("Retrieving from List");
        console.log(response);
      },
      (error) => {
        console.log('something wrong');
        console.log(error);
      }
    );
  }

  //Update a Vendor
  updateVendor(vendorId : number){
    console.log(vendorId);
    //this.router.navigate(['userentry',userId]);
  }

  //Delete a User
  deleteVendor(vendorId : number){
    console.log("Deleting a record...");
    if(confirm('Are you sure to DELETE this record?')){
      this.vendorsService.deleteVendor(vendorId).subscribe(
        (result)=> {
          console.log(result);
          this.toastrService.error("Record has been DELETED successfully",'AssetManagement');
          this.vendorsService.bindGetAllVendorsList();
        },
        (error)=>{
          console.log(error);
        }
      );
    }
  }


  //Populate User Form for edit
  populateForm(vendor: Vendor){
    console.log(vendor);
    this.vendorsService.formVendorData=Object.assign({},vendor)
  }

}
