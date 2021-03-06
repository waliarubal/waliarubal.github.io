import { Component } from '@angular/core';
import { BaseComponent } from '@shared/base.component';
import { DataService } from '@services/data.service';
import { BasicInformationModel } from '@shared/models/basic.model';
import { ContactModel } from '@shared/models/contact.model';
import { SkillModel } from '@shared/models/skill.model';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html'
})
export class AboutComponent extends BaseComponent {
    private _basicInfo: BasicInformationModel;
    private _contact: ContactModel;
    private _skills: SkillModel;

    constructor(private _dataService: DataService) {
        super();
    }

    ngOnInit(): void {
        this._basicInfo = this._dataService.GetBasicInformation();
        this._contact = this._dataService.GetContact();
        this._skills = this._dataService.GetSkills();
    }

    get BasicInformation(): BasicInformationModel {
        return this._basicInfo;
    }

    get Contact(): ContactModel {
        return this._contact;
    }

    get Skills(): SkillModel {
        return this._skills;
    }
}