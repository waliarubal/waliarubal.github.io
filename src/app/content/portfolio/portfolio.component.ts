import { Component } from '@angular/core';
import { BaseComponent } from '@shared/base.component';
import { DataService } from '@services/data.service';
import { FileModel } from '@shared/models/file.model';

@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.component.html'
})
export class PortfolioComponent extends BaseComponent {
    private _games: FileModel[];

    constructor(private _dataService: DataService) {
        super();
    }

    ngOnInit(): void {
        this._games = this._dataService.GetGames();
    }

    get Games(): FileModel[] {
        return this._games;
    }

}