import { HttpClient } from "@angular/common/http";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddCourseService } from "./addCourse.service";

describe('AddCourseComponent', () => {
    let addCourseService: AddCourseService;
    let httpClient: HttpClient;
    let httpController:HttpTestingController
  
    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [FormsModule, ReactiveFormsModule, HttpClientTestingModule],
            providers: [AddCourseService]
        });
         
            addCourseService = TestBed.inject(AddCourseService);
            httpClient = TestBed.inject(HttpClient);
            httpController = TestBed.inject(HttpTestingController);    
    });

    

    it('service create', () => {
        expect(addCourseService).toBeDefined();
    });
    

    it('Test the Post api', () => {
        const tastData = true;
        const inputData = {
            
        }
    })


});

