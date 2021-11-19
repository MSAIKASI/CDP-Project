import { CourseAssignmentModel } from "./courseAssignment.model";

export class CourseModel {
  CourseId!: number;
  trainingPlatform!: string;
  courseName!: string;
  platformName!: string;
  courseUrl!: string;
  learningHours!: number;
  courseAssignment: CourseAssignmentModel = {
    assignmentId: 0,
    startDate: "",
    endDate: "",
    category: "",
    trainingType: "",
    userId: "kasim",
    
  };
  

}