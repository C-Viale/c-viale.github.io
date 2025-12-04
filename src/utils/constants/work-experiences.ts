type WorkExperience = {
  company: string;
  position: string;
  location: string;
  period: string[];
  details: string[];
  freelancer?: boolean;
};

export const workExperiences: WorkExperience[] = [
  {
    company: "Like Brands",
    position: "Full-Stack Engineer",
    period: ["Jun 2024", "present"],
    location: "Remote",
    details: [
      `Developed and implemented new features for the “GlorySoft” project, a digital platform for a goods distribution company.`,
      `Refactored most of old architecture, improving development and maintanence time.`,
    ],
  },
  {
    company: "JatLavo",
    position: "Full-Stack Engineer",
    period: ["June 2024", "Dec 2025"],
    location: "Remote",
    freelancer: true,
    details: [`Developed and implemented an internal management system.`],
  },
  {
    company: "Spark",
    position: "Full-Stack Engineer",
    period: ["March 2025", "May 2025"],
    location: "Remote",
    freelancer: true,
    details: [`Developed and implemented new features for the company's ORM.`],
  },
  {
    company: "Shaw and Partners",
    position: "Full-Stack Engineer",
    period: ["November 2023", "July 2024"],
    location: "Remote",
    details: [
      `Engaged with a multicultural team across diﬀerent time zones, using English as the primary language for meetings, documentation, and cross-functional communication.`,
      `Developed and implemented new features for the company's business management system, including HR pipelines, tasks management, billing and automated reports.`,
    ],
  },
  {
    company: "Okalab",
    position: "Lead Full-Stack Engineer",
    period: ["August 2022", "November 2023"],
    location: "Bebedouro, SP",
    details: [
      `Lead a team with 4 developers.`,
      `Designed the entire architecture of the “PrevLife” project, a digital platform presented to the Love Hospital, the largest oncology hospital in Brazil.`,
      `Developed and implemented new features for the “Metalquip” project, a digital platform for an agribusiness company.`,
      `Developed and implemented new features for the "Swint" project, a digital platform for a credit fraud prevention company.`,
      `Developed and implemented new features for the "City Inventory" project, a digital platform for the city hall.`,
    ],
  },
  {
    company: "Cifal Distribuidora",
    position: "Full-Stack Engineer",
    period: ["July 2022", "April 2022"],
    location: "Bebedouro, SP",
    details: [
      `Developed and implemented new features on the old internal web portal.`,
      `Developed a new internal web portal from scratch.`,
      `Helped on the company's database migration from SQL Server to Postgres, rewriting more than 700 SQL queries used by the company systems and spreadsheets.`,
    ],
  },
];
