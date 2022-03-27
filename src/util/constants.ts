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