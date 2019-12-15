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
        {{ courses.title | uppercase | lowercase }} <br/>
        {{ courses.students | number }} <br/>
        {{ courses.rating | number:'1.2-2' }} <br/>
        {{ courses.price | currency:'KRW':true:'3.2-2' }} <br/>
        {{ courses.releaseDate | date:'shortDate' }} <br/>
        {{ text | summary: 25 }}
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
    text = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    `
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