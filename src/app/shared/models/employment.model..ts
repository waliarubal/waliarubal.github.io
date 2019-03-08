import { BaseModel } from './base.model';

export class EmploymentModel extends BaseModel {

    get Organization(): string {
        return this.Get('org');
    }

    set Organization(value: string) {
        this.Set('org', value);
    }
    
    get Designation(): string {
        return this.Get('post');
    }

    set Designation(value: string) {
        this.Set('post', value);
    }
    
    get JoinedOn(): Date {
        return this.Get('start');
    }

    set JoinedOn(value: Date) {
        this.Set('start', value);
    }
    
    get LeftOn(): Date {
        return this.Get('end');
    }

    set LeftOn(value: Date) {
        this.Set('end', value);
    }
    
    get JobDescription(): string[] {
        return this.Get('desc');
    }

    set JobDescription(value: string[]) {
        this.Set('desc', value);
    }
}