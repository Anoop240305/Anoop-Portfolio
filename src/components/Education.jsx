import styles from "./Education.module.css";
import { education } from "../data/resumeData";

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <p className="section-label">Academic Background</p>
        <h2 className="section-title">Education</h2>
        <div className={styles.grid}>
          <div className={`card ${styles.card}`}>
            <div className={styles.icon}>🎓</div>
            <div>
              <h3 className={styles.degree}>{education.degree}</h3>
              <p className={styles.institution}>{education.institution}</p>
              <div className={styles.meta}>
                <span className={styles.badge}>CGPA {education.cgpa}</span>
                <span className={styles.period}>{education.expected}</span>
              </div>
            </div>
          </div>
          <div className={`card ${styles.card}`}>
            <div className={styles.icon}>📘</div>
            <div>
              <h3 className={styles.degree}>Higher Secondary Certificate (HSC)</h3>
              <p className={styles.institution}>{education.hsc.institution}</p>
              <div className={styles.meta}>
                <span className={styles.badge}>{education.hsc.score}</span>
                <span className={styles.period}>{education.hsc.year}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
