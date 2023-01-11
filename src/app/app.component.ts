import { Component, Inject, Injector, OnInit } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { COURSES } from '../db-data';
import { AppConfig, CONFIG_TOKEN } from './config';
import { CourseTitleComponent } from './course-title/course-title.component';
import { CoursesService } from './courses/courses.service';
import { Course } from './model/course';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {

  //courses$: Observable<Course[]>;

  courses: Course[] = COURSES;

  coursesTotal = this.courses.length;

  constructor(private  coursesService: CoursesService,
              @Inject(CONFIG_TOKEN) private config:AppConfig,
              private injector: Injector) {
    console.log("Number of courses", this.coursesTotal)
  }



  ngOnInit() {
    //load the courses from our custom injectable service
    //this.courses$ = this.coursesService.loadCourses();

    //this.coursesService.loadCourses().subscribe(courses => {
    //  this.courses = courses;
    //});
    
    const htmlElement = createCustomElement(CourseTitleComponent, {injector:this.injector});

    customElements.define('course-title', htmlElement);

  }

  save(course: Course) {
    this.coursesService.saveCourse(course)
      .subscribe(
        () => console.log('Course Saved !')
      );
  }

  onEditCourse() {
    const course = this.courses[1];

    console.log('Edit course ', course)

    this.courses[1].category = 'ADVANCED';
  }

}
