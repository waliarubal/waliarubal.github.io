import { BaseModel } from './base.model';

export class CourseModel extends BaseModel {

    get Name(): string {
        return this.Get('name');
    }

    set Name(value: string) {
        this.Set('name', value);
    }
    get Organization(): string {
        return this.Get('org');
    }

    set Organization(value: string) {
        this.Set('org', value);
    }

    get YearJoined(): number {
        return this.Get('start');
    }

    set YearJoined(value: number) {
        this.Set('start', value);
    }

    get YearCompleted(): number {
        return this.Get('end');
    }

    set YearCompleted(value: number) {
        this.Set('end', value);
    }


}