import {AfterViewInit, Component, ContentChild, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Course} from '../model/course';
import {CourseImageComponent} from '../course-image/course-image.component';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit, AfterViewInit {

  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  @Output()
  courseSelected = new EventEmitter<Course>();

  @ContentChild(CourseImageComponent)
  image: CourseImageComponent;

  constructor() { }

  ngAfterViewInit(): void {
    console.log(this.image);
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
