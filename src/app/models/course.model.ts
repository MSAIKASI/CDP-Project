import { CourseAssignmentModel } from "./courseAssignment.model";

export class  CourseModel  {
  
  courseAssignment: CourseAssignmentModel = {
    startDate: new Date(0),
    endDate: new Date(0),
    category: "",
    trainingType: "",
    userId: "kasim"
  };
  course: Course = {
    trainingPlatform: "" ,
  courseName: "" ,
  platformName: "" ,
  courseUrl:"" ,
  learningHours: 0
    
  }

}
export interface Course {
  courseId?: number;
  trainingPlatform: string ;
  courseName: string;
  platformName: string;
  courseUrl: string;
  learningHours: number;
}