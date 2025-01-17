import styles from "./projectmodal.module.scss";
import { JSX, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Link from "next/link";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import Image from 'next/image';

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  title: string;
  imgSrc: string;
  code: string;
  projectLink: string;
  tech: string[];
  modalContent: JSX.Element;
}

export const ProjectModal = ({
  modalContent,
  projectLink,
  setIsOpen,
  imgSrc,
  isOpen,
  title,
  code,
  tech,
}: Props) => {
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");

    if (isOpen) {
      body!.style.overflowY = "hidden";
      setIsRendered(true);
    } else {
      body!.style.overflowY = "scroll";
      setTimeout(() => setIsRendered(false), 300); // Match this with your CSS transition time
    }
  }, [isOpen]);

  const content = (
    <div 
      className={`${styles.modal} ${isOpen ? styles.open : ''}`} 
      onClick={() => setIsOpen(false)}
    >
      <button className={styles.closeModalBtn}>
        <MdClose />
      </button>

      <div
        onClick={(e: React.MouseEvent) => e.stopPropagation()}
        className={`${styles.modalCard} ${isOpen ? styles.open : ''}`}
      >
        <Image
          className={styles.modalImage}
          src={imgSrc || "/placeholder.svg"}
          alt={`An image of the ${title} project.`}
          layout="intrinsic"
          width={500}
          height={300}
        />
        <div className={styles.modalContent}>
          <h4>{title}</h4>
          <div className={styles.modalTech}>{tech.join(" - ")}</div>

          <div className={styles.suppliedContent}>{modalContent}</div>

          <div className={styles.modalFooter}>
            <p className={styles.linksText}>
              Project Links<span>.</span>
            </p>
            <div className={styles.links}>
              <Link target="_blank" rel="nofollow" href={code}>
                <AiFillGithub /> source code
              </Link>
              <Link target="_blank" rel="nofollow" href={projectLink}>
                <AiOutlineExport /> live project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (!isRendered) return null;

  return ReactDOM.createPortal(content, document.getElementById("root")!);
};