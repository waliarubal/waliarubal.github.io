import { BaseComponent } from '@shared/base.component';
import { Meta, MetaDefinition } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { DataService } from '@shared/services/data.service';
import { DmcaModel } from '@shared/models/dmca.model';

@Component({
    selector: 'app-dmca',
    templateUrl: './dmca.component.html'
})
export class DmcaComponent extends BaseComponent {
    readonly DMCA_DOMAIN: string = 'www.dmca.com';

    private _dmca: DmcaModel;

    constructor(private _metaService: Meta, private _dataService: DataService) {
        super();
    }

    ngOnInit(): void {
        this._dmca = this._dataService.GetDmca();
        this._metaService.addTag(<MetaDefinition>{ name: 'dmca-site-verification', content: this.Dmca.VerificationCode });
    }

    get Dmca(): DmcaModel {
        return this._dmca;
    }
}