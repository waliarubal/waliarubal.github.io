export class ContactModel {
    private  _emails: string[];
    private _phones: string[];
    private _address: string;
    private _formsPreeEmail: string;

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
}