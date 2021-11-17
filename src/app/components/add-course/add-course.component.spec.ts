import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AddCourseComponent } from './add-course.component';

describe('AddCourseComponent', () => {
  let component: AddCourseComponent;
  let fixture: ComponentFixture<AddCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[FormsModule,ReactiveFormsModule,HttpClientTestingModule],
      declarations: [ AddCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('[Form-Check]- should check form is valid or not if no values entered', () => {
    expect(component.formValue.valid).toBeFalsy();
  });


  it('[Form-Check]- should check form is valid or not when values entered', () => {
    component.formValue.controls['trainingPlatform'].setValue('degreed');
    component.formValue.controls['courseName'].setValue('java fundamentals');
    component.formValue.controls['platformName'].setValue('java');
    component.formValue.controls['courseUrl'].setValue('http://localhost/4200');
    component.formValue.controls['learningHours'].setValue('2');
    component.formValue.controls['startDate'].setValue('12-12-21');
    component.formValue.controls['endDate'].setValue('21-12-21');
    component.formValue.controls['category'].setValue('mandatory');
    component.formValue.controls['trainingType'].setValue('extenal');

    expect(component.formValue.valid).toBeTruthy();
  })


  it('[Check-CourseName]- should check form is valid or not if no values entered', () => {
    expect(component.formValue.valid).toBeFalsy();
  });


});
