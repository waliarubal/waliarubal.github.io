import { BaseModel } from './base.model';

export class FileModel extends BaseModel {

    get Url(): string {
        return this.Get('url')
    }

    set Url(value: string) {
        this.Set('url', value);
    }

    get ImageUrl(): string {
        return this.Get('i_url');
    }

    set ImageUrl(value: string) {
        this.Set('i_url', value);
    }

    get Title(): string {
        return this.Get('title');
    }

    set Title(value: string) {
        this.Set('title', value);
    }

    get Description(): string {
        return this.Get('desc');
    }

    set Description(value: string) {
        this.Set('desc', value);
    }
}