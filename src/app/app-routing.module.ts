import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCourseComponent } from './components/add-course/add-course.component';


const routes: Routes = [
  { path: '', component: AddCourseComponent },
  { path: 'addcourse', component: AddCourseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
