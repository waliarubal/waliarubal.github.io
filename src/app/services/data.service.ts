import { Injectable } from '@angular/core';
import { BasicInformationModel } from '@shared/models/basic.model';
import { ContactModel } from '@shared/models/contact.model';
import { SkillModel } from '@shared/models/skill.model';
import { MediaModel } from '@shared/models/media.model';
import { ReferenceModel } from '@shared/models/reference.model';
import { Doublet } from '@shared/data-structures/doublet';
import { ExperienceModel } from '@shared/models/experience.model';
import { EmploymentModel } from '@shared/models/employment.model.';
import { CourseModel } from '@shared/models/course.model';

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
            `Hello! I am Rubal Walia, an experienced desktop & web application developer and vertran gamer. 
            Having almost 9 years of demonstrable industrial desktop application programming experience using .NET Framework, 
            now pushing boundaries towards web application development using Angular and .NET Core.`,
            `Excillent with framework like Windows Presentation Foundation, Universal Windows Platform,
            Silverlight and Windows Forms. Started career as component developer; now also experienced with
            integration of third party libraries, payment gateways & hardware in application, creation of application
            installers, web automation, data scraping, performance & memory profiling, software protection, licensing, etc.`
        ];
        return data;
    }

    GetContact(): ContactModel {
        let data = new ContactModel();
        data.Emails = ['walia.rubal@gmail.com'];
        data.FormsPreeEmail = data.Emails[0];
        data.Phones = ['+91-99288-93416'];
        data.Address = "Walia's, 78, 79, Kanji Nagar, Near Balti Factory, Agra Road, Jaipur, Rajasthan, India - 302031";
        data.Latitude = 26.887809;
        data.Longitude = 75.892514;
        return data;
    }

    GetSkills(): SkillModel {
        let data = new SkillModel();
        data.Languages = [
            'English',
            'Hindi',
            'Punjabi'
        ];
        data.ProfessionalSkills = [
            new Doublet('Desktop App Development (WPF, WinForms, UWP, Silverlight)', 92),
            new Doublet('Backend Development (WCF, Web API)', 68),
            new Doublet('Frontend Development (Angular, TypeScript, JavaScript)', 58),
            new Doublet('Database (MS SQL Server, MySQL, SQLite, Mongo DB, MS Access)', 78),
            new Doublet('.NET Framework & Mono (C#, VB.NET)', 85),
            new Doublet('IDE (VS, VS Code, Net Beans, Eclipse, SSMS, Azure Data Studio, MySQL Workbench)', 82),
            new Doublet('Version Control (Git, SVN, TFS)', 88),
            new Doublet('Operating Systems (Windows, Linux)', 75),
            new Doublet('Profiling, Code Protection & Reverse Engineering (DotPeek, Ants, SQL Profiler, Smart Assembly)', 82),
            new Doublet('UI Toolkits (Telerik, Infragistics, DevExpress, Xceed, Component Factory, Eto Forms)', 75),
            new Doublet('Installer Authoring (Install Shield, Install Aware, WiX Toolkit, Install4J)', 48),
            new Doublet('ORM (Dapper, Entity Framework)', 33),
            new Doublet('Java', 20)
        ];
        return data;
    }

    GetMedia(): MediaModel {
        let data = new MediaModel();
        data.AvatarImageUrl = "assets/images/anthony.jpg";
        data.CoverImageUrl = "assets/images/cc-bg-1.jpg";
        data.LinkedInUrl = "https://www.linkedin.com/in/waliarubal/";
        data.GitHubUrl = "https://github.com/waliarubal/";
        data.FacebookUrl = "https://www.facebook.com/people/Rubal-Walia/100001635701158";
        data.GooglePlusUrl = "https://plus.google.com/+RubalWalia1988";
        data.TwitterUrl = "https://twitter.com/walia_rubal";
        return data;
    }

    GetReferences(): ReferenceModel[] {
        let data: ReferenceModel[] = [
            <ReferenceModel>{
                Name: "Adrian Ilewicz",
                Designation: "Senior Technical Consultant",
                Organization: "iRiS Software Systems Ltd",
                AvatarImageUrl: "assets/images/adrian.jpg",
                Comments: [
                    "Rubal is a great .NET developer! He quickly grasps problems and implements solutions swiftly, producing clean and understandable code without overengineering solutions.",
                    "I had a pleasure managing Rubal as a contractor, and he exceeded our expectations!"]
            },
            <ReferenceModel>{
                Name: "Manish Bhatnagar",
                Designation: "Associate Director",
                Organization: "GirnarSoft",
                AvatarImageUrl: "assets/images/manish.jpg",
                Comments: [
                    "Rubal is an excellent technical guy. I have worked with him and during his tenure, I find Rubal a very reliable and expert in his field.",
                    "He has the rare combination of hard work and dedication towards the assignments given to him. He is one guy whom a team can trust for any new challenge."]
            },
            <ReferenceModel>{
                Name: "Vikas Tak",
                Designation: "Delivery Head",
                Organization: "GirnarSoft",
                AvatarImageUrl: "assets/images/vikas.jpg",
                Comments: [
                    "Versatile talent is what I would define Rubal has possessed and shown while we have worked together.",
                    "Rubal Walia has worked in my team for almost 4 years and done excellent contributions on project deliverable. His communication and technical skills are very impressive. He manages efficiently and easily the technical tasks, client communications and expectations simultaneously. He is quick learner for new technical skills and can use those effectively in assigned projects and tasks.",
                    "Rubal is a real asset to any team he is part of."]
            },
            <ReferenceModel>{
                Name: "Aditya Kedia",
                Designation: "Director",
                Organization: "Hyrefox Consultants Pvt Ltd",
                AvatarImageUrl: "assets/images/aditya-kedia.jpg",
                Comments: [
                    "Rubal is a dedicated hard working professional.",
                    "He has a knack for details and is always ready to go an extra mile for perfection."]
            }
        ];
        return data;
    }

    GetExperience(): ExperienceModel {
        let data = new ExperienceModel();
        data.Employment = [
            <EmploymentModel>{
                Organization: "Dotsquares Technologies India Pvt Ltd",
                Designation: "Senior Software Developer",
                JoinedOn: new Date(2017, 9, 1),
                JobDescription: [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                ]
            },
            <EmploymentModel>{
                Organization: "Girnar Software (SEZ) Pvt Ltd",
                Designation: "Senior Software Engineer",
                JoinedOn: new Date(2013, 9, 9),
                LeftOn: new Date(2017, 8, 31),
                JobDescription: [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                ]
            },
            <EmploymentModel>{
                Organization: "Incognito Technologies Pvt Ltd",
                Designation: "Software Developer / Applied Research",
                JoinedOn: new Date(2011, 11, 15),
                LeftOn: new Date(2013, 9, 7),
                JobDescription: [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                ]
            },
            <EmploymentModel>{
                Organization: "Computech Solutions",
                Designation: "Desktop App Developer",
                JoinedOn: new Date(2010, 4, 10),
                LeftOn: new Date(2011, 6, 15),
                JobDescription: [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                ]
            }
        ];
        return data;
    }

    GetCourses(): CourseModel[] {
        let data: CourseModel[] = [
            <CourseModel>{
                Name: "Microsoft Certifications",
                FullName: "Microsoft Certified Professional",
                Organization: "Microsoft",
                YearJoined: 2011,
                YearCompleted: 2012,
                Details: [
                    "Microsoft Certified Professional (Certification Number: E921-5531) achieved on April 16, 2012.",
                    "Microsoft® Certified Technology Specialist: .NET Framework 4, Windows Applications (Certification Number: D279-9599) achieved on June 1, 2011."
                ]
            },
            <CourseModel>{
                Name: "Bachelor's Degree",
                FullName: "Bachelor of Technology",
                Organization: "Rajasthan Technical University",
                YearJoined: 2006,
                YearCompleted: 2012,
                Details: ["Attained Bachelor of Technology degree in Computer Science and Engineering from CompuCom Institute of Information Technology and Management which is affiliated to Rajasthan Technical University."]
            },
            <CourseModel>{
                Name: "High School",
                FullName: "Science, Mathematics & Computers",
                Organization: "Centeral Board of Secondary Education",
                YearJoined: 2004,
                YearCompleted: 2006,
                Details: [
                    "Completed Secondary in the year 2004 from Seedling Public School which is affiliated to Central Board of Secondary Education. Subjects studied were English, Hindi, Mathematics, Scjence & Technology and Social Science",
                    "Completed Senior-Secondary in the year 2006 from Seedling Public School which is affiliated to Central Board of Secondary Education. Subjects studied were English, Mathematics, Physics, Chemistry and Informatics Practices."]
            }
        ];
        return data;
    }

}