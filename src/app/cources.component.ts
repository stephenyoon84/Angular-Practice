import { CoursesService } from './courses.service';

import { Component } from '@angular/core'

@Component({
    selector: 'courses',
    template: `
        <h2>{{ getTitle() }}</h2>
        <img src="{{ imageUrl }}" />
        
        <h2 [textContent]="title"></h2>
        <img [src]="imageUrl" />
    `
})
export class CoursesComponent {
    title = "List of courses";
    courses;
    imageUrl = "http://lorempixel.com/400/200";

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }
    getTitle(){
        return this.title;
    }
}