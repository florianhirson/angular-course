
import { Attribute, ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseCardComponent implements OnInit, OnDestroy {

  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  @Output('courseChanged')
  courseEmitter = new EventEmitter<Course>();

  //Use an Attribute decorator instead of an Input to improve performance
  constructor(private  coursesService: CoursesService, @Attribute('type') private type: string) {
    console.log(type)
  }

  ngOnInit() {

  }

  //called when the component is destroyed
  ngOnDestroy() {
    console.log("ngOnDestroy")
  }

  onSaveClicked(description:string) {

    this.courseEmitter.emit({...this.course, description});

  }

  onTitleChanged(newTitle: string) {
      
    this.course.description = newTitle;
  }


}
