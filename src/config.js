// All editable wedding content and settings live here.

export const WEDDING = {
  brideShort: 'Anusree',
  groomShort: 'Sanju',
  brideFull: 'Anusree PK',
  groomFull: 'Sanju Sajeev',
  dateLabel: '31 · JANUARY · 2027',
  dateTime: '2027-01-31T10:30:00+05:30',
  landingVenue: "BRIDE'S RESIDENCE, THALASSERY",
  footerLine: '31 JANUARY 2027 · THALASSERY',
  compliments: 'Sreeraj P K, Rajesh M, kith and kin',
};

export const EVENTS = [
  {
    num: '01',
    title: 'WEDDING',
    date: '31.01.2027 · Sunday',
    dateSub: '1202 Makaram 17',
    time: 'Muhurtham 10:30 AM — 11:20 AM',
    venue: "Bride's Residence",
    address: 'Karnikaram, Palayad, Thalassery',
    mapsUrl: 'https://maps.app.goo.gl/PeWGgttWLaz2KzXm8',
  },
];

// Contact numbers shown on the invitation (Indian mobile).
export const CONTACTS = [
  { label: '94957 28020', tel: '+919495728020' },
];

// Shown below the event card, as on the printed invitation.
export const MARRIAGE_NOTE = 'Presence in blessings only';

export const FAMILIES = [
  {
    side: "BRIDE'S FAMILY",
    name: 'Anusree PK',
    father: 'P K Ramachandran',
    mother: 'Sarina M',
    sibling: { label: 'BROTHER', name: 'Sreeraj PK' },
    residence: 'Karnikaram, Palayad, Thalassery',
  },
  {
    side: "GROOM'S FAMILY",
    name: 'Sanju Sajeev',
    father: 'Late C Sajeev',
    mother: 'Lalitha Sajeev',
    sibling: { label: 'SISTER', name: 'Aneeja Sajeev' },
    residence: 'Shaileswaram Nivas, Mapranam, Irinjalakuda',
  },
];

// Also used as the social-share image in index.html.
export const COUPLE_PHOTO = 'photos/couple.jpg';

export const VERSE = {
  sanskrit: 'समानी व आकूतिः समाना हृदयानि वः । समानमस्तु वो मनो यथा वः सुसहासति ॥',
  english:
    '"United be your purpose, harmonious your hearts, united your minds — so that you may live together in accord."',
  reference: '— RIG VEDA 10.191.4',
};

// Realtime Database path for this couple
export const WISH_PATH = 'ansuree-sanju/wishes';

// Values come from .env (gitignored). Copy .env.example → .env for local use.
export const FIREBASE_CONFIG = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};
