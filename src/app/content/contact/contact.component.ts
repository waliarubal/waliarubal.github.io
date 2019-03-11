import { Component } from '@angular/core';
import { BaseComponent } from '@shared/base.component';
import { DataService } from '@services/data.service';
import { ContactModel } from '@shared/models/contact.model';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html'
})
export class ContactComponent extends BaseComponent {
    private _contact: ContactModel;

    constructor(private _dataService: DataService) {
        super();
    }

    ngOnInit(): void {
        this._contact = this._dataService.GetContact();
    }

    get Contact(): ContactModel {
        return this._contact;
    }
}