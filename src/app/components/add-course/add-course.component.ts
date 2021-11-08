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
  courseData! :any;

  constructor(
    private formbuilder: FormBuilder,
    private addCourseService: AddCourseService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      courseName: [''],
      platform: [''],
      courseUrl: [''],
      noOfHours: 0,
      startDate: [''],
      endDate: [''],
    });
    this.getDate();
    this.formValue = new FormGroup({
      courseName: new FormControl(null, Validators.required),
      platform: new FormControl(null, Validators.required),
      courseUrl: new FormControl(null, Validators.required),
      noOfHours: new FormControl(null, Validators.required),
      startDate: new FormControl(null, Validators.required),
      endDate: new FormControl(null, Validators.required),
    });
    
  }

  postCourseDetails() {
    this.addCourseModel.courseName = this.formValue.value.courseName;
    this.addCourseModel.platform = this.formValue.value.platform;
    this.addCourseModel.courseUrl = this.formValue.value.courseUrl;
    this.addCourseModel.noOfHours = this.formValue.value.noOfHours;
    this.addCourseModel.startDate = this.formValue.value.startDate;
    this.addCourseModel.endDate = this.formValue.value.endDate;

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
  get courseName() {
    return this.formValue.get('courseName');
  }
  get platform() {
    return this.formValue.get('platform');
  }
  get courseUrl() {
    return this.formValue.get('courseUrl');
  }
  get noOfHours() {
    return this.formValue.get('noOfHours');
  }
  get startDate() {
    return this.formValue.get('startDate');
  }
  get endDate() {
    return this.formValue.get('endDate');
  }

  
}
