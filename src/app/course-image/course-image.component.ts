import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'course-image',
  templateUrl: './course-image.component.html',
  styleUrls: ['./course-image.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class CourseImageComponent implements OnInit {

  @Input('src')
  imageUrl:string;



  constructor() { }

  ngOnInit() {
  }

}
