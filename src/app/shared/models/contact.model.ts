export class ContactModel {
    private  _emails: string[];
    private _phones: string[];
    private _address: string;

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