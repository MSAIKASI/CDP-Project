import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CourseAssignmentModel } from "../models/courseAssignment.model";
import { Course } from "../models/course.model";

@Injectable({providedIn:'root'})
export class AddCourseService {
   courseAssignment: CourseAssignmentModel = new CourseAssignmentModel();
   courseModel: Course;
  baseUrl = 'http://localhost:8080/api/addassignment';

  baseUrl2 = 'http://localhost:8080/api/course/';

  constructor(private httpClient: HttpClient) {}

  // addNewAssignment(courseModel: CourseModel): Observable<Object> {
  //   return this.httpClient.post(`${this.baseUrl}/createassignment/${this.courseAssignment.userId}`, courseModel).pipe(
  //     map((res: any) => {
  //       return res;
  //     })
  //   );
  // }

  // addNewCourse(courseModel:CourseModel):Observable<Object> {
  //   return this.httpClient.post(`${this.baseUrl}/create/${this.courseAssignment.userId}`, courseModel).pipe(
  //     map((res: any) => {
  //       return res;
  //     })
  //   );
  // }

  addCourse(courseModel:Course):Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}/create`, courseModel).pipe(
      map((res: any) => {
        return res;
      })
    );
  }



  createCourse(courseModel: Course) :Observable<Object>{
    return this.httpClient.post(`${this.baseUrl2}/create/`,courseModel).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  
  
  getAllCourses() {
    return this.httpClient.get<any>( `${this.baseUrl2}/findallcourses`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getCourseByName(id:number) {
    return this.httpClient.get<any>(`${this.baseUrl2}/find/${id}`);
  }



}