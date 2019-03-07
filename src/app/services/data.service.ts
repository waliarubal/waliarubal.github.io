import { Injectable } from '@angular/core';
import { BasicInformationModel } from '@shared/models/basic.model';
import { ContactModel } from '@shared/models/contact.model';
import { SkillModel } from '@shared/models/skill.model';
import { MediaModel } from '@shared/models/media.model';
import { ReferenceModel } from '@shared/models/reference.model';

@Injectable({
    "providedIn": "root"
})
export class DataService {

    GetBasicInformation(): BasicInformationModel {
        let data = new BasicInformationModel();
        data.FirstName = 'Rubal';
        data.LastName = 'Walia';
        data.DateOfBirth = new Date(1988, 7, 1, 17, 42, 0, 0);
        data.TagLine = "Desktop App Developer, Web Developer, Gamer";
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
        data.FormsPreeEmail = data.Emails[0];
        data.Phones = ['+91-99288-93416'];
        data.Address = "Walia's, 78, 79, Kanji Nagar, Near Balti Factory, Agra Road, Jaipur, Rajasthan, India";
        data.Latitude = 26.887809;
        data.Longitude = 75.892514;
        return data;
    }

    GetSkills(): SkillModel {
        let data = new SkillModel();
        data.Languages = ['English', 'Hindi', 'Punjabi'];
        return data;
    }

    GetMedia(): MediaModel {
        let data = new MediaModel();
        data.AvatarImageUrl = "assets/images/anthony.jpg";
        data.ProfileImageUrl = "assets/images/cc-bg-1.jpg";
        data.LinkedInUrl = "https://www.linkedin.com/in/waliarubal/";
        data.GitHubUrl = "https://github.com/waliarubal/";
        data.FacebookUrl = "https://www.facebook.com/people/Rubal-Walia/100001635701158";
        data.GooglePlusUrl = "https://plus.google.com/+RubalWalia1988";
        data.TwitterUrl = "https://twitter.com/walia_rubal";
        return data;
    }

    GetReferences(): ReferenceModel[] {
        let data: ReferenceModel[] = [];
        data.push(<ReferenceModel>{
            Name: "Aditya Kedia",
            Designation: "Director",
            Organization: "Hyrefox Consultants Pvt Ltd",
            AvatarImageUrl: "assets/images/aditya-kedia.jpg",
            Comments: ["Rubal is a dedicated hard working professional.",
                "He has a knack for details and is always ready to go an extra mile for perfection."]
        });
        data.push(<ReferenceModel>{
            Name: "Adrian Ilewicz",
            Designation: "Senior Technical Consultant",
            Organization: "iRiS Software Systems Ltd",
            AvatarImageUrl: "assets/images/adrian.jpg",
            Comments: ["Rubal is a great .NET developer! He quickly grasps problems and implements solutions swiftly, producing clean and understandable code without overengineering solutions.",
            "I had a pleasure managing Rubal as a contractor, and he exceeded our expectations!"]
        });
        return data;
    }

}