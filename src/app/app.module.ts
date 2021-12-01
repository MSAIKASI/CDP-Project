import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    AddCourseComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    CommonModule,
    NgbPaginationModule,
    NgbAlertModule,
    NgbModule
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
