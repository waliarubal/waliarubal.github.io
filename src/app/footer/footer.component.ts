import { Component, OnInit } from '@angular/core';
import { DataService } from '@services/data.service';
import { BasicInformationModel } from '@shared/models/basic.model';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {
    private _basicInfo: BasicInformationModel;

    constructor(private _dataService: DataService) {

    }

    ngOnInit(): void {
        this._basicInfo = this._dataService.GetBasicInformation();
    }

    get BasicInformation(): BasicInformationModel {
        return this._basicInfo;
    }

}