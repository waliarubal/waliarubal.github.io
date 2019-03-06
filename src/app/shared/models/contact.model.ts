import { Extensions } from '@shared/extensions';

export class ContactModel {
    private  _emails: string[];
    private _phones: string[];
    private _address: string;
    private _formsPreeEmail: string;
    private _lat: number;
    private _long: number;

    get FormsPreeEmail(): string {
        return this._formsPreeEmail;
    }

    set FormsPreeEmail(value: string) {
        this._formsPreeEmail = value;
    }

    get Emails(): string[] {
        return this._emails;
    }

    set Emails(value: string[]) {
        this._emails = value;
    }

    get Phones(): string[] {
        return this._phones;
    }

    set Phones(value: string[]) {
        this._phones = value;
    }

    get Address(): string {
        return this._address;
    }

    set Address(value: string) {
        this._address = value;
    }

    get Latitude(): number {
        return this._lat;
    }

    set Latitude(value: number) {
        this._lat = value;
    }

    get Longitude(): number {
        return this._long;
    }

    set Longitude(value: number) {
        this._long = value;
    }

    get MapImageUrl(): string {
        return Extensions.GetMapImageUrl(this.Latitude, this.Longitude);
    }
}