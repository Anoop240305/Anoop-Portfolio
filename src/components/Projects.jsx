import styles from "./Projects.module.css";

export default function Projects({ projects, accentColor }) {
  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="section-label">What I've Built</p>
        <h2 className="section-title">Projects</h2>
        <div className={styles.grid}>
          {projects.map((project, i) => (
            <div key={i} className={`card ${styles.card}`}>
              <div className={styles.header}>
                <div className={styles.icon} style={{ background: `${accentColor}15`, color: accentColor }}>⬡</div>
                <span className={styles.year}>{project.year}</span>
              </div>
              <h3 className={styles.name}>{project.name}</h3>
              <p className={styles.stack} style={{ color: accentColor }}>{project.stack}</p>
              <ul className={styles.points}>
                {project.points.map((pt, j) => (
                  <li key={j} className={styles.point}>
                    <span className={styles.bullet} style={{ color: accentColor }}>▸</span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
