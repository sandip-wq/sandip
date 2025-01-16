import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="l" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "NextJS Portfolio",
    imgSrc: "project-imgs/port6.png",
    code: "https://www.github.com",
    projectLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tech: ["NextJS", "React", "Typescript", "Scss", "Git", "Framer Motion"],
    description:
      "A sleek and interactive developer portfolio showcasing my skills and projects. Built with modern technologies like Next.js and Framer Motion.",
    modalContent: (
      <>
        <p>
          This developer portfolio is a dynamic and responsive application
          showcasing my projects, skills, and experience. It's designed to leave
          a strong impression while maintaining a clean and professional look.
        </p>
        <p>
          The tech stack leverages Next.js for server-side rendering and React
          for dynamic front-end components. TypeScript ensures type safety,
          while SCSS enables custom styling. Animations and transitions are
          powered by Framer Motion, adding a polished, interactive feel.
        </p>
        <p>
          Through this project, I gained valuable experience in building
          production-ready React applications, integrating animations, and
          organizing scalable codebases using TypeScript and SCSS.
        </p>
        <p>
          This portfolio not only serves as a demonstration of my technical
          abilities but also as a living document that grows with my skills and
          achievements.
        </p>
      </>
    ),
  },
  {
    title: "Helm Sucht Kopf",
    imgSrc: "project-imgs/helm.png",
    code: ".",
    projectLink: ".",
    tech: ["NextJS", "React", "Typescript", "TailwindCss", "GitLab", "CSS"],
    description: 
  "A collaborative project with university mates to develop a career page for Berlin's Firedepartment, featuring interactive elements like a video, quiz, chatbot, and job filters. Built using Next.js, React, TypeScript, TailwindCSS, and GitLab.",
modalContent: (
  <>
    <p>
      This project was a collaborative effort with 6 other university mates to design and develop a career page for Berlin's Firedepartment, focusing on engaging and attracting the younger generation to explore Ausbildung opportunities.
    </p>
    <p>
      Key features of the website include:
      <ul>
        <li>
          <b>Interactive Video:</b> A dynamic video section providing insights into the life and career opportunities within Berlin's Firedepartment.
        </li>
        <li>
          <b>Interactive Quiz:</b> A fun and educational quiz that guides users to the type of Ausbildung they are most suited for, based on their responses.
        </li>
        <li>
          <b>Interactive Chatbot:</b> A chatbot powered by tailored responses that engage users by answering frequently asked questions and assisting them throughout the application process.
        </li>
        <li>
          <b>Job Page with Filters:</b> A job listing page featuring filters for location, role type, and other relevant criteria to make it easier for users to find the right Ausbildung opportunity.
        </li>
        <li>
          <b>Well-Designed Home Page:</b> A visually appealing and responsive home page with intuitive navigation to ensure a seamless user experience.
        </li>
      </ul>
    </p>
    <p>
      The website was developed using:
      <ul>
        <li><b>Next.js:</b> For building a server-side rendered and highly scalable web application.</li>
        <li><b>React:</b> For building interactive user interfaces and reusable components.</li>
        <li><b>TypeScript:</b> Ensuring type safety and robust code structure.</li>
        <li><b>TailwindCSS:</b> For rapid styling and maintaining a consistent, modern design.</li>
        <li><b>GitLab:</b> For version control and collaborative development.</li>
      </ul>
    </p>
    <p>
      This project reflects our collaborative efforts in creating a comprehensive platform that aligns with the vision of Berlin's Firedepartment while enhancing user engagement and accessibility.
    </p>
  </>
),

  },
  {
    title: "EduSphare",
    imgSrc: "project-imgs/EduSphare.png",
    code: "https://github.com/sandip-wq/Edusphare",
    projectLink: "https://sandip-wq.github.io/Edusphare/",
    tech: ["Javascript", "HTML", "CSS"],
    description:
      "An educational website designed for learning, showcasing courses, categories, and testimonials. Built with HTML, CSS, and JavaScript.",
    modalContent: (
      <>
        <p>
          EduSphare is a fully responsive educational website designed to
          provide users with a seamless experience of exploring courses and
          learning resources. The website features a user-friendly layout,
          intuitive navigation, and multiple sections such as categories,
          courses, FAQs, and testimonials.
        </p>
        <p>
          The website is built with a clean and maintainable codebase using
          HTML, CSS, and JavaScript. It incorporates interactive elements,
          animations, and an engaging user interface to ensure an enjoyable
          experience for users.
        </p>
        <p>
          Highlights include:
          <ul>
            <li>Responsive design ensuring compatibility across devices.</li>
            <li>
              Interactive FAQ and testimonial sections powered by Swiper.js.
            </li>
            <li>
              Modern styling using Font Awesome icons and Google Fonts
              (Montserrat).
            </li>
            <li>Dynamic course listings and category highlights.</li>
          </ul>
        </p>
        <p>
          This project demonstrates my ability to design and develop web
          applications with attention to detail and usability. It's a step
          towards enhancing the accessibility of learning resources for users
          worldwide.
        </p>
      </>
    ),
  },
  {
    title: "ProficientPulse",
    imgSrc: "project-imgs/proficientPulse.png",
    code: "https://github.com/sandip-wq/ProficientPulse",
    projectLink: "https://sandip-wq.github.io/ProficientPulse/",
    tech: ["Javascript", "HTML", "CSS"],
    description:
      "A professional business website designed to showcase services, provide information, and engage users. Built with HTML, CSS, and JavaScript.",
    modalContent: (
      <>
        <p>
          ProficientPulse is a fully responsive business website aimed at
          delivering a seamless experience for visitors exploring services and
          company information. It features a visually appealing layout,
          intuitive navigation, and multiple sections including services, about,
          contact, and newsletter subscription.
        </p>
        <p>
          The website is crafted with a clean and maintainable codebase using
          HTML, CSS, and JavaScript. It incorporates interactive elements,
          modern animations, and an engaging design to ensure an optimal user
          experience.
        </p>
        <p>
          Highlights include:
          <ul>
            <li>
              Responsive design ensuring compatibility across various devices.
            </li>
            <li>Interactive service cards and call-to-action buttons.</li>
            <li>Modern styling using Boxicons and Google Fonts.</li>
            <li>
              Sections for newsletter subscription, social media links, and
              FAQs.
            </li>
          </ul>
        </p>
        <p>
          This project demonstrates my ability to create visually appealing and
          functional websites, focusing on usability and engagement. It's a
          versatile platform tailored to enhance a company's online presence.
        </p>
      </>
    ),
  },
  {
    title: "WordPress & Elementor",
    imgSrc: "project-imgs/wordpress2.jpg",
    code: "https://www.github.com",
    projectLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tech: [
      "WordPress",
      "Elementor",
      "WooCommerce",
      "SEO Plugins",
      "CSS",
      "HTML",
      "JavaScript",
    ],
    description:
      "A collection of professional websites designed and developed using WordPress, Elementor, WooCommerce, and SEO plugins. These projects showcase versatility and expertise in building industry-specific websites.",
    modalContent: (
      <>
        <p>
          During my WordPress learning journey, I created multiple professional
          websites catering to diverse industries. Each project was designed
          with attention to functionality, user experience, and modern design
          trends. These include:
        </p>
        <p>
          <ul>
            <li>
              <b>Pharmaceutical Company Website:</b> A clean, informative, and
              professional website highlighting services, products, and company
              achievements. SEO-optimized for improved visibility.
            </li>
            <li>
              <b>Electronics Store:</b> An e-commerce platform built with
              WooCommerce, featuring product categories, filters, and a seamless
              checkout experience.
            </li>
            <li>
              <b>Korean Restaurant:</b> A visually appealing website showcasing
              the restaurant's menu, ambiance, and customer reviews, designed
              with Elementor for customization and interactivity.
            </li>
          </ul>
        </p>
        <p>
          Technologies and tools used include:
          <ul>
            <li>
              <b>WordPress:</b> For content management and website creation.
            </li>
            <li>
              <b>Elementor:</b> For designing responsive and visually dynamic
              pages.
            </li>
            <li>
              <b>WooCommerce:</b> For e-commerce functionalities in the
              electronics store.
            </li>
            <li>
              <b>SEO Plugins:</b> To optimize content for better search engine
              rankings.
            </li>
            <li>
              <b>HTML & CSS:</b> For additional customization and styling.
            </li>
          </ul>
        </p>
        <p>
          These projects demonstrate my ability to deliver tailored solutions
          for businesses across various domains, focusing on design,
          functionality, and performance.
        </p>
      </>
    ),
  },
];
