export type LocalizedProjectType = {
  title: {
    en: string;
    am: string;
    geez: string;
  };
  description: {
    en: string;
    am: string;
    geez: string;
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
    },
    description: {
      en: "An inclusive exam platform designed for visually impaired students.",
      am: "ለእይታ ችግር ላለባቸው ተማሪዎች የተዘጋጀ አካታች የፈተና መድረክ።",
      geez: "ንዓይኖም ዝተጎድኡ ተምሃሮ ዝተዳለወ ኣካታዊ ናይ ፈተና መድረኽ።",
    },
    previewUrl: "https://et-exit.netlify.app",
    githubUrl: "https://github.com/onesamket/et-exit",
  },
  {
    title: {
      en: "Food Delivery Website",
      am: "የምግብ አቅርቦት ድህረ ገጽ",
      geez: "ናይ መግቢ ኣቕርቦት መርበብ ሓበሬታ",
    },
    description: {
      en: "Fast, user-friendly online food delivery platform.",
      am: "ፈጣን እና ለተጠቃሚ ምቹ የሆነ የመስመር ላይ የምግብ አቅርቦት መድረክ።",
      geez: "ቅልጡፍን ንተጠቃሚ ምቹእን ዝኾነ ናይ መስመር ምግቢ ኣቕርቦት መድረኽ።",
    },
    previewUrl: "https://tw-delivery.netlify.app",
    githubUrl: "https://github.com/onesamket/delivery",
  },
  {
    title: {
      en: "Preconfigured TypeScript Starter",
      am: "አስቀድሞ የተዘጋጀ የታይፕስክሪፕት መነሻ ፕሮጀክት",
      geez: "ቅድሚ ዝተዳለወ ናይ ታይፕስክሪፕት መጀመሪ ፕሮጀክት",
    },
    description: {
      en: "A TypeScript starter project with preconfigured stacks.",
      am: "አስቀድሞ የተዘጋጁ ቴክኖሎጂዎችን የያዘ የታይፕስክሪፕት መነሻ ፕሮጀክት።",
      geez: "ቅድሚ ዝተዳለወ ቴክኖሎጂታት ዘለዎ ናይ ታይፕስክሪፕት መጀመሪ ፕሮጀክት።",
    },
    previewUrl: "https://tw-stack.vercel.app",
    githubUrl: "https://github.com/onesamket/tw-stack",
  },
  {
    title: {
      en: "Ethiopian Fashion E-commerce",
      am: "የኢትዮጵያ ፋሽን ኢ-ኮመርስ",
      geez: "ናይ ኢትዮጵያ ፋሽን ኢ-ኮመርስ",
    },
    description: {
      en: "E-commerce platform featuring Ethiopian fashion.",
      am: "የኢትዮጵያ ፋሽንን የሚያቀርብ የኢ-ኮመርስ መድረክ።",
      geez: "ናይ ኢትዮጵያ ፋሽን ዘቕርብ ናይ ኢ-ኮመርስ መድረኽ።",
    },
    previewUrl: "https://et-fashion.netlify.app",
    githubUrl: "https://github.com/onesamket/fashion",
  },
  {
    title: {
      en: "Research Management System",
      am: "የምርምር አስተዳደር ሥርዓት",
      geez: "ናይ ምርምር ኣመሓዳድራ ስርዓት",
    },
    description: {
      en: "An efficient platform for managing research projects.",
      am: "የምርምር ፕሮጀክቶችን ለማስተዳደር የተዘጋጀ ቀልጣፋ መድረክ።",
      geez: "ናይ ምርምር ፕሮጀክትታት ንምምሕዳር ዝተዳለወ ቅልጡፍ መድረኽ።",
    },
    previewUrl: "https://tw-researcher.netlify.app",
    githubUrl: "https://github.com/onesamket/researcher",
  },
  {
    title: {
      en: "dBooks Clone",
      am: "የዲቡክስ ኮፒ",
      geez: "ናይ ዲቡክስ ቅዳሕ",
    },
    description: {
      en: "Platform for downloading and reading free books.",
      am: "ነጻ መጽሐፍትን ለማውረድና ለማንበብ የሚያገለግል መድረክ።",
      geez: "ነጻ መጻሕፍቲ ንምውራድን ንምንባብን ዘገልግል መድረኽ።",
    },
    previewUrl: "https://d-books-clone.vercel.app",
    githubUrl: "https://github.com/onesamket/dBooks-clone",
  },
  {
    title: {
      en: "Google Play Store UI Clone",
      am: "የጉግል ፕሌይ ስቶር ዩአይ ኮፒ",
      geez: "ናይ ጉግል ፕሌይ ስቶር ዩአይ ቅዳሕ",
    },
    description: {
      en: "A clone of the Google Play Store interface.",
      am: "የጉግል ፕሌይ ስቶር ኢንተርፌስ ኮፒ።",
      geez: "ናይ ጉግል ፕሌይ ስቶር ኢንተርፌስ ቅዳሕ።",
    },
    previewUrl: "#",
    githubUrl: "https://github.com/onesamket/playstore",
  },
  {
    title: {
      en: "Google Gmail UI Clone",
      am: "የጉግል ጂሜይል ዩአይ ኮፒ",
      geez: "ናይ ጉግል ጂሜይል ዩአይ ቅዳሕ",
    },
    description: {
      en: "A clone of the Gmail user interface.",
      am: "የጂሜይል ተጠቃሚ ኢንተርፌስ ኮፒ።",
      geez: "ናይ ጂሜይል ተጠቃሚ ኢንተርፌስ ቅዳሕ።",
    },
    previewUrl: "#",
    githubUrl: "https://github.com/onesamket/gmail-clone",
  },
  {
    title: {
      en: "E-commerce Website",
      am: "የኢ-ኮመርስ ድህረ ገጽ",
      geez: "ናይ ኢ-ኮመርስ መርበብ ሓበሬታ",
    },
    description: {
      en: "Modern e-commerce website for various products.",
      am: "ለተለያዩ ምርቶች የተዘጋጀ ዘመናዊ የኢ-ኮመርስ ድህረ ገጽ።",
      geez: "ንዝተፈላለዩ ፍርያት ዝተዳለወ ዘመናዊ ናይ ኢ-ኮመርስ መርበብ ሓበሬታ።",
    },
    previewUrl: "https://eat5foods.vercel.app",
    githubUrl: "https://github.com/onesamket",
  },
  {
    title: {
      en: "Game Hub Dashboard",
      am: "የጨዋታ ማዕከል ዳሽቦርድ",
      geez: "ናይ ጸወታ ማእከል ዳሽቦርድ",
    },
    description: {
      en: "Interactive UI for exploring various games.",
      am: "ለተለያዩ ጨዋታዎች መፈለጊያ የሚያገለግል ተግባራዊ ዩአይ።",
      geez: "ንዝተፈላለዩ ጸወታታት መፍለዪ ዘገልግል ተግባራዊ ዩአይ።",
    },
    previewUrl: "https://challenge-lovat.vercel.app/",
    githubUrl: "https://github.com/onesamket/challenge",
  },
  {
    title: {
      en: "Pinterest App UI Clone (WIP)",
      am: "የፒንተረስት መተግበሪያ ዩአይ ኮፒ (በሂደት ላይ)",
      geez: "ናይ ፒንተረስት መተግበሪያ ዩአይ ቅዳሕ (ኣብ ከይዲ)",
    },
    description: {
      en: "A mobile UI clone of Pinterest.",
      am: "የፒንተረስት ሞባይል ተጠቃሚ ኢንተርፌስ ኮፒ።",
      geez: "ናይ ፒንተረስት ሞባይል ተጠቃሚ ኢንተርፌስ ቅዳሕ።",
    },
    previewUrl: "#",
    githubUrl: "https://github.com/onesamket/pinterest-clone",
  },
  {
    title: {
      en: "Food Delivery Mobile App",
      am: "የምግብ አቅርቦት ሞባይል መተግበሪያ",
      geez: "ናይ መግቢ ኣቕርቦት ሞባይል መተግበሪያ",
    },
    description: {
      en: "A mobile application designed for food delivery services.",
      am: "ለምግብ አቅርቦት አገልግሎቶች የተዘጋጀ የሞባይል መተግበሪያ።",
      geez: "ንናይ መግቢ ኣቕርቦት ኣገልግሎታት ዝተዳለወ ናይ ሞባይል መተግበሪያ።",
    },
    previewUrl: "#",
    githubUrl: "https://github.com/onesamket/food-delivery-app",
  },
  {
    title: {
      en: "Building Future...",
      am: "የወደፊቱን እየገነባን...",
      geez: "ናይ መጻኢ እናሃነጽና...",
    },
    description: {
      en: "Currently developing elegant web and mobile applications.",
      am: "በአሁኑ ጊዜ ውብ የድር እና የሞባይል መተግበሪያዎችን እያዘጋጀን ነው።",
      geez: "ኣብዚ እዋን እዚ ጽቡቕ ናይ ድሕረ ገጽን ሞባይልን መተግበሪያታት እናዳለና ኢና።",
    },
    previewUrl: "https://github.com/onesamket",
    githubUrl: "https://github.com/onesamket",
  },
];
