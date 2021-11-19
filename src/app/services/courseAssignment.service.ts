import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CourseAssignmentModel } from "../models/courseAssignment.model";
import { CourseModel } from "../models/course.model";

@Injectable({providedIn:'root'})
export class AddCourseService {
   courseAssignment: CourseAssignmentModel = new CourseAssignmentModel();
   courseModel: CourseModel = new CourseModel();
  baseUrl = 'http://localhost:8080/api/addassignment/';

  baseUrl2 = 'http://localhost:8080/api/course/';

  constructor(private httpClient: HttpClient) {}

  addNewCourse1(courseModel:CourseModel):Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}/create1/${this.courseAssignment.userId}`, courseModel).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  addNewCourse2(courseModel:CourseModel):Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}/create2/${this.courseAssignment.userId}`, courseModel).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  addNewCourse(courseModel:CourseModel):Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}/create/${this.courseAssignment.userId}`, courseModel).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  createCourse(courseModel: CourseModel) :Observable<Object>{
    return this.httpClient.post(`${this.baseUrl2}/create/`,courseModel).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  // getCourseBy(courseId:number) {
  //   return this.httpClient.get<any>(`${this.baseUrl}/${this.courseAssignmentModel.courseId}`);
  // }
  
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