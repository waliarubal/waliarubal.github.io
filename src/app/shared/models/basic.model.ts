import { BaseModel } from './base.model';

export class BasicInformationModel extends BaseModel {

    get TagLine(): string {
        return this.Get('tag');
    }

    set TagLine(value: string) {
        this.Set('tag', value);
    }

    get FirstName(): string {
        return this.Get('f_name');
    }
    
    set FirstName(value: string) {
        this.Set('f_name', value);
    }

    get MiddleName(): string {
        return this.Get('m_name');
    }

    set MiddleName(value: string) {
        this.Set('m_name', value);
    }

    get LastName(): string {
        return this.Get('l_name');
    }

    set LastName(value: string) {
        this.Set('l_name', value);
    }

    get Name(): string {
        if (this.MiddleName)
            return `${this.FirstName} ${this.MiddleName} ${this.LastName}`.trim();

        return `${this.FirstName} ${this.LastName}`.trim();
    }

    get DateOfBirth(): Date {
        return this.Get('dob');
    }

    set DateOfBirth(value: Date) {
        this.Set('dob', value);
    }

    get Age(): number {
        const timeDifferenence = Math.abs(Date.now() - this.DateOfBirth.getTime());
        return Math.floor((timeDifferenence / (1000 * 3600 * 24)) / 365.25);
    }

    get Summary(): string[] {
        return this.Get('summary');
    }

    set Summary(value: string[]) {
        this.Set('summary', value);
    }
}