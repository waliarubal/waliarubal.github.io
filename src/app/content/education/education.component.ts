import { Component } from '@angular/core';
import { DataService } from '@services/data.service';
import { CourseModel } from '@shared/models/course.model';

@Component({
    selector: 'app-education',
    templateUrl: './education.component.html'
})
export class EducationComponent {
    private _courses: CourseModel[];

    constructor(private _dataService: DataService) {

    }

    ngOnInit(): void {
        this._courses = this._dataService.GetCourses();
    }

    get Courses(): CourseModel[] {
        return this._courses;
    }
}