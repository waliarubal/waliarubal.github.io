import { BaseModel } from './base.model';

export class DmcaModel extends BaseModel {

    get Id(): string {
        return this.Get('id');
    }

    set Id(value: string) {
        this.Set('id', value);
    }

    get Domain(): string {
        return this.Get('dmn');
    }

    set Domain(value: string) {
        this.Set('dmn', value);
    }

    get VerificationCode(): string {
        return this.Get('vc');
    }

    set VerificationCode(value: string) {
        this.Set('vc', value);
    }
}