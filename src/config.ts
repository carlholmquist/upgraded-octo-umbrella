export const siteConfig = {
  name: "Carl Holmquist",
  title: "Engineer | MSc Building Design | FE Civil Candidate | Southern California",
  description:
    "Portfolio and professional profile of Carl Holmquist — Engineer, MSc Building Design, FE Civil Candidate based in Southern California.",
  accentColor: "#409c44",
  social: {
    email: "carl@holmquist.studio",
    linkedin: "https://linkedin.com/in/carl-holmquist-830971137",
    twitter: "",
    github: "https://github.com/carlholmquist",
  },
  aboutMe:
    "Engineer with a broad technical background spanning structural materials research, manufacturing operations, and hands-on construction. I hold an MSc in Engineering, Building Design from Luleå University of Technology and am currently pursuing FE Civil licensure as I transition into building engineering in Southern California.\n\nMy career has given me an unusually wide perspective — leading production operations with full budget responsibility in the millions, managing multidisciplinary teams, and delivering complex technical projects from planning through execution. Along the way I have developed a genuine enthusiasm for computational problem solving, applying programming and data tools to real engineering and operational challenges.\n\nThis breadth is grounded in technical depth, including structural materials research conducted in collaboration with RISE Research Institutes of Sweden and Holmen Trävaror for my MSc thesis.\n\nI'm drawn to technical work that combines engineering depth with real-world complexity. Long term I'm building toward founding my own engineering practice.",
  skills: [
    "Python",
    "SQL",
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
        "MSc thesis investigating correlations between wood anatomy and mechanical properties in Swedish-grown lodgepole pine (Pinus contorta). Analyzed 432 timber specimens from four geographic locations across Sweden, measuring ring width, latewood ratio, and swelling against bending strength, modulus of elasticity, and density. Developed a custom Python image analysis pipeline to automate cross-sectional measurements from high-resolution timber scans. Statistical analysis included Pearson correlation and one-way ANOVA. Conducted in collaboration with RISE Research Institutes of Sweden and Holmen Trävaror.",
      link: "",
      skills: ["Python", "Statistical analysis", "Structural materials"],
    },
    {
      name: "Future project",
      description:
        "Placeholder for upcoming projects. Check back soon.",
      link: "",
      skills: [],
    },
  ],
  experience: [
    {
      company: "Holmen Wood Products",
      title: "Operations Manager",
      dateRange: "Aug 2023 – Present",
      bullets: [
        "Led production operations across grading mills and kilns in a sawmill environment",
        "Managed multidisciplinary teams including operators, technicians, and shift leaders",
        "Held full budget responsibility in the millions, covering fixed and variable costs",
        "Served on executive team contributing to strategy, policy, and financial decisions",
      ],
    },
    {
      company: "DWS Printing & Packaging",
      title: "Project Manager",
      dateRange: "Nov 2020 – Jan 2023",
      bullets: [
        "Delivered installation of a large-scale industrial heat exchanger system",
        "Coordinated consulting engineers, contractors, pipe fitters, accredited inspectors, and suppliers",
        "Managed project within technical and budgetary constraints from planning through commissioning",
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
      dateRange: "2015 – 2020",
      achievements: [
        "Degree validated by NCEES without deficiencies",
        "Thesis conducted in collaboration with RISE Research Institutes of Sweden and Holmen Trävaror",
        "Coursework spanning structural engineering, building physics, and computational methods",
      ],
    },
  ],
};
