import KpiCards from "./KpiCards";
import styles from "./About.module.css";

export default function About({ summary, kpis, accentColor }) {
  return (
    <section id="about" className="section">
      <div className="container">
        <p className="section-label">Who I Am</p>
        <h2 className="section-title">About</h2>
        <p className={styles.summary}>{summary}</p>
        <KpiCards kpis={kpis} accentColor={accentColor} />
      </div>
    </section>
  );
}
