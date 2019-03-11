import { Component } from '@angular/core';
import { BaseComponent } from '@shared/base.component';
import { DataService } from '@services/data.service';
import { BasicInformationModel } from '@shared/models/basic.model';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent extends BaseComponent {
    private _basicInfo: BasicInformationModel;
    
    constructor(private _dataService: DataService) {
        super();
    }

    ngOnInit(): void {
        this._basicInfo = this._dataService.GetBasicInformation();
    }

    get BasicInformation(): BasicInformationModel {
        return this._basicInfo;
    }
}