import { Component} from '@angular/core';
import { BaseComponent } from '@shared/base.component';
import { DataService } from '@services/data.service';
import { BasicInformationModel } from '@shared/models/basic.model';
import { MediaModel } from '@shared/models/media.model';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html'
})
export class ProfileComponent extends BaseComponent {
    private _basicInfo: BasicInformationModel;
    private _media: MediaModel;

    constructor(private _dataService: DataService) {
        super();
    }

    ngOnInit(): void {
        this._basicInfo = this._dataService.GetBasicInformation();
        this._media = this._dataService.GetMedia();
    }

    get BasicInformation(): BasicInformationModel {
        return this._basicInfo;
    }

    get Media(): MediaModel {
        return this._media;
    }
}