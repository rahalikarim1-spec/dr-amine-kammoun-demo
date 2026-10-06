# Data still required from Dr Kammoun

Until provided, the site never displays invented values: blocks are hidden or use neutral wording. Where to enter each item is shown in the right column.

| # | Item | Why it matters | Where to enter |
|---|---|---|---|
| 1 | **Exact official address** (street, postal code, GPS if known) | NAP consistency with Google Business Profile, schema `PostalAddress`, footer | `src/config/site.ts` → `location.streetAddress / postalCode / latitude / longitude` |
| 2 | **Opening hours** | Contact card, schema `openingHoursSpecification` | `siteConfig.openingHours` (format documented in the file) |
| 3 | **Appointment process** (phone only? WhatsApp? online booking? who answers?) | The appointment page currently says: by phone | `src/content/{fr,ar}/core.ts` → `appointment` |
| 4 | **Confirmed medical services** (which ultrasounds incl. 3D/4D, PMA follow-up, obstetric follow-up, procedures) | Allows service pages to say "available at the cabinet" — today all pages are educational only | Content files + new registry entries |
| 5 | **Professional biography** | Doctor page, E-E-A-T | `professional.bio` |
| 6 | **Qualifications / degrees / training** | Doctor page (only if verified and permitted by ordinal rules) | `professional.qualifications` |
| 7 | **Languages spoken** | Doctor page, schema | `professional.languagesSpoken` |
| 8 | **Professional photo** | Doctor page, schema `image` | `/public/images/…` + `professional.doctorPhoto` |
| 9 | **Cabinet photos** | Cabinet page | `professional.cabinetPhotos` (with FR/AR alt text) |
| 10 | **Google Maps URL** + embed URL | Directions / map / `hasMap` | `NEXT_PUBLIC_GOOGLE_MAPS_URL`, `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL` |
| 11 | **Google Business Profile URL** | schema `sameAs`, trust | `NEXT_PUBLIC_GBP_URL` |
| 12 | **Email** | Contact card | `NEXT_PUBLIC_CONTACT_EMAIL` |
| 13 | **Additional phone numbers / WhatsApp number** | Contact, `whatsapp_click` | `additionalPhones`, `NEXT_PUBLIC_WHATSAPP_NUMBER` |
| 14 | **Social profiles** (if any) | schema `sameAs` | `siteConfig.social` |
| 15 | **Medical registration / ordinal information** (where appropriate) | Legal notice, trust | `professional.registrationNumber` + `legal-notice` content |
| 16 | **Arabic spelling of the name** ("د. أمين قمون" is a transliteration) | Arabic brand consistency | `siteConfig.nameLocalized.ar` |
| 17 | **Medical validation of all content** | YMYL. Pages say "validation médicale à venir" until validated | `src/config/editorial.ts` → `reviewed: true`, `reviewedOn` |
| 18 | **Legal texts review** (legal notice, privacy, cookies) incl. hosting provider, data retention | Compliance; current texts are generic drafts | `src/content/{fr,ar}/legal.ts` |
| 19 | **Contact-form destination** (email/webhook) | Form is in demo mode until set | `CONTACT_WEBHOOK_URL` |
| 20 | **Production domain** + approval to go live | Canonicals, sitemap, indexing | `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_INDEXING=on` |
| 21 | **Ethical check** with the relevant professional body of the wording used on the site | Tunisian medical communication rules | — |
