import {AfterViewInit, Component, ElementRef, Inject, InjectionToken, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {CourseCardComponent} from './course-card/course-card.component';
import {HighlightedDirective} from './directives/highlighted.directive';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {CoursesService} from './services/courses.service';

//Function used to create an instance of the dependency
function coursesServiceProvider(http:HttpClient): CoursesService {
  return new CoursesService(http);
}

//Used to identify the dependency
export const COURSES_SERVICE = new InjectionToken<CoursesService>('COURSES_SERVICE');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ //define the provider for the dependency
    {
      provide: COURSES_SERVICE, //injection token
      useFactory: coursesServiceProvider, //factory function
      deps: [HttpClient] //parameters of the factory function
    }
  ]
})
export class AppComponent implements OnInit {

  courses$ : Observable<Course[]>;

  constructor(@Inject(COURSES_SERVICE) private  coursesService: CoursesService) {

  }

  ngOnInit() {
    //load the courses from our custom injectable service
    this.courses$ = this.coursesService.loadCourses();
  }

  save(course: Course) {
    this.coursesService.saveCourse(course)
      .subscribe(
        () => console.log('Course Saved !')
      );
  }

}
