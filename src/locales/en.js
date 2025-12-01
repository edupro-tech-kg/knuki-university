export default {
  locale: "en",
  navLinks: [
    { label: "Home", href: "#" },
    { label: "Programs", href: "#programs" },
    { label: "Events", href: "#events" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ],
  header: {
    universityName:
      "Kyrgyz National University of Culture and Arts named after Bubusara Beishenalieva",
    menu: "Menu",
    brandTop: "Kyrgyz National",
    brandName: "Cultural & Arts University",
    apply: "Apply now",
  },
  search: {
    placeholder: "Search",
    button: "Next",
  },

  hero: {
    title1: "ART",
    title2: "PEAK OF THE NATIONAL SPIRIT",
    searchPlaceholder: "Search",
    next: "Next",
    stat1: "million students",
    stat2: "budget places",
    stat3: "fee-paying places"
  },

  about: {
    eyebrow: "About",
    title: "Tradition and modernity in one space",
    description:
      "We bridge Kyrgyz cultural heritage with modern learning technologies and live stage practice.",
    highlights: [
      { value: "65 years", text: "growing culture" },
      { value: "1300+", text: "artist alumni" },
    ],
    badge: "Live stage at KNUCA",
  },
  programs: {
    eyebrow: "KNUCA DIRECTIONS",
    faculty: "faculty",
    buttonText: "Learn More",
    list: [
      {
        id: 1,
        title: "Variety Arts and Music",
      },
      {
        id: 2,
        title: "Theatre Arts",
      },
      {
        id: 3,
        title: "Film and Television",
      },
      {
        id: 4,
        title: "Choreography and Cultural Activities",
      },
    ],
  },
  advantages: {
    eyebrow: "Why us",
    title: "University strengths",
    description: "Direct mentorship from masters, constant stage time and project participation.",
    list: [
      {
        title: "Renowned faculty",
        description: "National artists, honored cultural figures and guest mentors.",
      },
      {
        title: "Stage practice",
        description: "Concert halls, labs and film sets for regular performances.",
      },
      {
        title: "International projects",
        description: "Exchange programs, festivals and co-productions abroad.",
      },
      {
        title: "Modern infrastructure",
        description: "Recording studios, costume shop, rehearsal rooms and media library.",
      },
    ],
  },
  events: {
    eyebrow: "Events",
    title: "Upcoming",
    description: "Concerts, showcases and masterclasses by faculty and guest artists.",
    button: "View full schedule",
    register: "Register",
    list: [
      { date: "Jan 12", title: "Winter student gala concert", location: "Grand Hall, KNUCA" },
      { date: "Jan 26", title: "Premiere of the play “Muras”", location: "Theatre Stage" },
      { date: "Feb 05", title: "Open masterclass on ethno-jazz", location: "Music Studio" },
    ],
  },
  calendar: {
    label: "Calendar",
    month: "September 2025",
    legend: "Events",
    note: "Live schedule for the week with stages and masterclasses.",
    days: {
      dayNamesShort: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      dayNames: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    },
    weeks: {
      weekText: "week.",
      weekTextLong: "Week",
    },
    buttonText: {
      today: "Today",
      month: "Month",
      week: "Week",
      day: "Day",
      list: "Agendas",
    },
    allDayText: "All day",
    moreLinkText(n) {
      return `More ${n}`;
    },
    noEventsText: "There is no event",
    dayHeaderFormat: {
      weekday: "short",
    },
    events: [
      { id: 1, title: "Congratulations on White Hat Day.", date: "2025-11-05" },
      { id: 2, title: "The rector congratulated the veteran women of KMMIU", date: "2025-11-08" },
      { id: 3, title: "Uzbekistan", data: "2025-11-13" },
      { id: 4, title: "KMMU and Bishkek City Drama Theater collaborate", date: "2025-11-12" },
      { id: 5, title: "Dance lesson", date: "2025-11-15" },
      { id: 6, title: "Ankara", date: "2025-11-22" },
    ],
    lastNews: {
      title: "Latest News",
      newsData: [
        {
          desc: "A KUMIU student took 3rd place in an international competition",
          date: "April 22, 2025",
        },
        {
          desc: "The 10th International Festival 'New Names' has concluded",
          date: "April 22, 2025",
        },
        {
          desc: "Ballet star Aisuluu Tokombaeva at KUMIU",
          date: "April 9, 2025",
        },
        {
          desc: "A delegation from the Yakut Arctic State Institute of Culture and Arts arrived at KUMIU",
          date: "April 3, 2025",
        },
        {
          desc: "Awarded National Status",
          date: "March 27, 2025",
        },
        {
          desc: "KMMUI celebrated the Nooruz holiday",
          date: "March 24, 2025",
        },
        {
          desc: "A reporting concert for first-year students was held",
          date: "March 6, 2025",
        },
        {
          desc: "International cooperation agreement signed",
          date: "March 6, 2025",
        },
        {
          desc: "A representative of the Russian Film School has arrived",
          date: "April 22, 2025",
        },
      ],
    },
  },
  quickLinks: {
    title: "Quick Links",
    cards: [
      { id: 1, title: "About the University" },
      { id: 2, title: "Science & International Relations" },
      { id: 3, title: "Ebilim" },
      { id: 4, title: "Documents" },
    ],
    button: "Learn More",
  },
  gallery: {
    eyebrow: "Gallery",
    title: "Campus life",
    description: "Performances, rehearsals, backstage and classroom moments.",
    list: [
      {
        title: "Stage",
        image:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Costume shop",
        image:
          "https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Dance hall",
        image:
          "https://images.unsplash.com/photo-1521747116042-5a810fda9664?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Recording studio",
        image:
          "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Book a consultation",
    description:
      "Leave your contacts and we will share program details, intake dates and entrance exams.",
    addressLabel: "Address",
    phoneLabel: "Phone",
    addressValue: "Bishkek, Chui Ave 123",
    phoneValue: "+996 (312) 000 000",
    formBadge: "Application",
    formTitle: "Get consultation",
    fields: {
      name: "Full name",
      email: "Email",
      phone: "Phone",
      comment: "Comment",
    },
    submit: "Submit application",
    disclaimer: "By submitting you agree to personal data processing.",
  },
  footer: {
    labels: { address: "ADDRESS", links: "QUICK LINKS" },
    about: "Where Kyrgyz artistic heritage meets contemporary creative practice.",
    download: "Download brochure",
    navTitle: "Navigation",
    contactsTitle: "Contacts",
    contact: {
      address: "Bishkek, Chui Ave 123",
      phone: "+996 (312) 000 000",
      email: "info@knu-arts.kg",
    },
    copyright: "© 2025 Kyrgyz National University of Culture & Arts",
  },
  news: {
    title: "University News",
    items: [
      { title: "Ballet Evening", buttonText: "More" },
      { title: "Vocal Concert", buttonText: "More" },
      { title: "Educational Services", buttonText: "More" },
      { title: "Creative Laboratory", buttonText: "More" },
      { title: "Creative Evening", buttonText: "More" },
    ],
  },
  consultation: {
  title: 'Sign up for a consultation',
  description: 'The manager will contact you shortly!',
  form: {
    name: 'Full name',
    namePlaceholder: 'Balanchaev Balancha',
    phone: 'Phone',
    phonePlaceholder: '+996 ',
    faculty: 'Faculty ',
    programs: {
      program1: 'Music Arts',
      program2: 'Theatre & Film',
      program3: 'Choreography',
    },
    portfolio: 'Portfolio',
    upload: 'Upload file',
    submit: 'Submit application',
  }
},
  history: {
    title: "HISTORY",
    content: `General information. The Kyrgyz State University of Culture and Arts named after Bubusara Beishenalieva has become the leading center of the republic for training highly qualified and comprehensively educated specialists for cultural and art institutions. It is the first musical and creative educational institution in the republic. Has a certificate of a legal entity registered with the Ministry of Justice of the Kyrgyz Republic (registration No. 13310-3301-U-e, OKPO code 02246840, series 0065533 GRP). `,
    readMore: "Read more",
    readLess: "Collapse",
    imageAlt: "Traditional dancers",
  },
  mission: {
    title: "The University's mission is culture and art",
    description:
      "is to train talented, creative, intellectual personnel in the field of culture and arts",
    imageDescription:
      "The opening ceremony of the X International Student Theater Festival 'New Names' took place. The solemn ceremony was attended by Vice Prime Minister of the Kyrgyz Republic Edil Baisalov, Deputy Minister of Culture, Information and Youth Policy Timurland Ajimaliev, as well as theater figures, foreign guests, students and theater lovers.",
    button: "Learn More",
  },
};
