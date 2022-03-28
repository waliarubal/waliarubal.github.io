export const FULL_NAME = 'Rubal Walia';
export const EMAIL = 'walia.rubal@gmail.com';
export const PHONE = '+91-99288-93416';
export const ADDRESS = '79, Kanji Nagar, Near Balti Factory, Agra Road, Jaipur, Rajasthan, India (Postcode 302031)';
export const DATE_OF_BIRTH = new Date(1988, 7, 1, 17, 42, 0, 0);

export interface ISocialMediaProfile {
    IconClass: string;
    Name: string;
    Url: string;
}

export interface ISocialMediaProfiles {
    Profiles: ISocialMediaProfile[];
}

export interface IWorkExperience {
    Company: string;
    Role: string;
    From: Date;
    To: Date;
    Responsibilities: string;
}

export interface IWorkExperiences {
    Experiences: IWorkExperience[];
}

export const WORK_EXPERIENCES = {
    Experiences: [
        {
            Company: 'BrickRed Infinite Solutions Pvt Ltd',
            Role: 'Delivery Manager',
            From: new Date(2021, 6, 14),
            To: null,
            Responsibilities: `•	Working as software Delivery Manager responsible for managing deliveries for large scale enterprise applications, regularly communicating with clients, and acting as a bridge between development teams.
            Involved in active staffing for company and interviewing technical resources for various software development roles.
            As a part of daily activity, I am overseeing the development of ongoing project to make sure the code quality meets industry standards and deliverables land the client environments on time.
            Involved in active technical research and Proof-of-Concept application creation for clients to bag-in new projects and successful completion of ongoing projects.
            Involved in technical decisive meetings with Technical Architects and Project Managers for various projects.
            Handling a couple of inhouse company products and managing complete their development and release lifecycle.
            Technical mentoring developers and co-workers around web, mobile and cross platform desktop development as per latest industrial trends.`
        },
        {
            Company: 'Dotsquares Technologies India Pvt Ltd',
            Role: 'Senior Software Developer',
            From: new Date(2017, 9, 1),
            To: new Date(2021, 6, 11),
            Responsibilities: `Worked as Senior Software Developer for iRiS Software Systems Ltd (United Kingdom) responsible for creating food ordering kiosk application (Universal Windows Platform) to be deployed on Microsoft Surface tablets.
            Also worked as software developer for NFS Technology Group (United Kingdom) responsible for creation of installation program to install NFS Workspace’s add-in inside Outlook 2007, 2010, 2013 and 2016 (both x86 and x64 Outlook installations).
            Apart from this, worked as software developer for Tix Technology Pvt Ltd (Australia) responsible for applied research and development of modules required for online ticketing system.`
        },
        {
            Company: 'Girnar Software (SEZ) Pvt Ltd',
            Role: 'Senior Software Engineer',
            From: new Date(2013, 9, 9),
            To: new Date(2017, 8, 31),
            Responsibilities: `Worked as software developer for Idera Software (United States) to work on their products SQL Virtual Database and SQL Compliance Manager.
            Additionally worked as software developer for a New Zealand based overseas client to study an existing application’s behavior to identify flaws in system and possible improvements. Created UI framework using WinForms supporting themes (based on free  Krypton toolkit), form based access rights, data import \ export from various sources (Excel 2003 – 07, IBM SPSS Statistics and SQL Server), data transfer mechanism, crash reporting and end user license management.
            Also worked as Senior Technical Consultant for Versata Professional Services (United States). Key responsibilities included handling various phases of software development lifecycle like requirements gathering, requirements & help document preparation, coding, testing and deployment of the developed customizations.
            Not to mention, worked as architect and developer responsible for planning and authoring (an open source) Windows OS based multi-lingual performance optimization utility.
            Involved as a Senior Technical Consultant for Aurea Professional Services (United States) responsible for creating various third party connectors to import roster data inside AlertFind system.`
        },
        {
            Company: 'Incognito Technologies Pvt Ltd',
            Role: 'Software Developer (Applied Research)',
            From: new Date(2011, 10, 15),
            To: new Date(2013, 8, 7),
            Responsibilities: `Architectured and authored a Silverlight based designer (DSB) for creating project designs (for an in-house ORM) using tables and relationships. Support for multiple diagrams, master-detail tables, automatic relation creation just by column type specification, projects gallery, error notifications, etc. were coded. Also optimized project design loading algorithm by implementing parallel source file parsing and deferred loading. DSB completely replaced use of SQL server management studio’s diagram designer for creating project designs by taking care of ORM database rules.
            Implemented Silverlight enabled multi purpose WCF service for querying Google Geo Location API to determine coordinates based on supplied address, bulk messaging (SMS) function and large SQL query result set transmission between service and Silverlight applications.
            Authored a Silverlight grid control from scratch for displaying and printing formatted data. Also data could be emailed and exported as HTML, PDF or excel document. Operations like drag-drop and theming were also incorporated.
            Studied silo bag bagging process and authored client-server based desktop application using Windows Forms to monitor and carry out various operations in Grain Park for warehousing of wheat.`
        },
        {
            Company: 'Computech Solutions',
            Role: 'Desktop Application Developer',
            From: new Date(2010, 4, 1),
            To: new Date(2011, 6, 30),
            Responsibilities: `Created an inventory management and bulk listing utility for selling products on multiple eCommerce plaforms like eBay, Amazon, PriceMinister and Fnac.
            Studied eBay Trading API and Amazon Merchant Seller API; helped co-developer in building Java based console app for inventory synchronization. Also developed mechanism to interface WinForms based desktop app with java console.
            Created InstallShield based installation program for the application`
        }
    ]
} as IWorkExperiences;

export const SOCIAL_MEDIA_PROFILES = {
    Profiles: [
        {
            IconClass: "fab fa-twitter",
            Name: "Twitter",
            Url: "https://twitter.com/imnew2game",
        },
        {
            IconClass: "fab fa-facebook",
            Name: "Facebook",
            Url: "https://www.facebook.com/imnew2game"
        },
        {
            IconClass: "fab fa-instagram",
            Name: "Instagram",
            Url: null
        },
        {
            IconClass: "fab fa-github",
            Name: "GitHub",
            Url: "https://github.com/waliarubal/"
        },
        {
            IconClass: "fab fa-linkedin",
            Name: "LinkedIn",
            Url: "https://www.linkedin.com/in/waliarubal/"
        },
    ]
} as ISocialMediaProfiles;