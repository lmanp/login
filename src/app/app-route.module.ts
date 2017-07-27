import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import {
    AddNontechStaffComponent,
    AddStaffComponent,
    AddTechStaffComponent,
    SearchStaffComponent,
    StaffModule,
} from './staff';
import { AddStudentComponent, StudentDetailComponent, StudentListComponent, StudentModule } from './student';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'studentdetail', component: StudentDetailComponent },
  { path: 'studentlist', component: StudentListComponent },
  { path: 'addstudent', component: AddStudentComponent },
  { path: 'addstaff', component: AddStaffComponent },
  { path: 'addtstaff', component: AddTechStaffComponent },
  { path: 'addntstaff', component: AddNontechStaffComponent },
  { path: 'stafflist', component: SearchStaffComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes), StudentModule, StaffModule],
  exports: [RouterModule]
})
export class AppRouteModule { }