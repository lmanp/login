import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Student } from '../shared/model/student.model';
import { StudentService } from '../shared/services/student.service';
import { StudentListComponent } from '../student-list/student-list.component';

@Component({
    selector: 'tl-add',
    templateUrl: './add-student.component.html',
    providers: [StudentListComponent],
})

export class AddStudentComponent implements OnInit {

    student: Student;
    stud: FormGroup;
    submitted: boolean= true;

    constructor(private studentList: StudentListComponent, private studentService: StudentService, private fb: FormBuilder) { }

    students: Student[] = [];

    ngOnInit() {

        this.stud = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(5), Validators.pattern('[A-Za-z]+')]],
            dob: ['', [<any>Validators.required]],
            grade: ['', [<any>Validators.required, Validators.max(10),Validators.pattern("[1-9]+")]],
        });

    }
    // changeStudent(student)) {
    //     this.studentService.updateStudent(student).subscribe(()=>{
    //         this.loadStudents();
    //     },
    //     err => {
    //         console.log('subscrive err', err)
    //     });
    // }

    createStudent() {
        if (!this.stud.valid) {
            this.submitted = false;
            return;
        }
        else {
            const student = this.stud.value;
            console.log('adding student');
            console.log('added details ::', student);
            this.studentService.addStudent(student)
                .subscribe(() => {
                    console.log('student added::', student);
                    this.studentList.loadStudents();
                    console.log('datatable updated');
                });
            this.submitted = true;
        }
    }
}
