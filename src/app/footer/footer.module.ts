import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DmcaModule } from '../dmca/dmca.module';

import { FooterComponent } from './footer.component';

@NgModule({
    declarations: [
        FooterComponent
    ],
    imports: [
        BrowserModule,
        DmcaModule
    ],
    exports: [
        FooterComponent
    ],
    providers: []
})
export class FooterModule { }
