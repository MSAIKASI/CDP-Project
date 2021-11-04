import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({providedIn:'root'})
export class AddCourseService {
  constructor(private httpClient: HttpClient) { }

  addNewCourse(data: any) {
    return this.httpClient.post<any>('http://localhost:8080/api/addCourse/create', data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  
  getAllCourses() {
    return this.httpClient.get<any>('http://localhost:8080/api/addCourse/findallcourses').pipe(
      map((res: any) => {
        return res;
      })
    );
  }


}