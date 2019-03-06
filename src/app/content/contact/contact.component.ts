import { Component, OnInit } from '@angular/core';
import { DataService } from '@services/data.service';
import { ContactModel } from '@shared/models/contact.model';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: [
        './contact.component.css'
    ]
})
export class ContactComponent implements OnInit {
    private _contact: ContactModel;

    constructor(private _dataService: DataService) {

    }

    ngOnInit(): void {
        this._contact = this._dataService.GetContact();
    }

    get Contact(): ContactModel {
        return this._contact;
    }
}