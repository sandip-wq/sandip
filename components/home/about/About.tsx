import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              Hey! I&apos;m Sandip, a Media Informatics student at HTW Berlin
              with a passion for web development and programming. I specialize
              in front-end development using HTML, CSS, and JavaScript, and
              I&apos;m diving deeper into Java and modern frameworks like React and NextJS.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I&apos;ve worked on projects like creating responsive educational
              websites, building career-focused applications, and collaborating
              on team projects that combine innovative technologies. I&apos;m
              currently part of a team building a career website for
              Berlin&apos;s fire department using Next.js and TailwindCSS.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              Outside of coding, I enjoy volunteering and giving back to the
              community. Recently, I worked with refugees, helping them navigate
              their new environment and organize activities. These experiences
              taught me the value of teamwork and empathy.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I&apos;m always eager to learn and take on new challenges. If
              you&apos;re looking for a web developer who&apos;s passionate
              about creating efficient and engaging digital experiences,
              let&apos;s connect 🔗
            </p>
          </Reveal>

          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
