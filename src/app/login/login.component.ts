import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'tl-login',
    templateUrl: './login.component.html'
})

export class LoginComponent{
    constructor(private router: Router) { }

  redirect() {
    this.router.navigate(['./studentdetail']);
  }

}