import { Component, OnInit } from '@angular/core';
import {  FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';
import { AddCourseModel } from 'src/app/models/addCourse.model';
import { AddCourseService } from 'src/app/services/addCourse.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],
  providers: [AddCourseService],
})
export class AddCourseComponent implements OnInit {
  formValue!: FormGroup;
  addCourseModel: AddCourseModel = new AddCourseModel();
  courseData!: any;
 

  constructor(
    private formbuilder: FormBuilder,
    private addCourseService: AddCourseService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      trainingPlatform:[''],
      courseName:[''],
      platformName: [''],
      courseUrl: [''],
      LearningHours: 0,
      startDate: [''],
      endDate: [''],
      category: [''],
      trainingType: [''],
      
    });
    this.getDate();
    this.getAllCourseDetails() 
    this.formValue = new FormGroup({
      trainingPlatform: new FormControl('', Validators.required),
      courseName: new FormControl(null, Validators.required),
      platformName: new FormControl(null, Validators.required),
      courseUrl: new FormControl(null, Validators.required),
      learningHours: new FormControl(null, Validators.required),
      startDate: new FormControl(null, Validators.required),
      endDate: new FormControl(null, Validators.required),
      category: new FormControl(null, Validators.required),
      trainingType: new FormControl(null, Validators.required),
    });
    
  }

  postCourseDetails() {
    this.addCourseModel.trainingPlatform = this.formValue.value.trainingPlatform;
    this.addCourseModel.courseName = this.formValue.value.courseName;
    this.addCourseModel.platformName = this.formValue.value.platformName;
    this.addCourseModel.courseUrl = this.formValue.value.courseUrl;
    this.addCourseModel.learningHours = this.formValue.value.learningHours;
    this.addCourseModel.startDate = this.formValue.value.startDate;
    this.addCourseModel.endDate = this.formValue.value.endDate;
    this.addCourseModel.category = this.formValue.value.category;
    this.addCourseModel.trainingType = this.formValue.value.trainingType;

    this.addCourseService.addNewCourse(this.addCourseModel).subscribe(
      (res) => {
        console.log(res);
        alert('Course Added Successfully !!!');
        this.formValue.reset();
        this.getAllCourseDetails();
      }
    );
  }

  getAllCourseDetails() {
    this.addCourseService.getAllCourses().subscribe((res) => {
      this.courseData = res;
    });
  }
 
  //Calender
  minDate: any = "";

  getDate() {
    var date: any = new Date();
    var toDate: any = date.getDate();
    if(toDate<10){
      toDate = '0' + toDate;
    }
    var month = date.getMonth() + 1;
    if (month < 10) {
      month = '0' + month;
    }
    var year = date.getFullYear();
    this.minDate = year + "-" + month + "-" + toDate;
    console.log(this.minDate);
  }
 

// Validators
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