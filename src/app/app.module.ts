import { CoursesComponent } from './cources.component';
import { AuthorsService } from './authors.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { CourseComponent } from './course/course.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorsComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    AuthorsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
