import styles from "./stats.module.scss";
import { AiFillCode, AiFillSmile } from "react-icons/ai";
import { Reveal } from "@/components/utils/Reveal";

export const Stats = () => {
  return (
    <div className={styles.stats}>
  <Reveal>
    <div className={styles.statColumn}>
      <h4>
        <AiFillCode size="2.4rem" color="var(--brand)" />
        <span>Use For Work</span>
      </h4>
      <div className={styles.statGrid}>
        <span className="chip">Next.js</span>
        <span className="chip">React</span>
        <span className="chip">HTML</span>
        <span className="chip">CSS</span>
        <span className="chip">SCSS</span>
        <span className="chip">JavaScript</span>
        <span className="chip">Java</span>
        <span className="chip">Git & GitHub</span>
        <span className="chip">WordPress</span>
        <span className="chip">Elementor</span>
        <span className="chip">WooCommerce</span>
        <span className="chip">SEO Tools</span>
        <span className="chip">Figma</span>
        <span className="chip">Framer</span>
        <span className="chip">VS Code</span>
        <span className="chip">IntelliJ IDEA</span>
        <span className="chip">PostgreSQL</span>
        <span className="chip">Notion</span>
      </div>
    </div>
  </Reveal>
      <Reveal>
      <div className={styles.statColumn}>
      <h4>
        <AiFillSmile size="2.4rem" color="var(--brand)" />
        <span>Use for Fun</span>
      </h4>
      <div className={styles.statGrid}>
        <span className="chip">Maya</span>
        <span className="chip">Lightroom</span>
        <span className="chip">ImageJ</span>
        <span className="chip">OpenGL</span>
        <span className="chip">Cursor</span>
        <span className="chip">ChatGPT</span>
        <span className="chip">Claude</span>
        <span className="chip">Framer</span>
        <span className="chip">Shadcn</span>
        <span className="chip">Postman</span>
      </div>
    </div>
  </Reveal>
</div>

  );
};
