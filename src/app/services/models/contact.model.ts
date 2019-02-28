export class ContactModel {
    private  _emails: string[];
    private _phones: string[];
    private _address: string;

    get Emails(): string[] {
        return this._emails;
    }

    get Phones(): string[] {
        return this._phones;
    }

    get Address(): string {
        return this._address;
    }
}