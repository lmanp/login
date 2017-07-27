import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { CalendarModule } from 'primeng/primeng';

import { StudentService } from './shared/services/student.service';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentListComponent } from './student-list/student-list.component';
import { AddStudentComponent } from './add-student/add-student.component';

@NgModule({
  declarations: [
    StudentDetailComponent,
    StudentListComponent,
    AddStudentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    DataTableModule,
    SharedModule, 
    HttpModule
  ],
  providers: [ StudentService ]
})
export class StudentModule { }
