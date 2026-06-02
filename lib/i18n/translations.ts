import type { Locale } from "@/lib/i18n/types";

const en = {
  nav: {
    home: "Home",
    about: "About",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  footer: {
    emailLabel: "Email address:",
    responseTime: "Inquiries are usually answered in under 3 hours.",
    location: "Serbia, Europe and worldwide",
  },
  contactForm: {
    name: "Full name",
    email: "Email address",
    message: "Message",
    submit: "Send message",
    error: "Message was not sent. Please try again.",
    success: "Message sent successfully.",
  },
  home: {
    heroAlt: "Couple on a yacht — Antesevic wedding",
    heroEyebrow: "Filip Antešević",
    heroTitleLine1: "EDITORIAL WEDDING WORLD",
    heroTitleLine2: "",
    heroSubtitle: "Timeless. Refined. Effortless.",
    tripleLeftAlt: "Couple portrait — left frame",
    tripleCenterAlt: "Main editorial couple shot",
    tripleRightAlt: "Couple portrait — right frame",
    locationLine: "Based in Serbia, available throughout Europe.",
    experienceTitle: "No two celebrations are ever the same.",
    experienceBody:
      "Each wedding is shaped by different people, emotions, and moments that can never be repeated.",
    storiesTitle: "Your Stories Told by Filip Antešević",
    approachBody:
      "My approach blends the spontaneity of real moments with the aesthetics of editorial photography. Inspired by light, emotion, and detail, I create images that feel refined and intentional, while remaining honest and natural.",
    priorityAlts: [
      "Emotional wedding moment",
      "Outdoor couple portrait",
      "Elegant bride and groom portrait",
      "Wedding celebration and dance",
      "Artistic wedding detail",
      "Intimate romantic couple moment",
    ],
    selectedFrame: "Selected frame",
    showcaseAlts: [
      "Golden hour wedding",
      "Romantic sunset couple portrait",
      "Editorial fashion wedding shot",
      "Elegant reception moment",
      "Black and white couple portrait",
      "Bride detail portrait",
      "Classic groom portrait",
      "Emotional couple embrace",
    ],
    qualityAlt: "Quality frame",
    contactTitle: "Welcome to the beginning of your story.",
    contactBgAlt: "Contact section background",
  },
  about: {
    heroAlt: "Filip Antesevic — Antesevic Weddings",
    label: "About me",
    title: "Hi, I'm Filip.",
    intro1: "Weddings are my greatest passion in this work.",
    intro2:
      "I approach every wedding with the same sense of presence, as if it were part of my own story — with care, calmness, and a focus on what is truly unfolding in the moment.",
    approach1:
      "My approach blends documentary storytelling with an editorial aesthetic, aiming to create images that are honest, elegant, and timeless.",
    approach2:
      "I work with couples who value naturalness, emotion, and simplicity, and who believe that the most beautiful moments do not need to be staged to be perfect.",
    location: "Based in Serbia, available for weddings throughout Europe.",
    accentAlt: "Emotional wedding couple moment",
    galleryAlts: [
      "Documentary wedding moment",
      "Black and white couple portrait",
      "Editorial wedding frame",
    ],
    statementTitle1: "Honest,",
    statementTitle2: "elegant,",
    statementTitle3: "and timeless.",
    statementBody:
      "Documentary storytelling with an editorial eye — for couples who trust what unfolds naturally in the moment.",
    contactTitle: "Contact",
    contactSubtitle: "Tell me about your day — I reply as soon as possible.",
    contactBgAlt: "Golden hour ceremony — contact section background",
  },
} as const;

const sr = {
  nav: {
    home: "Pocetna",
    about: "O meni",
    openMenu: "Otvori meni",
    closeMenu: "Zatvori meni",
  },
  footer: {
    emailLabel: "Email adresa:",
    responseTime: "Odgovor na upit najcesce stize za manje od 3 sata.",
    location: "Srbija, Evropa i svet",
  },
  contactForm: {
    name: "Ime i prezime",
    email: "Email adresa",
    message: "Poruka",
    submit: "Posalji poruku",
    error: "Poruka nije poslata. Pokusaj ponovo.",
    success: "Poruka je uspesno poslata.",
  },
  home: {
    heroAlt: "Par na jahti — venchanje Antesevic",
    heroEyebrow: "Filip Antešević",
    heroTitleLine1: "EDITORIAL WEDDING WORLD",
    heroTitleLine2: "",
    heroSubtitle: "Bezvremensko. Rafinisano. Bez napora.",
    tripleLeftAlt: "Portret para — levi kadar",
    tripleCenterAlt: "Glavni editorial kadar para",
    tripleRightAlt: "Portret para — desni kadar",
    locationLine: "Baziran u Srbiji, dostupan sirom Evrope.",
    experienceTitle: "Nijedna proslava nije ista.",
    experienceBody:
      "Svako venchanje oblikuju razliciti ljudi, emocije i trenuci koji se nikada ne mogu ponoviti.",
    storiesTitle: "Vase price ispricane — Filip Antešević",
    approachBody:
      "Moj pristup spaja spontanost pravih trenutaka sa estetikom editorial fotografije. Inspirisan svetlom, emocijom i detaljom, stvaram slike koje deluju rafinisano i namereno, a opet ostaju iskrene i prirodne.",
    priorityAlts: [
      "Emotivan trenutak na venchanju",
      "Portret para na otvorenom",
      "Elegantan portret mlade i mladozenje",
      "Proslava i ples na venchanju",
      "Umetnicki detalj sa venchanja",
      "Intiman romantican trenutak para",
    ],
    selectedFrame: "Izabrani kadar",
    showcaseAlts: [
      "Venchanje u zlatnom svecu",
      "Romanticni portret para u zalasku sunca",
      "Editorial fashion kadar sa venchanja",
      "Elegantan trenutak sa proslave",
      "Crno-beli portret para",
      "Detaljni portret mlade",
      "Klasican portret mladozenje",
      "Emotivno zagrljaj para",
    ],
    qualityAlt: "Kvalitet kadar",
    contactTitle: "Dobrodosli na pocetak vace price.",
    contactBgAlt: "Pozadina kontakt sekcije",
  },
  about: {
    heroAlt: "Filip Antesevic — Antesevic Weddings",
    label: "O meni",
    title: "Zdravo, ja sam Filip.",
    intro1: "Venchanja su moja najveca strast u ovom poslu.",
    intro2:
      "Svakom venchanju pristupam sa istim osecajem prisutnosti, kao da je deo moje price — sa paznjom, smirenošću i fokusom na ono sto se zaista odvija u trenutku.",
    approach1:
      "Moj pristup spaja dokumentarno pricanje prica sa editorial estetikom, sa ciljem da stvorim slike koje su iskrene, elegantne i bezvremenske.",
    approach2:
      "Radim sa parovima koji cene prirodnost, emociju i jednostavnost i koji veruju da najlepsi trenuci ne moraju biti postavljeni da bi bili savrseni.",
    location: "Baziran u Srbiji, dostupan za venchanja sirom Evrope.",
    accentAlt: "Emotivan trenutak para na venchanju",
    galleryAlts: [
      "Dokumentarni trenutak sa venchanja",
      "Crno-beli portret para",
      "Editorial wedding kadar",
    ],
    statementTitle1: "Iskreno,",
    statementTitle2: "elegantno,",
    statementTitle3: "bezvremensko.",
    statementBody:
      "Dokumentarno pricanje prica sa editorial okom — za parove koji veruju onome sto se prirodno odvija u trenutku.",
    contactTitle: "Kontakt",
    contactSubtitle: "Recite mi nesto o vasem danu — odgovaram u najkracem roku.",
    contactBgAlt: "Venchanje u zlatnom svecu — pozadina kontakt sekcije",
  },
} as const;

export type Translations = {
  nav: {
    home: string;
    about: string;
    openMenu: string;
    closeMenu: string;
  };
  footer: {
    emailLabel: string;
    responseTime: string;
    location: string;
  };
  contactForm: {
    name: string;
    email: string;
    message: string;
    submit: string;
    error: string;
    success: string;
  };
  home: {
    heroAlt: string;
    heroEyebrow: string;
    heroTitleLine1: string;
    heroTitleLine2: string;
    heroSubtitle: string;
    tripleLeftAlt: string;
    tripleCenterAlt: string;
    tripleRightAlt: string;
    locationLine: string;
    experienceTitle: string;
    experienceBody: string;
    storiesTitle: string;
    approachBody: string;
    priorityAlts: readonly string[];
    selectedFrame: string;
    showcaseAlts: readonly string[];
    qualityAlt: string;
    contactTitle: string;
    contactBgAlt: string;
  };
  about: {
    heroAlt: string;
    label: string;
    title: string;
    intro1: string;
    intro2: string;
    approach1: string;
    approach2: string;
    location: string;
    accentAlt: string;
    galleryAlts: readonly string[];
    statementTitle1: string;
    statementTitle2: string;
    statementTitle3: string;
    statementBody: string;
    contactTitle: string;
    contactSubtitle: string;
    contactBgAlt: string;
  };
};

export const translations: Record<Locale, Translations> = { en, sr };
