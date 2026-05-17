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

  // ─── Terminal content ────────────────────────────────────────────────────────
  terminal: {
    // Shown when the user runs `cat .intro` on boot
    intro: "hej.\n\ni'm carl. engineer. i build things and take photos.\ninterested in structures, tools, and making things work.\nhouston, tx (from sweden).",
    // Shown when the user runs `cat README` in ~
    readme: "this is a small terminal you can poke around in.\ntype `ls` or `help`, or just click any name below.\n`ls -a` shows the rest.",
    // Shown when the user runs `cat .colophon`
    colophon: "set in IBM Plex Mono. dot grid is 22px.\nno analytics. no cookies. theme is random per visit.\nbuilt late at night.",
    // Two lines shown on boot before the prefilled command
    loginLines: [
      "> last login: {date}",
      "> 4 sections · 1 archive · welcome.",
    ],
  },

  // ─── About ───────────────────────────────────────────────────────────────────
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

  // ─── Projects ────────────────────────────────────────────────────────────────
  // Each project becomes a directory in ~/projects/.
  // slug      → directory name (keep it short, lowercase, no spaces)
  // year      → shown in ls listing
  // files     → extra files inside the directory (name + content)
  // links     → rendered as clickable rows in a `links` file
  // link      → kept for other pages that use the old single-link field
  projects: [
    {
      name: "Ghost — Private Location Journal",
      slug: "ghost",
      year: "2025",
      hidden: false,
      description:
        "application · ios · status: live\nswift · swiftui · swiftdata · coreLocation\n\na location timeline that quietly logs where you have been, so you can re-read your year as geography.",
      link: "",
      links: [
        { label: "ghost.app", href: "#" },
        { label: "github", href: "#" },
      ],
      skills: ["Swift", "SwiftUI", "SwiftData", "MapKit", "CoreLocation"],
      files: [
        {
          name: "why",
          blocks: [
            { title: "why", content: "i wanted a notebook for places, not for words. something that runs in the background, never asks for input, and gives me a quiet map of a year — every café, every detour, every two-hour walk that i forget i took." },
          ],
        },
        {
          name: "how",
          blocks: [
            { title: "how", content: "significant-location updates on ios, batched to disk, replayed into a tile renderer. no servers. no accounts. export to gpx when you want to take your year with you." },
          ],
        },
      ],
    },
    {
      name: "Mechanical Properties of Lodgepole Pine",
      slug: "wood",
      year: "2023",
      hidden: false,
      description:
        "master thesis · archived\npython · abaqus · 24 specimens\n\na bench-and-model study of how solid wood deforms when its moisture content swings, and a small toolchain for predicting warp from species and cut.",
      link: "",
      links: [
        { label: "thesis.pdf", href: "#" },
        { label: "data", href: "#" },
      ],
      skills: ["Python", "Statistical analysis", "Structural materials"],
      files: [
        {
          name: "thesis",
          blocks: [
            { title: "thesis", content: "wood is anisotropic and hygroscopic. that is two boring words for a quiet kind of magic: a flat board, left in a different room for a week, will cup or twist or split. cabinetmakers have known this for a thousand years; engineers model it badly.\n\ni spent a year poking at small specimens of picea abies and quercus robur, watching them shrink between 12% and 6% moisture content, trying to predict — from species, cut and grain angle — which way they would move." },
          ],
        },
        {
          name: "result",
          blocks: [
            { title: "result", content: "a finite-element model that gets within ~14% of measured deformation on flatsawn boards, and within ~22% on quartersawn. a short paper, a long appendix, and an enormous respect for whoever made the chair you are sitting on." },
          ],
        },
      ],
    },
    {
      name: "Things — Workshop",
      slug: "pipeline",
      year: "Current",
      hidden: false,
      description:
        "workshop · ongoing\nash · oak · linseed oil · patience\n\nfurniture and small objects built in a one-room workshop in stockholm. stools, shelves, a folding desk, a lamp that did not work.",
      link: "",
      links: [],
      skills: [],
      files: [
        {
          name: "build-crib",
          blocks: [
            { title: "build-crib", 
              content: " I want to make a crib from scratch for the baby. I think it would be meaningful for me to put effort and labor in to something for him that will last.",
              bullets:[
                "Thinking made in birch",
                "Simple design",
                "Easy to build",
                "Sturdy"
              ]
            },{
              content:" Simply just something I can and will be able to build. It will require some hand tools though and Im thinking I'll need something like this to start:",
              bullets: [
                "Thickness planer and jointer for making panels",
                "Circle saw",
                "Sander",
                "Router",
                "Misc hand tools",
                "Budget of a few hundred maybe"
              ]
            }
          ],
        },
        {
          name: "get-bike",
          year: "2026",
          blocks: [
            {title:"Bikes", content:"I want to build out my own road bike. Maybe with chinease unnamed carbon frame? more research to be done. Also considering buying used or new bikes. So far the biggest considerations are:",},
            {bullets: [
            "2014 Trek Madone 5.9 with ultegra di2 groupset",
            "Walmart Ozark Trail gravelbike",
          ]},{content:"So far it looks to be incredibly hard to find a deal because everyone seem to think their 30 year old bike is a rare collectors item made out of pure gold"},
          {
            photo:"https://www.garbaruk.com/web/content/102304?download=false",caption:"test of picture in project",
          },{
            content:"Potentially this",
            links: [{label:"Seraph", href:"https://docs.google.com/presentation/d/10e2WU9GFn-puuL61Fdcj6eTDnwwzp-FniAAtjsnUP84/edit?slide=id.g39b589e592d_0_0#slide=id.g39b589e592d_0_0"}]
          }
          ],
        },
        {
          name: "print-pictures",
          year: "2026",
          blocks: [
            { title: "print-pictures", content: "Get my canon selphy printer again, miss being able to print photos at any given time." },
          ],
        },
        {
          name: "learn-español",
          year: "2026",
          blocks: [
            { title: "learn-español", content: "Quisiera hablar Espanol para de fin de anos. Yo tengo 102 dias en dualingo ahora y creo que me esta yendo bien" },
          ],
        },
        {
          name: "build-self-water-planter",
          year: "2026",
          hidden: true,
          blocks:[
            {
              title:"Self watering planter",
              bullets:[
                "",
                "",            
              ],
              content:"I've always wanted to build a automatic planter that water itself based on previous rain, sun and shade. I will need the following.",
            },
            {
              bullets:[
                "Hoses",
                "Raspberry PI",
                "Pumps",
              ]
            },
            {
              photo:"url"
            }
          ]
        },
        {
          name: "template",
          hidden: true,
          blocks:[
            {
              title:"",
              bullets:[
                "",
                "",            
              ],
              content:"",
            },
            {
              photo:"url"
            }
          ]
        },
      ],
    },
  ],

  // ─── Experience ──────────────────────────────────────────────────────────────
  experience: [
    {
      company: "Holmen Wood Products",
      title: "Production Manager",
      dateRange: "Aug 2023 – Present",
      hidden: false,
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
      hidden: false,
      bullets: [
        "Helped built and operationalized company's first satellite production facility, establishing workflows, staffing, and all operational functions",
        "Scaled production to millions of labels per month serving large anchor clients and a growing craft brewery portfolio",
        "Provided critical supply chain continuity to small breweries during COVID-19 disruption when large industry players dominated limited supply lines",
        "Managed all plant functions concurrently including purchasing, logistics, quality assurance, people management and equipment maintenance",
      ],
    },
    {
      company: "Holmen Iggesunds Paperboard",
      title: "Machine operator",
      dateRange: "jun 2015 – aug 2018",
      hidden: true,
      bullets: [
        "Summer temp, worked on sheeting machine 9",
      ],
    },
    {
      company: "Regmaster AB",
      title: "Carpenter",
      dateRange: "Jan 2013 – Jan 2015",
      hidden: false,
      bullets: [
        "Hands-on construction across service industry and new construction projects",
      ],
    },
  ],

  // ─── Education ───────────────────────────────────────────────────────────────
  education: [
    {
      school: "Luleå University of Technology",
      degree: "MSc in Engineering, Building Design",
      dateRange: "aug 2015 – 2025",
      hidden: false,
      achievements: [
        "Degree validated by NCEES without deficiencies",
        "Thesis conducted in collaboration with RISE Research Institutes of Sweden and Holmen Wood Products",
        "Coursework spanning structural engineering, building physics, and computational methods",
        "Main body of studies between 2015 and 2020, thesis defended 2023, degree awarded in 2025",
      ],
    },
    {
      school: "Royal Institute of Technology - Dropped out",
      degree: "MSc in Engineering, Civil Engineering",
      dateRange: "aug 2012 – jan 2013",
      hidden: true,
      achievements: [
        "Degree validated by NCEES without deficiencies",
        "Thesis conducted in collaboration with RISE Research Institutes of Sweden and Holmen Wood Products",
        "Coursework spanning structural engineering, building physics, and computational methods",
        "Main body of studies between 2015 and 2020, thesis defended 2023, degree awarded in 2025",
      ],
    },
    {
      school: "Bromangymnasiet High School ",
      degree: "Natural science program",
      dateRange: "aug 2009 – 2012",
      hidden: true,
      achievements: [
        "Natural science",
      ],
    },
  ],

  // ─── Bookmarks ───────────────────────────────────────────────────────────────
  Bookmarks: [
    {
      catname: "News",
      links: [{ label: "DN", url: "https://dn.se" }],
    },
    {
      catname: "Engineering",
      links: [
        { label: "NCEES", url: "https://account.ncees.org/login" },
        { label: "SkyCiv", url: "https://platform.skyciv.com/login" },
        { label: "CalcForge", url: "https://calcforge.com" },
        { label: "Res FE", url: "https://journey2pe.com/the-ultimate-free-resource-guide-to-passing-the-fe-exam/" },
      ],
    },
    {
      catname: "Web Apps",
      links: [
        { label: "Strudel", url: "https://strudel.cc" },
        { label: "Claude", url: "https://claude.ai" },
        { label: "ARC FLUIDS", url: "https://prosperousuniverse.com/auth/login?od=https://apex.prosperousuniverse.com/#/cards/c339a71756d1f504ac9cea23444aa725" },
      ],
    },
    {
      catname: "Socials",
      links: [
        { label: "Instagram", url: "https://instagram.com" },
        { label: "Facebook", url: "https://facebook.com" },
        { label: "reddit", url: "https://reddit.com" },
      ],
    },
    {
      catname: "Google",
      links: [
        { label: "Sheets", url: "https://docs.google.com/spreadsheets/u/1/" },
        { label: "Maps", url: "https://www.google.com/maps" },
        { label: "Youtube", url: "https://youtube.com" },
        { label: "Translate", url: "https://www.google.com/search?client=safari&rls=en&q=translate&ie=UTF-8&oe=UTF-8" },
      ],
    },
    {
      catname: "Services",
      links: [
        { label: "Peacock", url: "https://www.peacocktv.com/watch/home" },
        { label: "Disney", url: "https://www.disneyplus.com/home" },
        { label: "Strava", url: "https://www.strava.com/dashboard" },
        { label: "Hulu", url: "https://www.hulu.com/hub/home" },
        { label: "HBO", url: "https://play.hbomax.com" },
      ],
    },
    {
      catname: "Developer",
      links: [
        { label: "github", url: "https://www.github.com" },
        { label: "Cloudinary", url: "https://console.cloudinary.com/" },
        { label: "holmquist.studio", url: "https://www.holmquist.studio" },
        { label: "Render", url: "https://dashboard.render.com" },
        { label: "Brave API Dashboard", url: "https://api-dashboard.search.brave.com/app/dashboard" },
        { label: "Cloudflare", url: "https://dash.cloudflare.com/" },
        { label: "Copernicus", url: "https://browser.dataspace.copernicus.eu/" },
      ],
    },
  ],
};
