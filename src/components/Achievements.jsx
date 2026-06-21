import styles from "./Achievements.module.css";
import { achievements } from "../data/resumeData";

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container">
        <p className="section-label">Recognition</p>
        <h2 className="section-title">Achievements</h2>
        <div className={styles.grid}>
          {achievements.map((a, i) => (
            <div key={i} className={`card ${styles.card}`}>
              <span className={styles.icon}>{a.icon}</span>
              <div>
                <div className={styles.titleRow}>
                  <h3 className={styles.title}>{a.title}</h3>
                  <span className={styles.year}>{a.year}</span>
                </div>
                <p className={styles.detail}>{a.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
