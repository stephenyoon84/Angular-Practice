import { CoursesService } from './courses.service';

import { Component } from '@angular/core'

@Component({
    selector: 'courses',
    template: `
        <h2>{{ getTitle() }}</h2>
        <img src="{{ imageUrl }}" />
        
        <h2 [textContent]="title"></h2>
        <img [src]="imageUrl" />
        <input [value]="email" (keyup.enter)="email = $event.target.value; onKeyUp()" />
        <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
        <table>
            <tr>
                <td [attr.colspan]="colSpan"></td>
            </tr>
        </table>
        <button (click)="onSave($event)" class="btn btn-primary" [class.active]="isActive">Save</button> <br/>
        {{ courses.title }} <br/>
        {{ courses.students }} <br/>
        {{ courses.rating | number }} <br/>
        {{ courses.price }} <br/>
        {{ courses.releaseDate }} <br/>
    `
})
export class CoursesComponent {
    title = "List of courses";
    courses = {
        title: "The Complete Angular Course",
        rating: 4.9745,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2019, 12, 14)
    };
    imageUrl = "http://lorempixel.com/400/200";
    colSpan = 2;
    isActive = true;
    email = "me@example.com";

    // constructor(service: CoursesService) {
    //     this.courses = service.getCourses();
    // }

    getTitle(){
        return this.title;
    }

    onKeyUp(){
        console.log(this.email);
    }

    onSave($event) {
        $event.stopPropagation();
        console.log($event)
        // this.isActive = !this.isActive;
    }
}