import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AgmCoreModule } from "@agm/core";
import { ProfileComponent } from '@app/content/profile/profile.component';
import { AboutComponent } from '@app/content/about/about.component';
import { SkillsComponent } from '@app/content/skills/skills.component';
import { PortfolioComponent } from '@app/content/portfolio/portfolio.component';
import { ExperienceComponent } from '@app/content/experience/experience.component';
import { EducationComponent } from '@app/content/education/education.component';
import { ReferencesComponent } from '@app/content/references/references.component';
import { ContactComponent } from '@app/content/contact/contact.component';
import { ContentComponent } from '@app/content/content.component';

@NgModule({
    declarations: [
        ProfileComponent,
        AboutComponent,
        SkillsComponent,
        PortfolioComponent,
        ExperienceComponent,
        EducationComponent,
        ReferencesComponent,
        ContactComponent,
        ContentComponent
    ],
    imports: [
        BrowserModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAvcDy5ZYc2ujCS6TTtI3RYX5QmuoV8Ffw'
        })
    ],
    exports: [
        ContentComponent
    ],
    providers: []
})
export class ContentModule { }
