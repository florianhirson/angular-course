import { Component, Inject, OnInit } from '@angular/core';
import { COURSES } from '../db-data';
import { AppConfig, CONFIG_TOKEN } from './config';
import { CoursesService } from './courses/courses.service';
import { Course } from './model/course';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {

  //courses$: Observable<Course[]>;

  //courses: Course[];

  courses: Course[] = COURSES;

  constructor(private  coursesService: CoursesService,
              @Inject(CONFIG_TOKEN) private config:AppConfig) {
    //console.log(config)
  }



  ngOnInit() {
    //load the courses from our custom injectable service
    //this.courses$ = this.coursesService.loadCourses();

    //this.coursesService.loadCourses().subscribe(courses => {
    //  this.courses = courses;
    //});
    console.log("ngOnInit")
  }

  save(course: Course) {
    this.coursesService.saveCourse(course)
      .subscribe(
        () => console.log('Course Saved !')
      );
  }

  onEditCourse() {
    const course = this.courses[0];

    //Make a copy of the course object and change the description
    const newCourse = {
      ...course,
      description: 'ngOnChanges'
    };

    this.courses[0] = newCourse;
  }

}
