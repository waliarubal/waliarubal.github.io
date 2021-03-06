import { BaseModel } from './base.model';

export class MediaModel extends BaseModel {

    get ResumeUrl(): string {
        return this.Get('cv');
    }

    set ResumeUrl(value: string) {
        this.Set('cv', value);
    }

    get AvatarImageUrl(): string {
        return this.Get('avatar_img');
    }

    set AvatarImageUrl(value: string) {
        this.Set('avatar_img', value);
    }

    get CoverImageUrl(): string {
        return this.Get('profile_img');
    }

    set CoverImageUrl(value: string) {
        this.Set('profile_img', value);
    }

    get FacebookUrl(): string {
        return this.Get('fb');
    }

    set FacebookUrl(value: string) {
        this.Set('fb', value);
    }

    get TwitterUrl(): string {
        return this.Get('twit');
    }

    set TwitterUrl(value: string) {
        this.Set('twit', value);
    }

    set GooglePlusUrl(value: string) {
        this.Set('gp', value);
    }

    get LinkedInUrl(): string {
        return this.Get('in');
    }

    set LinkedInUrl(value: string) {
        this.Set('in', value);
    }

    get GitHubUrl(): string {
        return this.Get('gh');
    }

    set GitHubUrl(value: string) {
        this.Set('gh', value);
    }

    get InstagramUrl(): string {
        return this.Get('insta');
    }

    set InstagramUrl(value: string) {
        this.Set('insta', value);
    }
}