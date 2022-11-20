import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {CourseCardComponent} from './course-card/course-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{

  courses = COURSES;

  startDate = new Date(2000, 0, 1);

  title  = COURSES[0].description;

  price = 9.99556565656;

  rate = 0.67;

  course = COURSES[0];

  @ViewChild('cardRef1', {read: ElementRef})
  card1: CourseCardComponent;

  @ViewChild('courseImage')
  courseImage: ElementRef;

  constructor() {


  }

  ngAfterViewInit(): void {
    console.log("courseImage", this.courseImage);
  }

  onCourseSelected(course:Course) {
    console.log("containerDiv", this.card1);
  }
}
