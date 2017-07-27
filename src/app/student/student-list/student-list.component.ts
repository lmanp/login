import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { any } from 'codelyzer/util/function';
import { Student } from '../shared/model/student.model';
import { StudentService } from '../shared/services/student.service';

@Component({
    selector: 'tl-studentlist',
    templateUrl: './student-list.component.html',
})

export class StudentListComponent implements OnInit {

    student: Student;
    stud: FormGroup;
    submitted: boolean;


    constructor(private studentService: StudentService, private fb: FormBuilder) { }

    students: Student[] = [];

    ngOnInit() {
        this.loadStudents();
        // this.stud = this.fb.group({
        //     name: ['', [Validators.required, Validators.minLength(5), Validators.pattern('[A-Za-z]+')]],
        //     dob: ['', [<any>Validators.required]],
        //     grade: ['', [<any>Validators.required]],
        // });

    }

    test() {
        console.log('clciked test');
    }

    loadStudents() {
        this.studentService.getStudents().subscribe(students =>
            this.students = students);
    }

    deleteStudent(id: number) {
        this.studentService.removeStudent(id).subscribe(() => {
            this.loadStudents();
        },
            err => {
                console.log('subscrive err', err)
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

}
