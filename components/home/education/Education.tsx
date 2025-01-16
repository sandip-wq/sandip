import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./education.module.scss";

export const Education = () => {
  return (
    <section id="education" className="section-wrapper">
      <SectionHeader title="Education" dir="r" />
      <div className={styles.education}>
        {[
          {
            title: "International Media Informatics",
            subtitle: "HTW Berlin",
            dates: "April 2023 - Present",
          },
          {
            title: "Studienkolleg, T-Kurs",
            subtitle: "TU Berlin",
            dates: "2022 - 2023",
          },
          {
            title: "Learnt German",
            subtitle: "Volkshochschule Landkreis Goslar",
            dates: "2020 - 2021",
          },
          {
            title: "High School",
            subtitle: "ST. Xavier’s College, Kathmandu, Nepal",
            dates: "2017 - 2019",
          },
        ].map((edu, index) => (
          <Reveal key={index}>
            <div className={styles.educationItem}>
              <h3>{edu.title}</h3>
              <div className={styles.subtitleWrapper}>
                <span className={styles.circle}></span>
                <span className={styles.subtitle}>{edu.subtitle}</span>
              </div>
              <span className={styles.dates}>{edu.dates}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};
