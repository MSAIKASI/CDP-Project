import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Course } from 'src/app/models/course.model';
import { AddCourseService } from 'src/app/services/addCourse.service';

@Component({
  selector: 'app-manager-add-course',
  templateUrl: './manager-add-course.component.html',
  styleUrls: ['./manager-add-course.component.css']
})
export class ManagerAddCourseComponent implements OnInit {
  formValue: FormGroup;
  course: Course = new Course();
  courses: Course[];
  
  constructor(private formbuilder: FormBuilder,
    private addCourseService: AddCourseService, private router: Router) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      trainingPlatform:[''],
      courseName:[''],
      platformName: [''],
      courseUrl: [''],
      learningHours: 0,

      
    });
    
    this.getCourses();
     
    
    this.formValue = new FormGroup({
      trainingPlatform: new FormControl(null, Validators.required),
      courseName: new FormControl(null, Validators.required),
      platformName: new FormControl(null, Validators.required),
      courseUrl: new FormControl(null, Validators.required),
      learningHours: new FormControl(null, Validators.required),
    
    });
  }

  managerAddCourse() {
    this.course.courseName = this.formValue.value.courseName;
    this.course.trainingPlatform = this.formValue.value.trainingPlatform;
    this.course.platformName = this.formValue.value.platformName;
    this.course.courseUrl = this.formValue.value.courseUrl;
    this.course.learningHours = this.formValue.value.learningHours;
    this.addCourseService.createCourse(this.course).subscribe(
        (res) => {
          console.log(res);
          alert('Course Added Successfully !!!');
        this.formValue.reset();
        this.getCourses();
        }
      );  
  }



  getCourses() {
      this.addCourseService.getAllCourses().subscribe(res => {
        this.courses = res;
      })
      return;
  }

  //validations
  get trainingPlatform() {
    return this.formValue.get('trainingPlatform');
  }
  get courseName() {
    return this.formValue.get('courseName');
  }
  get platformName() {
    return this.formValue.get('platformName');
  }
  get courseUrl() {
    return this.formValue.get('courseUrl');
  }
  get learningHours() {
    return this.formValue.get('learningHours');
  }
  get startDate() {
    return this.formValue.get('startDate');
  }
  get endDate() {
    return this.formValue.get('endDate');
  }
  get category() {
    return this.formValue.get('category');
  }
  get trainingType() {
    return this.formValue.get('trainingType');
  }


}
