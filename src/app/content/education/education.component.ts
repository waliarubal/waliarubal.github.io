import { Component } from '@angular/core';
import { BaseComponent } from '@shared/base.component';
import { DataService } from '@services/data.service';
import { CourseModel } from '@shared/models/course.model';

@Component({
    selector: 'app-education',
    templateUrl: './education.component.html'
})
export class EducationComponent extends BaseComponent {
    private _courses: CourseModel[];

    constructor(private _dataService: DataService) {
        super();
    }

    ngOnInit(): void {
        this._courses = this._dataService.GetCourses();
    }

    get Courses(): CourseModel[] {
        return this._courses;
    }
}