/**
 * Created by kumar on 11/5/2017.
 */
import {Component} from '@angular/core'

@Component({
  selector: 'app-course',
  template:` 
    <h2> {{title}}</h2>
    <ul>
      <li *ngFor="let course of courses"> {{course}}</li>
    </ul>
  `
})


export class CourseComponent {

  title = "Welcome to Angular"
  courses = ["Course1", "Course2", "Course3"];

}
