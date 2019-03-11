import { Component } from '@angular/core';
import { BaseComponent } from '@shared/base.component';

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html'
})
export class ContentComponent extends BaseComponent {

    constructor() {
        super();
    }

}