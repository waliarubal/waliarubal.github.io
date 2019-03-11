import { Component } from '@angular/core';
import { BaseComponent } from '@shared/base.component';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent extends BaseComponent {

    constructor() {
        super();
    }
}