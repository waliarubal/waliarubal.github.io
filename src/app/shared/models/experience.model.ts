import { BaseModel } from './base.model';
import { EmploymentModel } from './employment.model.';

export class ExperienceModel extends BaseModel {

    get Employment(): EmploymentModel[] {
        return this.Get('emp');
    }

    set Employment(value: EmploymentModel[]) {
        this.Set('emp', value);
    }

}