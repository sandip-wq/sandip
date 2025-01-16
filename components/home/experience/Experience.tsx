import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="r" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "Terabyte Innovations",
    position: "Web Development Intern",
    location: "Berlin, Germany",
    description:
      "Collaborated on designing and developing responsive websites. Assisted with debugging, optimizing, and creating interactive features to improve performance.",
    tech: ["HTML", "CSS", "JavaScript", "Git", "VS Code"],
  },
  {
    title: "Edeka",
    position: "Cashier",
    location: "Berlin, Germany",
    description:
      "Managed cash transactions, ensured accurate billing, and provided excellent customer service in a fast-paced environment.",
    tech: ["Customer Service", "Cash Handling", "POS Systems"],
  },
  {
    title: "ASB Nordwest",
    position: "Refugee Support Volunteer",
    location: "Berlin, Germany",
    description:
      "Accompanied refugees to appointments, helped with documentation, and organized activities to aid in their integration.",
    tech: ["Interpersonal Skills", "Organization", "Community Support"],
  },
];
