import { Extensions } from '@shared/extensions';

export class SkillModel {
    private _languages: string[];

    get Languages(): string[] {
        return this._languages;
    }

    set Languages(value: string[]) {
        this._languages = value;
    }

    get Language(): string {
        return Extensions.Join(',', this.Languages);
    }

    
}