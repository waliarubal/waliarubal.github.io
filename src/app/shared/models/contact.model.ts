import { Extensions } from '@shared/extensions';
import { BaseModel } from '@shared/models/base.model';

export class ContactModel extends BaseModel {

    get FormsPreeEmail(): string {
        return this.Get('fpe');
    }

    set FormsPreeEmail(value: string) {
        this.Set('fpe', value);
    }

    get Emails(): string[] {
        return this.Get('emails');
    }

    set Emails(value: string[]) {
        this.Set('emails', value);
    }

    get Phones(): string[] {
        return this.Get('phones');
    }

    set Phones(value: string[]) {
        this.Set('phones', value);
    }

    get Address(): string {
        return this.Get('address');
    }

    set Address(value: string) {
        this.Set('address', value);
    }

    get Latitude(): number {
        return this.Get('lat');
    }

    set Latitude(value: number) {
        this.Set('lat', value);
    }

    get Longitude(): number {
        return this.Get('long');
    }

    set Longitude(value: number) {
        this.Set('long', value);
    }

    get MapImageUrl(): string {
        return Extensions.GetMapImageUrl(this.Latitude, this.Longitude);
    }
}