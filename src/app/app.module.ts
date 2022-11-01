import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VendorsComponent } from './vendors/vendors.component';
import { VendorListComponent } from './vendors/vendor-list/vendor-list.component';
import { VendorEntryComponent } from './vendors/vendor-entry/vendor-entry.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { VendorsService } from './shared/vendors.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    VendorsComponent,
    VendorListComponent,
    VendorEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    NgxPaginationModule,
    Ng2SearchPipeModule
  ],
  providers: [VendorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
