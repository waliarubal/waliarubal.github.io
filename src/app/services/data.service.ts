import { Injectable } from '@angular/core';
import { BasicInformationModel } from '@shared/models/basic.model';
import { ContactModel } from '@shared/models/contact.model';
import { SkillModel } from '@shared/models/skill.model';

@Injectable({
    "providedIn": "root"
})
export class DataService {

    GetBasicInformation(): BasicInformationModel {
        let data = new BasicInformationModel();
        data.FirstName = 'Rubal';
        data.LastName = 'Walia';
        data.DateOfBirth = new Date(1988, 7, 1, 17, 42, 0, 0);
        data.Summary = [
            `Hello! I am Rubal Walia, desktop and web application developer. 
            Having almost 9 years of demonstrable industrial desktop application programming experience using .NET Framework, 
            now moving towards web application development using Angular and .NET Core.`,
            `Excillent with frameworks like Windows Presentation Foundation, Universal Windows Platform,
            Silverlight and Windows Forms. Started career as component developer, now also experienced with
            integration of
            third party libraries, payment gateways &amp; hardware in application, creation of application
            installers, web automation, data
            scraping, etc.`
        ];
        return data;
    }

    GetContact(): ContactModel {
        let data = new ContactModel();
        data.Emails = ['walia.rubal@gmail.com'];
        data.Phones = ['+91-99288-93416'];
        data.Address = "Walia's, 78, 79, Kanji Nagar, Near Balti Factory, Agra Road, Jaipur, Rajasthan, India";
        return data;
    }

    GetSkills(): SkillModel {
        let data = new SkillModel();
        data.Languages = ['English', 'Hindi', 'Punjabi'];
        return data;
    }

}