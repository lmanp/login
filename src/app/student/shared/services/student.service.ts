import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Student } from '../model/student.model';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class StudentService {
  constructor(private http: Http) { }

  private studentsUrl = 'http://localhost:3000/students';
  private loginUrl = 'http://localhost:3000/login';

  getStudents(): Observable<Student[]> {
    return this.http.get(this.studentsUrl)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }

  removeStudent(id: number): Observable<Student[]> {
    console.log(id);
    return this.http.delete(this.studentsUrl + '/' + id)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  // updateStudent (body: Object): Observable<Comment[]> {
  //       let bodyString = JSON.stringify(body); 
  //       let headers      = new Headers({ 'Content-Type': 'application/json' });
  //       let options       = new RequestOptions({ headers: headers }); 

  //       return this.http.put(`${this.studentsUrl}/${body['id']}`, body, options) 
  //                        .map((res:Response) => res.json()) 
  //                        .catch((error:any) => Observable.throw(error.json().error || 'Server error')); 
  //   }   

  addStudent(student: Student): Observable<Student[]> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.studentsUrl, JSON.stringify(student), options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json()));
  }

}
