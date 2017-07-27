import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTableModule,SharedModule } from 'primeng/primeng';
import { AppRouteModule } from '../app-route.module';
import { CalendarModule } from 'primeng/primeng';
import { HttpModule, Http} from '@angular/http';



import { LoginComponent } from './login.component';

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
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
  bootstrap: [LoginComponent]
})
export class AppModule { }
