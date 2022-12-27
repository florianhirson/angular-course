import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from '../model/course';
import {CoursesService} from '../services/courses.service';
import {AppConfig} from '../config';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
  //removed providers so angular will look for the parent of this component providers
})
export class CourseCardComponent implements OnInit {

  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  @Output('courseChanged')
  courseEmitter = new EventEmitter<Course>();


  constructor(private  coursesService: CoursesService) {

  }

  ngOnInit() {

  }


  onSaveClicked(description:string) {

    this.courseEmitter.emit({...this.course, description});

  }




}
