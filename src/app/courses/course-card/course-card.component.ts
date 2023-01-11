
import { AfterContentChecked, AfterViewChecked, Attribute, ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Course } from '../../model/course';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseCardComponent implements OnInit, OnDestroy, OnChanges, AfterContentChecked, AfterViewChecked {

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

  ngAfterViewChecked(): void {
    //console.log("ngAfterViewChecked")

    
  }


  ngAfterContentChecked(): void {
    //console.log("ngAfterContentChecked")
  }


  ngOnChanges(changes: SimpleChanges) {
    //console.log("onChanges", changes)
  }

  ngOnInit() {
    //console.log("ngOnInit")
  }

  //called when the component is destroyed
  ngOnDestroy() {
    //console.log("ngOnDestroy")
  }

  onSaveClicked(description:string) {

    this.courseEmitter.emit({...this.course, description});

  }

  onTitleChanged(newTitle: string) {
      
    this.course.description = newTitle;
  }


}
