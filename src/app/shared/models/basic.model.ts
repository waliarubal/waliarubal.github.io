export class BasicInformationModel {
    private _firstName: string;
    private _middleName: string;
    private _lastName: string;
    private _dob: Date;
    private _summary: string[];

    get FirstName(): string {
        return this._firstName;
    }
    
    set FirstName(value: string) {
        this._firstName = value;
    }

    get MiddleName(): string {
        return this._middleName;
    }

    set MiddleName(value: string) {
        this._middleName = value;
    }

    get LastName(): string {
        return this._lastName;
    }

    set LastName(value: string) {
        this._lastName = value;
    }

    get Name(): string {
        if (this.MiddleName)
            return `${this.FirstName} ${this.MiddleName} ${this.LastName}`.trim();

        return `${this.FirstName} ${this.LastName}`.trim();
    }

    get DateOfBirth(): Date {
        return this._dob;
    }

    set DateOfBirth(value: Date) {
        this._dob = value;
    }

    get Age(): number {
        const timeDifferenence = Math.abs(Date.now() - this.DateOfBirth.getTime());
        return Math.floor((timeDifferenence / (1000 * 3600 * 24)) / 365.25);
    }

    get Summary(): string[] {
        return this._summary;
    }

    set Summary(value: string[]) {
        this._summary = value;
    }
}