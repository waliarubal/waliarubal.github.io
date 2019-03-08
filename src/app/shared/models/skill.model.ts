import { Doublet } from '@shared/data-structures/doublet';
import { BaseModel } from './base.model';

export class SkillModel extends BaseModel {

    get Languages(): string[] {
        return this.Get('lang');
    }

    set Languages(value: string[]) {
        this.Set('lang', value);
    }

    get ProfessionalSkills(): Doublet<string, number>[] {
        return this.Get('skill');
    }

    set ProfessionalSkills(value: Doublet<string, number>[]) {
        this.Set('skill', value);
    }
}