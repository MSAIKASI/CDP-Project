import { Component, OnInit } from '@angular/core';

import { AddCourseModel } from 'src/app/models/addCourse.model';
import { AddCourseService } from 'src/app/services/addCourse.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  searchText!:any ;
  courseData: any;
 courses!: AddCourseModel[];

  constructor(private addCourseService:AddCourseService) { }

  ngOnInit(): void {
   
    this.getCourses();
    
  }


  private getCourses() {
    this.addCourseService.getAllCourses().subscribe(res => {
      this.courses = res;
    })
  }

  // getCoursesBySearch() {
  //   this.addCourseService.getCourseByName(this.courseName).subscribe(res => {
  //     this.courseData = res;
  //   });
  // }
  

}