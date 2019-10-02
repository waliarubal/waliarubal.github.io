import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DmcaComponent } from './dmca.component';

@NgModule({
    declarations: [
        DmcaComponent
    ],
    imports: [
        BrowserModule
    ],
    exports: [
        DmcaComponent
    ],
    providers: []
})
export class DmcaModule { }
