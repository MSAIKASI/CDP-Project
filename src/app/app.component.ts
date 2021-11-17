import { Component } from '@angular/core';
import { AddCourseService } from './services/courseAssignment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AddCourseService],
})
export class AppComponent {
  title = 'CDP-Project';
}
