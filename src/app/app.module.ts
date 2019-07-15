import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from '@app/app.component';
import { ContentModule } from './content/content.module';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from '@app/header/header.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ContentModule,
    FooterModule,
    HeaderModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
