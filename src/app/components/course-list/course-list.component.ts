import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Course, CourseModel } from 'src/app/models/course.model';
import { AddCourseService } from 'src/app/services/addCourse.service';


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  searchText!:string ;
  courses!: Course[];

  disabledValue = false;
  
  
  formValue!: FormGroup;
  courseModel: CourseModel = new CourseModel();
  


  constructor(
    private formbuilder: FormBuilder,
    private addCourseService: AddCourseService, private router: Router) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      trainingPlatform:[''],
      courseName:[''],
      platformName: [''],
      courseUrl: [''],
      learningHours: 0,
      startDate: [''],
      endDate: [''],
      category: [''],
      trainingType: [''], 
      
    });
    this.getCourses();
    this.formValue = new FormGroup({
      trainingPlatform: new FormControl(null, Validators.required),
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
    this.courseModel.courseAssignment.startDate =this.formValue.value.startDate;
    this.courseModel.courseAssignment.endDate = this.formValue.value.endDate;
    this.courseModel.courseAssignment.category = this.formValue.value.category;
    this.courseModel.courseAssignment.trainingType = this.formValue.value.trainingType;
    this.courseModel.course.courseName = this.formValue.value.courseName;
    this.courseModel.course.trainingPlatform = this.formValue.value.trainingPlatform;
    this.courseModel.course.platformName = this.formValue.value.platformName;
    this.courseModel.course.courseUrl = this.formValue.value.courseUrl;
    this.courseModel.course.learningHours = this.formValue.value.learningHours;
    this.addCourseService.addNewCourse2(this.courseModel).subscribe(
        (res) => {
          console.log(res);
          alert('Course Added Successfully !!!');
          this.formValue.reset();
        }
      );  
  }

  onEdit(row: any) {
    this.courseModel.course.courseId = row.courseId;
    this.formValue.controls['trainingPlatform'].setValue(row.trainingPlatform);
    this.formValue.controls['courseName'].setValue(row.courseName);
    this.formValue.controls['platformName'].setValue(row.platformName);
    this.formValue.controls['courseUrl'].setValue(row.courseUrl);
    this.formValue.controls['learningHours'].setValue(row.learningHours);
    this.disabledValue = true;

  }

  

   getCourses() {
    this.addCourseService.getAllCourses().subscribe(res => {
      this.courses = res;
    })
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


  search() {
    if(this.searchText!=""){
      this.courses = this.courses.filter(res => {
        return (res.courseName.toLocaleLowerCase().match(this.searchText.toLocaleLowerCase()) ||res.platformName.toLocaleLowerCase().match(this.searchText.toLocaleLowerCase()))
      });
    
    }else if (this.searchText == "") {
      this.ngOnInit();
      
      } 
  }

  goToAddCourse() {
    this.router.navigate(['/addcourse']);
  }

  goToCourseList() {
    
    this.formValue.reset();
    this.disabledValue = false;
  }

  resetForm() {
    this.formValue.reset();
    this.disabledValue = false;
    
  }
}