import { Component } from '@angular/core';
import { DataService } from '@services/data.service';
import { ReferenceModel } from '@shared/models/reference.model';

@Component({
    selector: 'app-references',
    templateUrl: './references.component.html'
})
export class ReferencesComponent {
    private _references: ReferenceModel[];

    constructor(private _dataService: DataService) {

    }

    ngOnInit(): void {
        this._references = this._dataService.GetReferences();
    }

    get References(): ReferenceModel[] {
        return this._references;
    }
}