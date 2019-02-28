export class BasicInformationModel {
    private _firstName: string;
    private _middleName: string;
    private _lastName: string;
    private _dob: Date;
    
    get FirstName(): string {
        return this._firstName;
    }

    get MiddleName(): string {
        return this._middleName;
    }

    get LastName(): string {
        return this._lastName;
    }

    get Name(): string {
        if (this.MiddleName)
            return `${this.FirstName} ${this.MiddleName} ${this.LastName}`.trim();

        return `${this.FirstName} ${this.LastName}`.trim();
    }

    get DateOfBirth(): Date {
        return this._dob;
    }

    get Age(): number {
        const timeDifferenence = Math.abs(Date.now() - this.DateOfBirth.getTime());
        return Math.floor((timeDifferenence / (1000 * 3600 * 24)) / 365.25);
    }
}