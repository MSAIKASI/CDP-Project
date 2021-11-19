import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AddCourseModel } from "../models/addCourse.model";

@Injectable({providedIn:'root'})
export class AddCourseService {
  addCourseModal: AddCourseModel = new AddCourseModel();
  baseUrl = ' http://localhost:3000/addCourse';
  

  constructor(private httpClient: HttpClient) {}

  // addNewCourse(data: any) {
  //   return this.httpClient.post<any>(`${this.baseUrl}/create/${this.addCourseModal.userId}`, data).pipe(
  //     map((res: any) => {
  //       return res;
  //     })
  //   );
  // }

  addNewCourse(data: any) {
    return this.httpClient.post<any>('http://localhost:3000/addCourse', data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  
  // getAllCourses() {
  //   return this.httpClient.get<any>( `${this.baseUrl}/findallcourses`).pipe(
  //     map((res: any) => {
  //       return res;
  //     })
  //   );
  // }

  // getCourseByName(courseName:string) {
  //   return this.httpClient.get<any>(`${this.baseUrl}?courseName:${courseName}`);
  // }


}