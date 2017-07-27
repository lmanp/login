import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTableModule,SharedModule } from 'primeng/primeng';
import { AppRouteModule } from './app-route.module';
import { CalendarModule } from 'primeng/primeng';
import { HttpModule, Http} from '@angular/http';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    AppRouteModule,
    DataTableModule,
    SharedModule,
    HttpModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
