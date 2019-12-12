import { CoursesService } from './courses.service';

import { Component } from '@angular/core'

@Component({
    selector: 'courses',
    template: `
        <h2>{{ getTitle() }}</h2>
        <img src="{{ imageUrl }}" />
        
        <h2 [textContent]="title"></h2>
        <img [src]="imageUrl" />
        <table>
            <tr>
                <td [attr.colspan]="colSpan"></td>
            </tr>
        </table>
        <button [style.backgroundColor]="isActive ? 'blue' : 'white'" class="btn btn-primary" [class.active]="isActive">Save</button>
    `
})
export class CoursesComponent {
    title = "List of courses";
    courses;
    imageUrl = "http://lorempixel.com/400/200";
    colSpan = 2;
    isActive = true;

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }

    getTitle(){
        return this.title;
    }


}