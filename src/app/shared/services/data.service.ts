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
import { FileModel } from '@shared/models/file.model';

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
            `Hello! I am Rubal Walia, an experienced desktop & web application developer and a vertran gamer. 
            Having almost 9 years of demonstrable industrial desktop application programming experience using .NET Framework, 
            now pushing boundaries towards web application development using Angular and .NET Core.`,
            `Excellent with framework like Windows Presentation Foundation, Universal Windows Platform,
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
            new Doublet('Desktop App Development (WPF, WinForms, UWP, Silverlight, Avalonia)', 92),
            new Doublet('Backend Development (WCF, Web API)', 68),
            new Doublet('Frontend Development (Angular, TypeScript, JavaScript, Electron)', 72),
            new Doublet('Database (MS SQL Server, MySQL, SQLite, Mongo DB, MS Access)', 78),
            new Doublet('.NET Framework & Mono (C#, VB.NET)', 85),
            new Doublet('IDE (VS, VS Code, Net Beans, Eclipse, SSMS, Azure Data Studio, MySQL Workbench)', 82),
            new Doublet('Version Control (Git, SVN, TFS)', 88),
            new Doublet('Operating Systems (Windows, Linux)', 75),
            new Doublet('Profiling, Code Protection & Reverse Engineering (DotPeek, Ants, SQL Profiler, Smart Assembly)', 82),
            new Doublet('UI Toolkits (Telerik, Infragistics, DevExpress, Xceed, Component Factory)', 75),
            new Doublet('Installer Authoring (Install Shield, Install Aware, WiX Toolkit, Install4J)', 48),
            new Doublet('ORM (Dapper, Entity Framework)', 42)
        ];
        return data;
    }

    GetMedia(): MediaModel {
        let data = new MediaModel();
        data.AvatarImageUrl = "assets/images/photos/rubal.png";
        data.CoverImageUrl = "assets/images/photos/cover.jpg";
        data.ResumeUrl = "assets/RubalWalia.pdf";
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
                AvatarImageUrl: "assets/images/people/adrian.jpg",
                Comments: [
                    "Rubal is a great .NET developer! He quickly grasps problems and implements solutions swiftly, producing clean and understandable code without overengineering solutions.",
                    "I had a pleasure managing Rubal as a contractor, and he exceeded our expectations!"]
            },
            <ReferenceModel>{
                Name: "Bernard Leigh",
                Designation: "Vice President (Customer Success)",
                Organization: "Aurea Software",
                AvatarImageUrl: "assets/images/people/bernie.jpg",
                Comments: [
                    "I always found Rubal's attitude and approach, alongside his quality of work delivered to be refreshing. He became a resource that I would be able to count on and always had good interactions with my teams.",
                    "I would definitely consider him for a role in one of my teams should there be a requirement in the future."
                ]
            },
            <ReferenceModel>{
                Name: "Manish Bhatnagar",
                Designation: "Associate Director",
                Organization: "GirnarSoft",
                AvatarImageUrl: "assets/images/people/manish.jpg",
                Comments: [
                    "Rubal is an excellent technical guy. I have worked with him and during his tenure, I find Rubal a very reliable and expert in his field.",
                    "He has the rare combination of hard work and dedication towards the assignments given to him. He is one guy whom a team can trust for any new challenge."]
            },
            <ReferenceModel>{
                Name: "Vikas Tak",
                Designation: "Delivery Head",
                Organization: "GirnarSoft",
                AvatarImageUrl: "assets/images/people/vikas.jpg",
                Comments: [
                    "Versatile talent is what I would define Rubal has possessed and shown while we have worked together.",
                    "Rubal Walia has worked in my team for almost 4 years and done excellent contributions on project deliverable. His communication and technical skills are very impressive. He manages efficiently and easily the technical tasks, client communications and expectations simultaneously. He is quick learner for new technical skills and can use those effectively in assigned projects and tasks.",
                    "Rubal is a real asset to any team he is part of."]
            },
            <ReferenceModel>{
                Name: "Aditya Kedia",
                Designation: "Director",
                Organization: "Hyrefox Consultants Pvt Ltd",
                AvatarImageUrl: "assets/images/people/aditya-kedia.jpg",
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
                    "Worked as Senior Software Developer for iRiS Software Systems Ltd (United Kingdom) responsible for creating food ordering kiosk application (Universal Windows Platform) to be deployed on Microsoft Surface tablets.",
                    "Worked as software developer for NFS Technology Group (United Kingdom) responsible for creation of installation program to install NFS Workspace’s add-in inside Outlook 2007, 2010, 2013 and 2016 (both x86 and x64 Outlook installations).",
                    "Working as software developer for Tix Technology Pvt Ltd (Australia) responsible for applied research and development of modules required for online ticketing system."
                ]
            },
            <EmploymentModel>{
                Organization: "Girnar Software (SEZ) Pvt Ltd",
                Designation: "Senior Software Engineer",
                JoinedOn: new Date(2013, 9, 9),
                LeftOn: new Date(2017, 8, 31),
                JobDescription: [
                    "Worked as software developer for Idera Software (United States) to work on their products SQL Virtual Database and SQL Compliance Manager.",
                    "Worked as software developer for a New Zealand based overseas client to study an existing application’s behavior to identify flaws in system and possible improvements. Created UI framework using WinForms supporting themes (based on free  Krypton toolkit), form based access rights, data import \ export from various sources (Excel 2003 – 07, IBM SPSS Statistics and SQL Server), data transfer mechanism, crash reporting and end user license management.",
                    "Worked as Senior Technical Consultant for Versata Professional Services (United States). Key responsibilities included handling various phases of software development lifecycle like requirements gathering, requirements & help document preparation, coding, testing and deployment of the developed customizations.",
                    "Working as architect and developer responsible for planning and authoring (an open source) Windows OS based multi-lingual performance optimization utility.",
                    "•	Worked as Senior Technical Consultant for Aurea Professional Services (United States) responsible for creating various third party connectors to import roster data inside AlertFind system."
                ]
            },
            <EmploymentModel>{
                Organization: "Incognito Technologies Pvt Ltd",
                Designation: "Software Developer / Applied Research",
                JoinedOn: new Date(2010, 4, 10),
                LeftOn: new Date(2013, 9, 7),
                JobDescription: [
                    "Architectured and authored a Silverlight based designer (DSB) for creating project designs (for an in-house ORM) using tables and relationships. Support for multiple diagrams, master-detail tables, automatic relation creation just by column type specification, projects gallery, error notifications, etc. were coded. Also optimized project design loading algorithm by implementing parallel source file parsing and deferred loading. DSB completely replaced use of SQL server management studio’s diagram designer for creating project designs by taking care of ORM database rules.",
                    "Implemented Silverlight enabled multi purpose WCF service for querying Google Geo Location API to determine coordinates based on supplied address, bulk messaging (SMS) function and large SQL query result set transmission between service and Silverlight applications.",
                    "Authored a Silverlight grid control from scratch for displaying and printing formatted data. Also data could be emailed and exported as HTML, PDF or excel document. Operations like drag-drop and theming were also incorporated.",
                    "Studied silo bag bagging process and authored client-server based desktop application using Windows Forms to monitor and carry out various operations in Grain Park for warehousing of wheat."
                ]
            }
        ];
        return data;
    }

    GetCourses(): CourseModel[] {
        let data: CourseModel[] = [
            <CourseModel>{
                Name: "Microsoft Certification",
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

    GetProjects(): FileModel[] {
        let data: FileModel[] = [
            <FileModel>{
                Url: "https://github.com/waliarubal/Jaya",
                ImageUrl: "https://raw.githubusercontent.com/waliarubal/Jaya/master/Screenshots/00.png",
                Title: "Jaya",
                Description: "Cross platform file explorer application compatible with Windows, Mac and Linux operating systems."
            },
            <FileModel>{
                Url: "https://github.com/waliarubal/Janitor",
                ImageUrl: "assets/images/projects/janitor.PNG",
                Title: "WinDoc",
                Description: "A Winows PC optimization and tuning application also capable of cleaning and running in background."
            },
            <FileModel>{
                Url: "https://github.com/waliarubal/SmsBuddy",
                ImageUrl: "assets/images/projects/sms-buddy.png",
                Title: "SMS Buddy",
                Description: "SMS buddy is an innovative smart way to send SMS in bulk using templates."
            },
            <FileModel>{
                Url: "https://github.com/waliarubal/EbayWorker",
                ImageUrl: "assets/images/projects/ebay-worker.PNG",
                Title: "eBay Smart Buy - Books",
                Description: "It is a simple program which will allow one to extract books data from eBay listings."
            }, 
            <FileModel>{
                Url: "https://github.com/waliarubal/ChaturbatePlayer",
                ImageUrl: "assets/images/projects/chaturbate.PNG",
                Title: "Chatubate Cams Viewer",
                Description: "A redefined way to view live cam feeds from chaturbate.com without opening it in web browser."
            },
            <FileModel>{
                Url: "https://github.com/waliarubal/BilliardsClubManager",
                ImageUrl: "assets/images/projects/bcm.PNG",
                Title: "Billiards Club Manager",
                Description: "Billiards club management software with overhead table light automation."
            },
            <FileModel>{
                Url: "https://github.com/waliarubal/JustDialScrapper",
                ImageUrl: "assets/images/projects/jd.PNG",
                Title: "JustDial Scrapper",
                Description: "A simple program to search, extract and export contacts from JustDial.com website."
            },
            <FileModel>{
                Url: "https://github.com/waliarubal/WpfHelpers",
                ImageUrl: "assets/images/projects/binary.jpg",
                Title: "WPF Helpers",
                Description: "WPF helpers is set of classes and resources wrapped up in an assembly to get up to speed with a new WPF MVVM based project targeting .NET Framework 4.0 or 4.5."
            },
            <FileModel>{
                Url: "https://github.com/waliarubal/ActiveDirectoryBroker",
                ImageUrl: "assets/images/projects/binary.jpg",
                Title: "Active Directory Broker",
                Description: "WCF service hosted inside a Windows service to be installed on Windows Server to authenticate against an active directory domain."
            }
        ];
        return data;
    }

    GetGames(): FileModel[] {
        let data: FileModel[] = [
            <FileModel>{
                Url: "https://rust.facepunch.com/",
                ImageUrl: "assets/images/games/rust.jpg",
                Title: "Rust",
                Description: "Rust is a multiplayer-only survival video game for Microsoft Windows, macOS and Linux."
            },
            <FileModel>{
                Url: "https://www.pubg.com/",
                ImageUrl: "assets/images/games/pubg.jpeg",
                Title: "PUBG PC Lite",
                Description: "PlayerUnknown's Battlegrounds is an online multiplayer battle royale game."
            },
            <FileModel>{
                Url: "https://heroesandgenerals.com/",
                ImageUrl: "assets/images/games/hng.jpg",
                Title: "Heroes & Generals",
                Description: "Heroes & Generals is a free-to-play first-person shooter and real-time strategy video game."
            },
            <FileModel>{
                Url: "https://assassinscreed.ubisoft.com/game/en-us/home",
                ImageUrl: "assets/images/games/ac.jpeg",
                Title: "Assasin's Creed Series",
                Description: "Assassin's Creed is an action-adventure stealth video game franchise."
            },
            <FileModel>{
                Url: "http://blog.dota2.com/?l=english",
                ImageUrl: "assets/images/games/dota2.jpg",
                Title: "DOTA 2",
                Description: "Dota 2 is a multiplayer online battle arena video game."
            },
            <FileModel>{
                Url: "https://supercell.com/en/games/clashofclans/",
                ImageUrl: "assets/images/games/coc.jpg",
                Title: "Clash of Clans",
                Description: "Clash of Clans is a freemium mobile strategy video game."
            },
            <FileModel>{
                Url: "https://star-conflict.com/",
                ImageUrl: "assets/images/games/star-conflict.jpeg",
                Title: "Star Conflict",
                Description: "Star Conflict is a free-to-play dynamic MMO space action game."
            },
        ];
        return data;
    }

    GetPictures(): FileModel[] {
        let data: FileModel[] = [];
        for(let index = 0; index <= 8; index++) {
            let picture = new FileModel();
            picture.ImageUrl = `assets/images/photos/${index}.jpg`;
            data.push(picture)
        }
        return data;
    }

}