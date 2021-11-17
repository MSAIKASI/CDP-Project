import { CourseAssignmentModel } from "./courseAssignment.model";

export class CourseModel {
  assignmentId!: number;
  trainingPlatform!: string;
  courseName!: string;
  platformName!: string;
  courseUrl!: string;
  learningHours!: number;
  courseAssignment: CourseAssignmentModel=new CourseAssignmentModel();

}