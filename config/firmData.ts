export const FIRM = {
  defaultName: "Novák & Partners",
  defaultPhone: "+421 2 5000 0000",
  defaultAddress: "Župné námestie 3, 811 03 Bratislava",
  defaultEmail: "info@novakpartners.sk",
  tagline: {
    sk: "Právo. Precíznosť. Výsledky.",
    en: "Law. Precision. Results.",
  },
  heroImage: "/hero-law.jpg",
  mapEmbedUrl: "https://maps.google.com/maps?q=Bratislava&output=embed",

  stats: [
    { value: "20+", label: { sk: "Rokov praxe", en: "Years of practice" } },
    { value: "500+", label: { sk: "Prípadov vyriešených", en: "Cases resolved" } },
    { value: "98%", label: { sk: "Úspešnosť", en: "Success rate" } },
    { value: "3", label: { sk: "Pobočky", en: "Office locations" } },
  ],

  practiceAreas: [
    {
      id: "corporate",
      icon: "Briefcase",
      title: { sk: "Obchodné právo", en: "Corporate Law" },
      desc: {
        sk: "Zakladanie spoločností, fúzie, akvizície, korporátne poradenstvo pre firmy všetkých veľkostí.",
        en: "Company formation, mergers, acquisitions, corporate advisory for businesses of all sizes.",
      },
    },
    {
      id: "civil",
      icon: "Scale",
      title: { sk: "Občianske právo", en: "Civil Law" },
      desc: {
        sk: "Zastupovanie v občianskoprávnych sporoch, záväzkové vzťahy, náhrada škody.",
        en: "Representation in civil disputes, contractual relations, damages and compensation.",
      },
    },
    {
      id: "criminal",
      icon: "Shield",
      title: { sk: "Trestné právo", en: "Criminal Defense" },
      desc: {
        sk: "Obhajoba v trestnom konaní, zastupovanie poškodených, konzultácie pri vyšetrovaní.",
        en: "Defense in criminal proceedings, victim representation, investigation consultations.",
      },
    },
    {
      id: "family",
      icon: "Heart",
      title: { sk: "Rodinné právo", en: "Family Law" },
      desc: {
        sk: "Rozvody, starostlivosť o deti, výživné, majetkové vyrovnania, adopcie.",
        en: "Divorce, child custody, alimony, property settlements, adoptions.",
      },
    },
    {
      id: "realestate",
      icon: "Building2",
      title: { sk: "Nehnuteľnosti", en: "Real Estate Law" },
      desc: {
        sk: "Kúpa a predaj nehnuteľností, nájomné zmluvy, stavebné právo, kataster.",
        en: "Property purchases and sales, lease agreements, construction law, land registry.",
      },
    },
    {
      id: "employment",
      icon: "Users",
      title: { sk: "Pracovné právo", en: "Employment Law" },
      desc: {
        sk: "Pracovné zmluvy, prepúšťanie, diskriminácia, kolektívne vyjednávanie.",
        en: "Employment contracts, dismissals, discrimination, collective bargaining.",
      },
    },
  ],

  team: [
    {
      id: "partner1",
      name: "JUDr. Martin Novák",
      role: { sk: "Zakladajúci partner", en: "Founding Partner" },
      specialization: { sk: "Obchodné právo", en: "Corporate Law" },
      experience: { sk: "22 rokov praxe", en: "22 years of practice" },
      bio: {
        sk: "Absolvent Právnickej fakulty UK v Bratislave. Špecializuje sa na obchodné právo a medzinárodné transakcie.",
        en: "Graduate of the Faculty of Law at Comenius University in Bratislava. Specializes in corporate law and international transactions.",
      },
      image: "/team/partner1.jpg",
    },
    {
      id: "partner2",
      name: "JUDr. Eva Kováčová",
      role: { sk: "Senior partner", en: "Senior Partner" },
      specialization: { sk: "Rodinné právo", en: "Family Law" },
      experience: { sk: "18 rokov praxe", en: "18 years of practice" },
      bio: {
        sk: "Expertka na rodinné a občianske právo s rozsiahle skúsenosti zo slovenských aj európskych súdov.",
        en: "Expert in family and civil law with extensive experience in Slovak and European courts.",
      },
      image: "/team/partner2.jpg",
    },
    {
      id: "associate1",
      name: "Mgr. Tomáš Horváth",
      role: { sk: "Advokátsky koncipient", en: "Associate Attorney" },
      specialization: { sk: "Trestné právo", en: "Criminal Law" },
      experience: { sk: "5 rokov praxe", en: "5 years of practice" },
      bio: {
        sk: "Absolvent Právnickej fakulty UPJŠ v Košiciach. Špecializuje sa na obhajobu v trestnom konaní.",
        en: "Graduate of the Faculty of Law at UPJŠ in Košice. Specializes in criminal defense proceedings.",
      },
      image: "/team/associate1.jpg",
    },
  ],

  caseStudies: [
    {
      id: "cs1",
      category: { sk: "Obchodné právo", en: "Corporate Law" },
      title: {
        sk: "Úspešná ochrana pred nepriateľskou akvizíciou",
        en: "Successful Defense Against Hostile Acquisition",
      },
      summary: {
        sk: "Zastupovanie stredne veľkej výrobnej spoločnosti v komplexnom spore o kontrolu nad firmou.",
        en: "Representing a mid-sized manufacturing company in a complex dispute over corporate control.",
      },
      outcome: { sk: "Plné víťazstvo klienta, zachovanie manažmentu.", en: "Full client victory, management preserved." },
      duration: { sk: "14 mesiacov", en: "14 months" },
      value: "€2.4M",
    },
    {
      id: "cs2",
      category: { sk: "Nehnuteľnosti", en: "Real Estate Law" },
      title: {
        sk: "Riešenie komplexného developerského sporu",
        en: "Resolution of Complex Developer Dispute",
      },
      summary: {
        sk: "Zastupovanie developera v spore o stavebné povolenia a vlastnícke práva k pozemkom.",
        en: "Representing a developer in a dispute over building permits and land ownership rights.",
      },
      outcome: { sk: "Mimosúdna dohoda, projekt pokračoval.", en: "Out-of-court settlement, project proceeded." },
      duration: { sk: "8 mesiacov", en: "8 months" },
      value: "€890K",
    },
    {
      id: "cs3",
      category: { sk: "Pracovné právo", en: "Employment Law" },
      title: {
        sk: "Kolektívne vyjednávanie pre výrobný podnik",
        en: "Collective Bargaining for Manufacturing Plant",
      },
      summary: {
        sk: "Poradenstvo a zastupovanie zamestnávateľa pri kolektívnom vyjednávaní s odbormi.",
        en: "Advisory and representation of employer during collective bargaining with trade unions.",
      },
      outcome: {
        sk: "Dohoda uzatvorená, obojstranne výhodná zmluva.",
        en: "Agreement reached, mutually beneficial contract.",
      },
      duration: { sk: "3 mesiace", en: "3 months" },
      value: "€120K",
    },
  ],

  process: [
    {
      step: "01",
      title: { sk: "Bezplatná konzultácia", en: "Free Consultation" },
      desc: {
        sk: "Prvý hovor je vždy bezplatný. Spoznáme vašu situáciu, posúdime možnosti a navrhneme ďalší postup bez záväzkov.",
        en: "The first call is always free. We assess your situation, evaluate options and propose next steps without any commitment.",
      },
    },
    {
      step: "02",
      title: { sk: "Analýza prípadu", en: "Case Analysis" },
      desc: {
        sk: "Detailná právna analýza vašej situácie, identifikácia rizík a príležitostí, vypracovanie právneho stanoviska.",
        en: "Detailed legal analysis of your situation, identification of risks and opportunities, preparation of legal opinion.",
      },
    },
    {
      step: "03",
      title: { sk: "Stratégia a zastupovanie", en: "Strategy & Representation" },
      desc: {
        sk: "Vypracujeme optimálnu právnu stratégiu a profesionálne vás zastupujeme pred súdmi aj v mimosúdnych konaniach.",
        en: "We develop the optimal legal strategy and professionally represent you before courts and in out-of-court proceedings.",
      },
    },
    {
      step: "04",
      title: { sk: "Riešenie a výsledok", en: "Resolution & Outcome" },
      desc: {
        sk: "Sledujeme prípad až do úplného vyriešenia. Informujeme vás v každom kroku a chránime vaše záujmy do konca.",
        en: "We follow the case through to complete resolution. We keep you informed at every step and protect your interests to the end.",
      },
    },
  ],

  testimonials: [
    {
      id: "t1",
      quote: {
        sk: "Profesionálny prístup, rýchla komunikácia a výborný výsledok. Novák & Partners nás zastupovali v náročnom obchodnom spore a dosiahli pre nás plné víťazstvo.",
        en: "Professional approach, fast communication and excellent result. Novák & Partners represented us in a challenging business dispute and achieved a full victory for us.",
      },
      author: "Ing. Rastislav Benák",
      company: { sk: "CEO, TechBuild s.r.o.", en: "CEO, TechBuild s.r.o." },
    },
    {
      id: "t2",
      quote: {
        sk: "V ťažkej životnej situácii som potrebovala spoľahlivého právnika. JUDr. Kováčová mi pomohla zvládnuť celý rozvod s minimálnym stresom a maximálnou ochranou mojich práv.",
        en: "In a difficult life situation I needed a reliable lawyer. JUDr. Kováčová helped me through the entire divorce process with minimal stress and maximum protection of my rights.",
      },
      author: "Monika Šimková",
      company: { sk: "Súkromná klientka", en: "Private client" },
    },
    {
      id: "t3",
      quote: {
        sk: "Spolupráca s touto kanceláriou je čistý profesionalizmus. Odporúčam každej firme, ktorá potrebuje spoľahlivé právne poradenstvo na Slovensku.",
        en: "Working with this firm is pure professionalism. I recommend them to any company that needs reliable legal counsel in Slovakia.",
      },
      author: "Mgr. Peter Varga",
      company: { sk: "Konateľ, Varga Group a.s.", en: "Director, Varga Group a.s." },
    },
  ],

  faq: [
    {
      q: { sk: "Koľko stojí prvá konzultácia?", en: "How much does the first consultation cost?" },
      a: {
        sk: "Prvá konzultácia je vždy bezplatná a nezáväzná. Radi sa soznámime s vašou situáciou a navrhneme možné riešenia.",
        en: "The first consultation is always free and non-binding. We are happy to learn about your situation and propose possible solutions.",
      },
    },
    {
      q: { sk: "Ako dlho trvá riešenie právneho prípadu?", en: "How long does resolving a legal case take?" },
      a: {
        sk: "Závisí od zložitosti a typu prípadu. Jednoduché zmluvy riešime do niekoľkých dní, súdne spory môžu trvať mesiace až roky. Na prvej konzultácii vám dáme realistický odhad.",
        en: "It depends on the complexity and type of case. Simple contracts are resolved within days, court disputes can take months to years. At the first consultation we give you a realistic estimate.",
      },
    },
    {
      q: { sk: "Zastupujete klientov aj mimo Bratislavy?", en: "Do you represent clients outside Bratislava?" },
      a: {
        sk: "Áno. Zastupujeme klientov pred súdmi na celom Slovensku aj v zahraničí. Konzultácie ponúkame osobne, telefonicky aj online.",
        en: "Yes. We represent clients before courts throughout Slovakia and abroad. Consultations are available in person, by phone or online.",
      },
    },
    {
      q: { sk: "V akých jazykoch komunikujete?", en: "What languages do you communicate in?" },
      a: {
        sk: "Primárne komunikujeme v slovenčine a angličtine. Na vyžiadanie zabezpečíme tlmočenie aj do iných jazykov.",
        en: "We primarily communicate in Slovak and English. Interpretation into other languages can be arranged on request.",
      },
    },
    {
      q: { sk: "Je možná online konzultácia?", en: "Is an online consultation possible?" },
      a: {
        sk: "Áno, plne podporujeme online konzultácie cez videohovor. Kontaktujte nás a dohodneme si termín, ktorý vám vyhovuje.",
        en: "Yes, we fully support online consultations via video call. Contact us and we will arrange a time that suits you.",
      },
    },
  ],

  hours: [
    { day: { sk: "Pondelok – Štvrtok", en: "Monday – Thursday" }, time: "08:00 – 18:00" },
    { day: { sk: "Piatok", en: "Friday" }, time: "08:00 – 16:00" },
    { day: { sk: "Sobota – Nedeľa", en: "Saturday – Sunday" }, time: { sk: "Zatvorené", en: "Closed" } },
  ],

  socials: {
    linkedin: "https://linkedin.com/company/novakpartners",
    facebook: "https://facebook.com/novakpartners",
  },
} as const;

export type Lang = "sk" | "en";
