import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CommonModule } from '@angular/common';
import { AddCourseComponent } from './components/add-course/add-course.component';



@NgModule({
  declarations: [
    AppComponent,
    AddCourseComponent,
    CourseListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    CommonModule
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
