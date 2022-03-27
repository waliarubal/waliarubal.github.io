export const FULL_NAME = 'Rubal Walia';
export const EMAIL = 'walia.rubal@gmail.com';
export const PHONE = '+91-99288-93416';
export const ADDRESS = '79, Kanji Nagar, Near Balti Factory, Agra Road, Jaipur, Rajasthan, India (Postcode 302031)';
export const DATE_OF_BIRTH = new Date(1988, 7, 1);

interface ISocialMediaProfile {
    IconClass: string;
    Name: string;
    Url: string;
}

export const SOCIAL_MEDIA_PROFILES: ISocialMediaProfile[] = [
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
        Url: "https://www.linkedin.com/in/waliarubal/"
    },
    {
        IconClass: "fab fa-github",
        Name: "GitHub",
        Url: "https://www.linkedin.com/in/waliarubal/"
    },
    {
        IconClass: "fab fa-linkedin",
        Name: "LinkedIn",
        Url: "https://www.linkedin.com/in/waliarubal/"
    },
];