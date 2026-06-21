import styles from "./Experience.module.css";

export default function Experience({ experience }) {
  return (
    <section id="experience" className="section">
      <div className="container">
        <p className="section-label">Work History</p>
        <h2 className="section-title">Experience</h2>
        <div className={styles.timeline}>
          {experience.map((job, i) => (
            <div key={i} className={styles.entry}>
              <div className={styles.dot} />
              <div className={`card ${styles.card}`}>
                <div className={styles.header}>
                  <div>
                    <h3 className={styles.role}>{job.role}</h3>
                    <p className={styles.company}>{job.company}</p>
                  </div>
                  <div className={styles.meta}>
                    <span className={styles.period}>{job.period}</span>
                    <span className={styles.location}>{job.location}</span>
                  </div>
                </div>
                <ul className={styles.points}>
                  {job.points.map((pt, j) => (
                    <li key={j} className={styles.point}>
                      <span className={styles.bullet}>▸</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
