import styles from "./Skills.module.css";

export default function Skills({ skills, accentColor }) {
  return (
    <section id="skills" className="section">
      <div className="container">
        <p className="section-label">Technical Stack</p>
        <h2 className="section-title">Skills & Tools</h2>
        <div className={styles.grid}>
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className={`card ${styles.skillCard}`}>
              <h3 className={styles.category} style={{ color: accentColor }}>{category}</h3>
              <div className={styles.pills}>
                {items.map((skill) => (
                  <span key={skill} className={styles.pill} style={{ "--accent": accentColor }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
