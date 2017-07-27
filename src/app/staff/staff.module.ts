import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { DataTableModule, SharedModule, PanelModule, CalendarModule, TabViewModule } from 'primeng/primeng';

import { MdTabsModule, MdSelectModule, MdInputModule } from '@angular/material';

import{ StatusPipe } from './shared/pipes/status.pipe';

import { AddNontechStaffComponent } from './add/add-nontech-staff.component';
import { AddStaffComponent } from './add/add-staff.component';
import { AddTechStaffComponent } from './add/add-tech-staff.component';
import { SearchStaffComponent } from './search/search-staff.component';
import { StaffService } from './shared/services/staff.service';
import { AddressComponent } from '../address/address.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AddStaffComponent,
    AddNontechStaffComponent,
    AddTechStaffComponent,
    SearchStaffComponent,
    AddressComponent,
    StatusPipe
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    DataTableModule,
    SharedModule,
    HttpModule,
    TabViewModule,
    MdTabsModule,
    MdSelectModule,
    MdInputModule
  ],
  providers: [StaffService]
})
export class StaffModule { }