import { Component, OnInit } from '@angular/core';
import {  FormBuilder,FormGroup } from '@angular/forms';
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
    this.getAllCourseDetails();
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

}
