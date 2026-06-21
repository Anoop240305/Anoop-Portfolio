import { useEffect, useRef, useState } from "react";
import styles from "./KpiCards.module.css";

export default function KpiCards({ kpis, accentColor }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={styles.grid}>
      {kpis.map((kpi, i) => (
        <div
          key={i}
          className={`${styles.card} ${visible ? styles.visible : ""}`}
          style={{ animationDelay: `${i * 0.1}s`, "--accent": accentColor }}
        >
          <span className={styles.emoji}>{kpi.icon}</span>
          <span className={styles.value} style={{ color: accentColor }}>{kpi.value}</span>
          <span className={styles.label}>{kpi.label}</span>
        </div>
      ))}
    </div>
  );
}
