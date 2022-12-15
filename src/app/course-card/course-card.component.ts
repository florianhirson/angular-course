import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren,
  EventEmitter,
  Input,
  OnInit,
  Output, QueryList, TemplateRef,
  ViewChild
} from '@angular/core';
import {Course} from '../model/course';
import {CourseImageComponent} from '../course-image/course-image.component';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit, AfterViewInit, AfterContentInit {

  @Input()
  course: Course;

  @Input()
  noImageTemplate: TemplateRef<any>

  @Input()
  cardIndex: number;

  @Output()
  courseSelected = new EventEmitter<Course>();

  @ContentChildren(CourseImageComponent)
  images: QueryList<CourseImageComponent>;

  constructor() { }

  ngAfterContentInit(): void {
    console.log(this.images);
    }

  ngAfterViewInit(): void {
    // console.log(this.images);
  }

  ngOnInit(): void {
  }

  onCourseViewed() {
    // console.log("card component - button clicked ...");

    this.courseSelected.emit(this.course);
  }

  //Only true if the course and course.iconUrl aren't undefined and empty
  isImageVisible() {
    return this.course && this.course.iconUrl
  }

  cardClasses() {
    if(this.course.category == 'BEGINNER') {
      return 'beginner';
    }
  }

  cardStyles() {
    return {
      // 'background-image': 'url(' + this.course.iconUrl + ')'
    };
  }
}
