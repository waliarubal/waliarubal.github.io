import { Component } from '@angular/core';
import { DataService } from '@services/data.service';
import { SkillModel } from '@shared/models/skill.model';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html'
})
export class SkillsComponent {
    private _skills: SkillModel;

    constructor(private _dataService: DataService) {
        
    }

    ngOnInit(): void {
        this._skills = this._dataService.GetSkills();
    }

    get Skills(): SkillModel {
        return this._skills;
    }
}