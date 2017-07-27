import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Ntstaff } from '../model/ntstaff.model';
import { Tstaff } from '../model/tstaff.model';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class StaffService {
  constructor(private http: Http) { }

  private tstaffUrl = 'http://localhost:3000/teachingstaff';
  private ntstaffUrl = 'http://localhost:3000/nonteachstaff';
  

  getTstaff(): Observable<Tstaff[]> {
    return this.http.get(this.tstaffUrl)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }

  getNtstaff(): Observable<Ntstaff[]> {
    return this.http.get(this.ntstaffUrl)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }

  removeTstaff(id: number): Observable<Ntstaff[]> {
    return this.http.delete(this.tstaffUrl + '/' + id)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  removeNtstaff(id: number): Observable<Ntstaff[]> {
    return this.http.delete(this.ntstaffUrl + '/' + id)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  addTstaff(staff: Tstaff): Observable<Tstaff[]> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.tstaffUrl, JSON.stringify(staff), options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json()));
  }

  addNtstaff(staff: Ntstaff): Observable<Ntstaff[]> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.ntstaffUrl, JSON.stringify(staff), options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json()));
  }
}
