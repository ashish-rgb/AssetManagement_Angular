import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { VendorsService } from 'src/app/shared/vendors.service';

@Component({
  selector: 'app-vendor-entry',
  templateUrl: './vendor-entry.component.html',
  styleUrls: ['./vendor-entry.component.scss']
})
export class VendorEntryComponent implements OnInit {

  constructor(public vendorsService : VendorsService,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    //get all vendor types and asset types
    this.vendorsService.bindGetAllVendorTypes();
    this.vendorsService.bindGetAllAssetTypes();
  }

  //submit
  onSubmit(form: NgForm){
    console.log(form.value);
    //INSERT =0 or UPDATE >=1
    let insertId=this.vendorsService.formVendorData.vendorId;

    //checking for Insert or Update 
    if(insertId==0 || insertId==null){
      //INSERT
      this.insertVendorRecord(form);
    }else{
      //UPDATE
      this.updateVendorRecord(form);
    }
  }

  //Insert method
  insertVendorRecord(form?:NgForm){
    console.log("Inserting a record");
    console.log(form.value);
    this.vendorsService.insertVendor(form.value).subscribe(
      (result)=>{
        console.log(result);
        this.toastrService.success("Vendor record has been inserted",'AssetManagement');
        window.location.reload();
      }
    );
  }

  //Update method
  updateVendorRecord(form?:NgForm){
    console.log("Updating a record");
    console.log(form.value);
    this.vendorsService.updateVendor(form.value).subscribe(
      (result)=>{
        console.log(result);
        this.toastrService.success("Vendor record has been updated",'AssetManagement');
        //window.location.reload();
      }
    );
  }

}
