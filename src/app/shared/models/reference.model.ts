import { BaseModel } from '@shared/models/base.model';

export class ReferenceModel extends BaseModel {

    get Name(): string {
        return this.Get("name");
    }

    set Name(value: string) {
        this.Set("name", value);
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

    get Comment(): string {
        return this.Get("comment");
    }

    set Comment(value: string) {
        this.Set("comment", value);
    }
}