import { Dictionary } from '@shared/data-structures/dictionary';

export abstract class BaseModel {
    private readonly _variables: Dictionary<string, any>;

    constructor() {
        this._variables = new Dictionary();
    }

    protected Get<T>(key: string, deleteVariable: boolean = false): T {
        return <T>this._variables.Get(key, deleteVariable);
    }

    protected Set<T>(key: string, value: T): void {
        this._variables.Set(key, value);
    }
}