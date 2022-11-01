import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendorEntryComponent } from './vendors/vendor-entry/vendor-entry.component';
import { VendorListComponent } from './vendors/vendor-list/vendor-list.component';
import { VendorsComponent } from './vendors/vendors.component';

const routes: Routes = [
  {path: 'vendorlist', component: VendorListComponent},
  {path: 'vendorentry', component: VendorEntryComponent},
  {path: 'vendors', component: VendorsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
