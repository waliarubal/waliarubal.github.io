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
    private _projects: FileModel[];
    private _pictures: FileModel[];

    constructor(private _dataService: DataService) {
        super();
    }

    ngOnInit(): void {
        this._projects = this._dataService.GetProjects();
        this._games = this._dataService.GetGames();
        this._pictures = this._dataService.GetPictures();
    }

    get Projects(): FileModel[] {
        return this._projects;
    }

    get Games(): FileModel[] {
        return this._games;
    }

    get Pictures(): FileModel[] {
        return this._pictures;
    }

}