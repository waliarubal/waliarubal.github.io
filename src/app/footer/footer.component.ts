import { Component } from '@angular/core';
import { BaseComponent } from '@shared/base.component';
import { DataService } from '@services/data.service';
import { BasicInformationModel } from '@shared/models/basic.model';
import { MediaModel } from '@shared/models/media.model';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html'
})
export class FooterComponent extends BaseComponent {
    private _basicInfo: BasicInformationModel;
    private _media: MediaModel;
    private readonly _year: number;

    constructor(private _dataService: DataService) {
        super();
        this._year = new Date().getFullYear();
    }

    ngOnInit(): void {
        this._basicInfo = this._dataService.GetBasicInformation();
        this._media = this._dataService.GetMedia();
    }

    get CopyrightYear(): number {
        return this._year;
    }

    get BasicInformation(): BasicInformationModel {
        return this._basicInfo;
    }

    get Media(): MediaModel {
        return this._media;
    }

}