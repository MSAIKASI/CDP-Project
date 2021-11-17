import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CourseAssignmentModel } from "../models/courseAssignment.model";
import { CourseModel } from "../models/course.model";

@Injectable({providedIn:'root'})
export class AddCourseService {
  courseAssignmentModel: CourseAssignmentModel = new CourseAssignmentModel();
  courseModel: CourseModel = new CourseModel();
  baseUrl = 'http://localhost:8080/api/addassignment/';

  baseUrl2 = 'http://localhost:8080/api/course/';

  constructor(private httpClient: HttpClient) {}

  addNewCourse1(data: any) {
    return this.httpClient.post<any>(`${this.baseUrl}/create1/${this.courseAssignmentModel.userId}`, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  addNewCourse2(data: any) {
    return this.httpClient.post<any>(`${this.baseUrl}/create2/${this.courseAssignmentModel.userId}`, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  createCourse(data: any) {
    return this.httpClient.post<any>(`${this.baseUrl2}/create/`, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getCourseBy(courseId:number) {
    return this.httpClient.get<any>(`${this.baseUrl}/${this.courseAssignmentModel.courseId}`);
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