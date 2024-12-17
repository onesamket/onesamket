export type LocalizedProjectType = {
  title: {
    en: string;
    am: string;
    geez: string;
    or: string;
  };
  description: {
    en: string;
    am: string;
    geez: string;
    or: string;
  };
  previewUrl: string;
  githubUrl: string;
};

export const localizedProjectsList: LocalizedProjectType[] = [
  {
    title: {
      en: "MOE Exit Exam Platform",
      am: "የትምህርት ሚኒስቴር የመውጫ ፈተና መድረክ",
      geez: "ናይ ትምህርቲ ሚኒስትሪ መውጽኢ ፈተና መድረኽ",
      or: "Sirna Qormaata Xumuraa Ministeera Barnootaa",
    },
    description: {
      en: "An inclusive exam platform designed for visually impaired students.",
      am: "ለእይታ ችግር ላለባቸው ተማሪዎች የተዘጋጀ አካታች የፈተና መድረክ።",
      geez: "ንዓይኖም ዝተጎድኡ ተምሃሮ ዝተዳለወ ኣካታዊ ናይ ፈተና መድረኽ።",
      or: "Sirni qormaataa hamma danda'ame barattootaaf kan mijaawaa ta'e.",
    },
    previewUrl: "https://et-exit.netlify.app",
    githubUrl: "https://github.com/onesamket/et-exit",
  },
  {
    title: {
      en: "Food Delivery Website",
      am: "የምግብ አቅርቦት ድህረ ገጽ",
      geez: "ናይ መግቢ ኣቕርቦት መርበብ ሓበሬታ",
      or: "Marsariitii Dhiyeessa Nyaataa",
    },
    description: {
      en: "Fast, user-friendly online food delivery platform.",
      am: "ፈጣን እና ለተጠቃሚ ምቹ የሆነ የመስመር ላይ የምግብ አቅርቦት መድረክ።",
      geez: "ቅልጡፍን ንተጠቃሚ ምቹእን ዝኾነ ናይ መስመር ምግቢ ኣቕርቦት መድረኽ።",
      or: "Platformii dhiyeessa nyaataa saffisaa fi fayyadamtootaaf mijataa ta'e.",
    },
    previewUrl: "https://tw-delivery.netlify.app",
    githubUrl: "https://github.com/onesamket/delivery",
  },
  {
    title: {
      en: "Preconfigured TypeScript Starter",
      am: "አስቀድሞ የተዘጋጀ የታይፕስክሪፕት መነሻ ፕሮጀክት",
      geez: "ቅድሚ ዝተዳለወ ናይ ታይፕስክሪፕት መጀመሪ ፕሮጀክት",
      or: "Jalqabbii TypeScript Duraan Qophaa'e",
    },
    description: {
      en: "A TypeScript starter project with preconfigured stacks.",
      am: "አስቀድሞ የተዘጋጁ ቴክኖሎጂዎችን የያዘ የታይፕስክሪፕት መነሻ ፕሮጀክት።",
      geez: "ቅድሚ ዝተዳለወ ቴክኖሎጂታት ዘለዎ ናይ ታይፕስክሪፕት መጀመሪ ፕሮጀክት።",
      or: "Pirojeektii jalqabbii TypeScript teeknolojiiwwan duraan qophaa'aniin kan qophaa'e.",
    },
    previewUrl: "https://tw-stack.vercel.app",
    githubUrl: "https://github.com/onesamket/tw-stack",
  },
  {
    title: {
      en: "Ethiopian Fashion E-commerce",
      am: "የኢትዮጵያ ፋሽን ኢ-ኮመርስ",
      geez: "ናይ ኢትዮጵያ ፋሽን ኢ-ኮመርስ",
      or: "Daldalaa Interneetaa Uffata Itoophiyaa",
    },
    description: {
      en: "E-commerce platform featuring Ethiopian fashion.",
      am: "የኢትዮጵያ ፋሽንን የሚያቀርብ የኢ-ኮመርስ መድረክ።",
      geez: "ናይ ኢትዮጵያ ፋሽን ዘቕርብ ናይ ኢ-ኮመርስ መድረኽ።",
      or: "Platformii daldalaa interneetaa uffata aadaa Itoophiyaa kan agarsiisu.",
    },
    previewUrl: "https://et-fashion.netlify.app",
    githubUrl: "https://github.com/onesamket/fashion",
  },
  {
    title: {
      en: "Research Management System",
      am: "የምርምር አስተዳደር ሥርዓት",
      geez: "ናይ ምርምር ኣመሓዳድራ ስርዓት",
      or: "Sirna Bulchiinsa Qorannoo",
    },
    description: {
      en: "An efficient platform for managing research projects.",
      am: "የምርምር ፕሮጀክቶችን ለማስተዳደር የተዘጋጀ ቀልጣፋ መድረክ።",
      geez: "ናይ ምርምር ፕሮጀክትታት ንምምሕዳር ዝተዳለወ ቅልጡፍ መድረኽ።",
      or: "Platformii qorannoo karaa hojii gaarii fi saffisaan bulchuu danda'u.",
    },
    previewUrl: "https://tw-researcher.netlify.app",
    githubUrl: "https://github.com/onesamket/researcher",
  },
  {
    title: {
      en: "dBooks Clone",
      am: "የዲቡክስ ኮፒ",
      geez: "ናይ ዲቡክስ ቅዳሕ",
      or: "Fakkaattuu dBooks",
    },
    description: {
      en: "Platform for downloading and reading free books.",
      am: "ነጻ መጽሐፍትን ለማውረድና ለማንበብ የሚያገለግል መድረክ።",
      geez: "ነጻ መጻሕፍቲ ንምውራድን ንምንባብን ዘገልግል መድረኽ።",
      or: "Platformii kitaabota bilisaan buufachuu fi dubbisuu danda'an.",
    },
    previewUrl: "https://d-books-clone.vercel.app",
    githubUrl: "https://github.com/onesamket/dBooks-clone",
  },
  {
    title: {
      en: "Google Play Store UI Clone",
      am: "የጉግል ፕሌይ ስቶር ዩአይ ኮፒ",
      geez: "ናይ ጉግል ፕሌይ ስቶር ዩአይ ቅዳሕ",
      or: "Fakkaattuu UI Google Play Store",
    },
    description: {
      en: "A clone of the Google Play Store interface.",
      am: "የጉግል ፕሌይ ስቶር ኢንተርፌስ ኮፒ።",
      geez: "ናይ ጉግል ፕሌይ ስቶር ኢንተርፌስ ቅዳሕ።",
      or: "Fakkaattuu bocaa Google Play Store.",
    },
    previewUrl: "#",
    githubUrl: "https://github.com/onesamket/playstore",
  },
  {
    title: {
      en: "E-commerce Website",
      am: "የኢ-ኮመርስ ድህረ ገጽ",
      geez: "ናይ ኢ-ኮመርስ መርበብ ሓበሬታ",
      or: "Marsariitii Daldalaa Interneetaa",
    },
    description: {
      en: "Modern e-commerce website for various products.",
      am: "ለተለያዩ ምርቶች የተዘጋጀ ዘመናዊ የኢ-ኮመርስ ድህረ ገጽ።",
      geez: "ንዝተፈላለዩ ፍርያት ዝተዳለወ ዘመናዊ ናይ ኢ-ኮመርስ መርበብ ሓበሬታ።",
      or: "Marsariitii daldalaa interneetaa ammayyaa oomishaalee adda addaatiif kan qophaa'e.",
    },
    previewUrl: "https://eat5foods.vercel.app",
    githubUrl: "https://github.com/onesamket",
  },
  {
    title: {
      en: "Game Hub Dashboard",
      am: "የጨዋታ ማዕከል ዳሽቦርድ",
      geez: "ናይ ጸወታ ማእከል ዳሽቦርድ",
      or: "Daashboordii Taphoota",
    },
    description: {
      en: "Interactive UI for exploring various games.",
      am: "ለተለያዩ ጨዋታዎች መፈለጊያ የሚያገለግል ተግባራዊ ዩአይ።",
      geez: "ንዝተፈላለዩ ጸወታታት መፍለዪ ዘገልግል ተግባራዊ ዩአይ።",
      or: "UI walqunnamtii taphoota adda addaa sakatta'uuf kan tajaajilu.",
    },
    previewUrl: "https://challenge-lovat.vercel.app/",
    githubUrl: "https://github.com/onesamket/challenge",
  },
  {
    title: {
      en: "Food Delivery Mobile App",
      am: "የምግብ አቅርቦት ሞባይል መተግበሪያ",
      geez: "ናይ መግቢ ኣቕርቦት ሞባይል መተግበሪያ",
      or: "Appii Mobaayilaa Dhiyeessa Nyaataa",
    },
    description: {
      en: "A mobile application designed for food delivery services.",
      am: "ለምግብ አቅርቦት አገልግሎቶች የተዘጋጀ የሞባይል መተግበሪያ።",
      geez: "ንናይ መግቢ ኣቕርቦት ኣገልግሎታት ዝተዳለወ ናይ ሞባይል መተግበሪያ።",
      or: "Appii mobaayilaa tajaajila dhiyeessa nyaataatiif kan qophaa'e.",
    },
    previewUrl: "#",
    githubUrl: "https://github.com/onesamket/food-delivery-app",
  },
  {
    title: {
      en: "Building Future...",
      am: "የወደፊቱን እየገነባን...",
      geez: "ናይ መጻኢ እናሃነጽና...",
      or: "Gara Fuulduraatti Ijaarraa...",
    },
    description: {
      en: "Currently developing elegant web and mobile applications.",
      am: "በአሁኑ ጊዜ ውብ የድር እና የሞባይል መተግበሪያዎችን እያዘጋጀን ነው።",
      geez: "ኣብዚ እዋን እዚ ጽቡቕ ናይ ድሕረ ገጽን ሞባይልን መተግበሪያታት እናዳለና ኢና።",
      or: "Yeroo ammaa kana applikeeshinoota weebii fi mobaayilaa miidhagoo hojjechaa jirra.",
    },
    previewUrl: "https://github.com/onesamket",
    githubUrl: "https://github.com/onesamket",
  },
];
