import { useEffect, useState } from "react";
import styles from "./sidebar.module.scss";

export const SideBar = () => {
  const [selected, setSelected] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll(".section-wrapper");

    const options = {
      threshold: 0.3,
    };

    const callback = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          setSelected(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    sections.forEach((section) => observer.observe(section));
  }, []);

  return (
    <nav className={styles.sideBar}>
      <span className={styles.logo}>
        SS<span>.</span>
      </span>
      <a
        href="#about"
        onClick={() => {
          setSelected("about");
        }}
        className={selected === "about" ? styles.selected : ""}
      >
        About
      </a>
      <a
        href="#education"
        onClick={() => setSelected("education")}
        className={selected === "education" ? styles.selected : ""}
      >
        Education
      </a>
      <a
        href="#projects"
        onClick={() => setSelected("projects")}
        className={selected === "projects" ? styles.selected : ""}
      >
        Projects
      </a>
      <a
        href="#experience"
        onClick={() => setSelected("experience")}
        className={selected === "experience" ? styles.selected : ""}
      >
        Exp.
      </a>
      <a
        href="#contact"
        onClick={() => setSelected("contact")}
        className={selected === "contact" ? styles.selected : ""}
      >
        Contact
      </a>
    </nav>
  );
};

