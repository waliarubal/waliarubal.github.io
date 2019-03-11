import { Component } from '@angular/core';
import { BaseComponent } from '@shared/base.component';
import { DataService } from '@services/data.service';
import { ExperienceModel } from '@shared/models/experience.model';

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html'
})
export class ExperienceComponent extends BaseComponent {
    private _experience: ExperienceModel;

    constructor(private _dataService: DataService) {
        super();
    }

    ngOnInit(): void {
        this._experience = this._dataService.GetExperience();
    }

    get Experience(): ExperienceModel {
        return this._experience;
    }
}