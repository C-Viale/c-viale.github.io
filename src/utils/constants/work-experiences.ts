type WorkExperience = {
  id: number;
  company: string;
  position: string;
  location: string;
  period: string[];
  details: string[];
  freelancer?: boolean;
  mainSkills: string[];
};

type Milestone = {
  beforeId?: number;
  afterId?: number;
  label: string;
  period: string;
};

export const milestones: Milestone[] = [
  {
    beforeId: 1,
    label: "Career Began",
    period: "July 2020",
  },
  {
    beforeId: 3,
    label: "Started Freelancing",
    period: "November 2023",
  },
];

export const workExperiences: WorkExperience[] = [
  {
    id: 6,
    company: "Like Brands",
    position: "Full-Stack Engineer",
    period: ["June 2024", "present"],
    location: "Remote, Brazil",
    mainSkills: ["TypeScript", "React", "C#", "ASP.NET Core", "PostgreSQL"],
    details: [
      `Developed and implemented new features for the “GlorySoft” project, a digital platform for a goods distribution company.`,
      `Refactored most of old architecture, improving development and maintanence time.`,
    ],
  },
  {
    id: 5,
    company: "JatLavo",
    position: "Full-Stack Engineer",
    period: ["June 2024", "December 2025"],
    location: "Remote, Brazil",
    freelancer: true,
    mainSkills: ["C#", "ASP.NET Core", "SQLite"],
    details: [`Developed and implemented an internal management system.`],
  },
  {
    id: 4,
    company: "Spark",
    position: "Full-Stack Engineer",
    period: ["March 2025", "May 2025"],
    location: "Remote, Brazil",
    freelancer: true,
    mainSkills: ["TypeScript", "React", "PostgreSQL"],
    details: [`Developed and implemented new features for the company's ORM.`],
  },
  {
    id: 3,
    company: "Shaw and Partners",
    position: "Full-Stack Engineer",
    period: ["November 2023", "July 2024"],
    location: "Remote, USA",
    mainSkills: ["TypeScript", "React", "Node.js", "PostgreSQL", "Docker"],
    details: [
      `Engaged with a multicultural team across diﬀerent time zones, using English as the primary language for meetings, documentation, and cross-functional communication.`,
      `Developed and implemented new features for the company's business management system, including HR pipelines, tasks management, billing and automated reports.`,
    ],
  },
  {
    id: 2,
    company: "Okalab",
    position: "Lead Full-Stack Engineer",
    period: ["August 2022", "November 2023"],
    location: "Bebedouro, SP, Brazil",
    mainSkills: [
      "TypeScript",
      "React",
      "Node.js",
      "PostgreSQL",
      "Docker",
      "AWS",
    ],
    details: [
      `Led a team with 4 developers.`,
      `Designed the entire architecture of the “PrevLife” project, a digital platform presented to the Love Hospital, the largest oncology hospital in Brazil.`,
      `Developed and implemented new features for the “Metalquip” project, a digital platform for an agribusiness company.`,
      `Developed and implemented new features for the "Swint" project, a digital platform for a credit fraud prevention company.`,
      `Developed and implemented new features for the "City Inventory" project, a digital platform for the city hall.`,
    ],
  },
  {
    id: 1,
    company: "Cifal Distribuidora",
    position: "Full-Stack Engineer",
    period: ["July 2020", "April 2022"],
    location: "Bebedouro, SP, Brazil",
    mainSkills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Node.js",
      "MSSQL",
      "PostgreSQL",
    ],
    details: [
      `Developed and implemented new features on the old internal web portal.`,
      `Developed a new internal web portal from scratch.`,
      `Helped on the company's database migration from SQL Server to Postgres, rewriting more than 700 SQL queries used by the company systems and spreadsheets.`,
    ],
  },
];
