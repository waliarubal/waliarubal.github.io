import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from '@app/app.component';
import { HeaderComponent } from '@app/header/header.component';
import { FooterComponent } from '@app/footer/footer.component';
import { ProfileComponent } from '@app/profile/profile.component';
import { AboutComponent } from '@app/about/about.component';
import { SkillsComponent } from '@app/skills/skills.component';
import { PortfolioComponent } from '@app/portfolio/portfolio.component';
import { ExperienceComponent } from '@app/experience/experience.component';
import { EducationComponent } from '@app/education/education.component';
import { ReferencesComponent } from '@app/references/references.component';
import { ContactComponent } from '@app/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProfileComponent,
    AboutComponent,
    SkillsComponent,
    PortfolioComponent,
    ExperienceComponent,
    EducationComponent,
    ReferencesComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
