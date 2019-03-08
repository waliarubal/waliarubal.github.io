import { BaseModel } from './base.model';

export class ReferenceModel extends BaseModel {

    get Name(): string {
        return this.Get("name");
    }

    set Name(value: string) {
        this.Set("name", value);
    }

    get Organization(): string {
        return this.Get("org");
    }

    set Organization(value: string) {
        this.Set("org", value);
    }

    get Designation(): string {
        return this.Get("designation");
    }

    set Designation(value: string) {
        this.Set("designation", value);
    }

    get AvatarImageUrl(): string {
        return this.Get("avatar_url");
    }

    set AvatarImageUrl(value: string) {
        this.Set("avatar_url", value);
    }

    get Comments(): string[] {
        return this.Get("comment");
    }

    set Comments(value: string[]) {
        this.Set("comment", value);
    }
}