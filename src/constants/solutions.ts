import { solutionsIcons } from "@assets/solutions-icons";
import { SolutionCardType } from "@types";

export const solutionsCards: SolutionCardType[] = [
  {
    id: "data-integration",
    icon: solutionsIcons.book,
    title: "Data integration",
    description:
      "Extract, transform, load (ETL) or extract, load, transform (ELT); data governance (security, availability, quality) implementation.",
  },
  {
    id: "data-integration2",
    icon: solutionsIcons.calendar,
    title: "Data integration",
    description:
      "Data preparation and management; machine learning (ML); designing and implanting artificial intelligence (AI) solutions.",
  },
  {
    id: "big-data",
    icon: solutionsIcons.clipboard,
    title: "Big data",
    description:
      "Big data infrastructure setup and support.; big data quality and security management; big data capture, analysis and reporting.",
  },
  {
    id: "data-warehousing",
    icon: solutionsIcons.database,
    title: "Data warehousing",
    description:
      "The process of constructing and using a data warehouse. Data warehouse and data marts design and implementation.",
  },
  {
    id: "self-service-bi",
    icon: solutionsIcons.whisker,
    title: "Self-service BI",
    description:
      "Business intelligence; data analytics infrastructure design and implementation; scheduled analytics querying and reporting.",
  },
  {
    id: "data-visualization",
    icon: solutionsIcons.pie,
    title: "Data visualization",
    description:
      "Interactive dashboarding; custom and pre-built visuals; multiple visualization techniques (symbol maps, line charts, pie charts...)",
  },
];
