import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Course} from '../model/course';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

let counter = 0;

@Injectable() //removed the type of injector to manually inject the class
export class CoursesService {

  id: number;

  constructor(private http: HttpClient) {
    counter++;

    this.id = counter;
  }

  loadCourses(): Observable<Course[]> {
    //do a http get call to get the courses
    const  params = new HttpParams()
      .set("page", "1")
      .set("pageSize", "10");

    return this.http.get<Course[]>(`/api/courses`, {params});
  }

  saveCourse(course: Course) {
    //custom headers
    const headers  = new HttpHeaders()
      .set("X-Auth", "userId")

    //do a http put to update the course
    return this.http.put(`/api/courses/${course.id}`, course, {headers});
  }
}
