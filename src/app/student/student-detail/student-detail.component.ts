import { Component, OnInit } from '@angular/core';
import { SelectItem } from "primeng/primeng";

@Component({
  selector: 'student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  title: string = "Enter Student Details";
  date: string;
  dob: string;
  grades: SelectItem[] = this.loadGrades();


  ngOnInit(): void { }

  private loadGrades(): SelectItem[] {
    const grades: SelectItem[] = [];
    for (let i = 1; i <= 10; i++) {
      grades.push({ label: '' + i, value: i });
    }
    return grades;
  }
}