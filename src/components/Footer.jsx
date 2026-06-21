import { profile } from "../data/resumeData";
import styles from "./Footer.module.css";

export default function Footer({ activeTab }) {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.name}>{profile.name}</p>
        <div className={styles.links}>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={`mailto:${profile.email}`}>Email</a>
          <a
            href={activeTab === "software" ? "/Anoop_Hattekar_Resume_v2.pdf" : "/Anoop_Hattekar_Resume_Addverb.pdf"}
            download
          >
            Resume ↓
          </a>
        </div>
        <p className={styles.copy}>© {new Date().getFullYear()} Anoop Hattekar</p>
      </div>
    </footer>
  );
}
