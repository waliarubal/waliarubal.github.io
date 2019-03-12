import { BaseModel } from './base.model';

export class FileModel extends BaseModel {

    get ImageUrl(): string {
        return this.Get('url');
    }

    set ImageUrl(value: string) {
        this.Set('url', value);
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