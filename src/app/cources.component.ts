import { CoursesService } from './courses.service';

import { Component } from '@angular/core'

@Component({
    selector: 'courses',
    template: `
        <h2>{{ getTitle() }}</h2>
        <img src="{{ imageUrl }}" />
        
        <h2 [textContent]="title"></h2>
        <img [src]="imageUrl" />
        <input #email (keyup.enter)="onKeyUp(email.value)" />
        <table>
            <tr>
                <td [attr.colspan]="colSpan"></td>
            </tr>
        </table>
        <button (click)="onSave($event)" class="btn btn-primary" [class.active]="isActive">Save</button>
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

    onKeyUp(email){
        console.log(email);
    }

    onSave($event) {
        $event.stopPropagation();
        console.log($event)
        // this.isActive = !this.isActive;
    }
}