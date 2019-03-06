import { Component, OnInit } from '@angular/core';
import { DataService } from '@services/data.service';
import { ContactModel } from '@shared/models/contact.model';
import { DomSanitizer, SafeUrl, SafeStyle } from '@angular/platform-browser';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {
    private _contact: ContactModel;

    constructor(private _dataService: DataService, private _sanatizer: DomSanitizer) {

    }

    ngOnInit(): void {
        this._contact = this._dataService.GetContact();
    }

    get Contact(): ContactModel {
        return this._contact;
    }

    get MapImageUrl(): SafeStyle {
        return this._sanatizer.bypassSecurityTrustStyle(this.Contact.MapImageUrl);
    }
}