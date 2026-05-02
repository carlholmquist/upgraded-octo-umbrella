export const siteConfig = {
  name: "Carl Holmquist",
  title: "Hej",
  description:
    "Portfolio and professional profile of Carl Holmquist — Engineer, MSc Building Design, Based in Houston, Texas.",
  accentColor: "#409c44",
  social: {
    email: "carl@holmquist.studio",
    linkedin: "https://linkedin.com/in/carl-holmquist-830971137",
    twitter: "",
    github: "https://github.com/carlholmquist",
  },
  info: "I am Carl Holmquist. Engineer. Enjoy building stuff and taking photos. Interested in structures, tools, and making things work. In Houston TX, from Sweden",
  aboutMe:
    "Engineer with a broad technical background spanning structural materials research, manufacturing operations, and hands-on construction. I hold an MSc in Engineering, Building Design from Luleå University of Technology and am currently transitioniong into building engineering in the US.\n\nMy career has given me an unusually wide perspective — leading production operations with full budget responsibility in the millions, managing multidisciplinary teams, and delivering complex technical projects from planning through execution. Along the way I have developed a genuine enthusiasm for computational problem solving, applying programming and data tools to real engineering and operational challenges.\n\nThis breadth is grounded in technical depth, including structural materials research conducted in collaboration with RISE Research Institutes of Sweden and Holmen Wood Products for my MSc thesis.\n\nI'm drawn to technical work that combines engineering depth with real-world complexity.",
  skills: [
    "Python",
    "Power BI",
    "Data workflow automation",
    "Structural materials analysis",
    "Project management",
    "Operations management",
    "Budget management",
  ],
  projects: [
    {
      name: "Ghost — Private Location Journal",
      description:
        "Ghost is a private location journal for iPhone that silently builds a daily timeline of where you've been — no accounts, no cloud sync, nothing leaves the device. Rather than streaming GPS, it runs on iOS's CLVisit API, which fires discrete arrival and departure events at the OS level, keeping battery impact minimal. The engineering challenge was making passively detected data feel polished: matching raw CLVisit coordinates to saved places within a 150m radius, reconstructing routes as MapKit polylines, and handling overlapping pins with a tap disambiguation sheet modeled after Apple Maps. State across a 2,600-line SwiftUI codebase is managed through @Observable classes, with all data stored on-device via SwiftData.",
      link: "",
      skills: ["Swift", "SwiftUI", "SwiftData", "MapKit", "CoreLocation"],
    },
    {
      name: "Mechanical Properties of Swedish-Grown Lodgepole Pine",
      description:
        "MSc thesis investigating correlations between wood anatomy and mechanical properties in Swedish-grown lodgepole pine (Pinus contorta). Analyzed 432 timber specimens from four geographic locations across Sweden, measuring ring width, latewood ratio, and swelling against bending strength, modulus of elasticity, and density. Developed a custom Python image analysis pipeline to automate cross-sectional measurements from high-resolution timber scans. Statistical analysis included Pearson correlation and one-way ANOVA. Conducted in collaboration with RISE Research Institutes of Sweden and Holmen Wood Products.",
      link: "",
      skills: ["Python", "Statistical analysis", "Structural materials"],
    },
  ],
  experience: [
    {
      company: "Holmen Wood Products",
      title: "Production Manager",
      dateRange: "Aug 2023 – Present",
      bullets: [
        "Led production operations across grading mills and kilns in a sawmill environment",
        "Managed multidisciplinary teams including operators, technicians, and shift leaders",
        "Held full budget responsibility for about $6 million, covering fixed and variable costs",
        "Served on executive team contributing to strategy, policy, and financial decisions",
        "Delivered installation of a large-scale industrial heat exchanger system",
        "Coordinated consulting engineers, contractors, accredited inspectors, and suppliers",
        "Managed project within technical and budgetary constraints from planning through commissioning",
      ],
    },
    {
      company: "DWS Printing & Packaging",
      title: "Plant Manager",
      dateRange: "Nov 2020 – Jan 2023",
      bullets: [
        "Helped built and operationalized company's first satellite production facility, establishing workflows, staffing, and all operational functions",
        "Scaled production to millions of labels per month serving large anchor clients and a growing craft brewery portfolio",
        "Provided critical supply chain continuity to small breweries during COVID-19 disruption when large industry players dominated limited supply lines",
        "Managed all plant functions concurrently including purchasing, logistics, quality assurance, people management and equipment maintenance",
      ],
    },
    {
      company: "Regmaster AB",
      title: "Carpenter",
      dateRange: "Jan 2013 – Jan 2015",
      bullets: [
        "Hands-on construction across service industry and new construction projects",
      ],
    },
  ],
  education: [
    {
      school: "Luleå University of Technology",
      degree: "MSc in Engineering, Building Design",
      dateRange: "2015 – 2025",
      achievements: [
        "Degree validated by NCEES without deficiencies",
        "Thesis conducted in collaboration with RISE Research Institutes of Sweden and Holmen Wood Products",
        "Coursework spanning structural engineering, building physics, and computational methods",
        "Main body of studies between 2015 and 2020, thesis defended 2023, degree awarded in 2025"
      ],
    },
  ],
  Bookmarks: [
      {
        catname: "News",
        links: [
          {
            label: "DN",
            url: "https://dn.se",
          },
        ],
      },
      {
        catname: "Engineering",
        links: [
          {
            label: "NCEES",
            url: "https://account.ncees.org/login",
          },
          {
            label: "SkyCiv",
            url: "https://platform.skyciv.com/login"
          },
          {
            label: "CalcForge",
            url: "https://calcforge.com",
          },
          {
            label: "Resources for FE",
            url: "https://journey2pe.com/the-ultimate-free-resource-guide-to-passing-the-fe-exam/",
          },
        ],
      },
      {
        catname: "Web Apps",
        links: [
          {
            label: "Strudel",
            url: "https://strudel.cc",
          },
          {
            label: "Claude",
            url: "https://claude.ai",
          },
          {
            label: "ARC FLUIDS",
            url: "https://prosperousuniverse.com/auth/login?od=https://apex.prosperousuniverse.com/#/cards/c339a71756d1f504ac9cea23444aa725",
          },
        ],
      },{
        catname: "Socials",
        links: [
          {
            label: "Instagram",
            url: "https://instagram.com",
          },
          {
            label: "Facebook",
            url: "https://facebook.com",
          },
          {
            label: "reddit",
            url: "https://reddit.com",
          },
        ],
      },{
        catname: "Google",
        links: [
          {
            label: "Sheets",
            url: "https://docs.google.com/spreadsheets/u/1/",
          },
          {
            label: "Maps",
            url: "https://www.google.com/maps",
          },
          {
            label: "Youtube",
            url: "https://youtube.com",
          },
          {
            label: "Translate",
            url: "https://www.google.com/search?client=safari&rls=en&q=translate&ie=UTF-8&oe=UTF-8",
          },
        ],
      },{
        catname: "Services",
        links: [
          {
            label: "Peacock",
            url: "https://www.peacocktv.com/watch/home",
          },
          {
            label: "Disney",
            url: "https://www.disneyplus.com/home",
          },
          {
            label: "Strava",
            url: "https://www.strava.com/dashboard",
          },
          {
            label: "Hulu",
            url: "https://www.hulu.com/hub/home",
          },
          {
            label: "Youtube",
            url: "https://youtube.com",
          },
        ],
      },{
        catname: "Developer",
        links: [
          {
            label: "github",
            url: "https://www.github.com",
          },
          {
            label: "Cloudinary",
            url: "https://console.cloudinary.com/",
          },
          {
            label: "holmquist.studio",
            url: "https://www.holmquist.studio",
          },
          {
            label: "Hulu",
            url: "https://www.hulu.com/hub/home",
          },
          {
            label: "Render",
            url: "https://dashboard.render.com",
          },
          {
            label: "Youtube",
            url: "https://youtube.com",
          },
          {
            label: "Cloudflare Dashboard",
            url: "https://dash.cloudflare.com/",
          },
          {
            label: "Brave API Dashboard",
            url: "https://api-dashboard.search.brave.com/app/dashboard",
          },
          {
            label: "Cloudflare",
            url: "https://dash.cloudflare.com/",
          }
        ],
      },
    ],
}
