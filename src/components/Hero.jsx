import { useEffect, useState } from "react";
import { profile } from "../data/resumeData";
import styles from "./Hero.module.css";

const ROLES_SOFTWARE = ["Full Stack Engineer", "Django Backend Dev", "React Frontend Dev", "API Architect"];
const ROLES_EMBEDDED = ["Embedded Systems Dev", "Firmware Engineer", "ESP32 & STM32 Dev", "Hardware-SW Integrator"];

export default function Hero({ activeTab }) {
  const roles = activeTab === "software" ? ROLES_SOFTWARE : ROLES_EMBEDDED;
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    setDisplayed("");
    setRoleIdx(0);
    setTyping(true);
  }, [activeTab]);

  useEffect(() => {
    const role = roles[roleIdx];
    if (typing) {
      if (displayed.length < role.length) {
        const t = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 50);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1600);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 28);
        return () => clearTimeout(t);
      } else {
        setRoleIdx((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIdx, roles]);

  const accentColor = activeTab === "software" ? "var(--accent-cyan)" : "var(--accent-green)";

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.grid} />
      <div className={styles.blob} style={{ background: activeTab === "software" ? "rgba(79,142,247,0.08)" : "rgba(0,229,160,0.07)" }} />

      <div className={`container ${styles.content}`}>
        <div className={styles.badge} style={{ borderColor: accentColor, color: accentColor }}>
          {activeTab === "software" ? "⌨ Software & Full Stack" : "⚙ Embedded & Firmware"}
        </div>

        <h1 className={styles.name}>{profile.name}</h1>

        <div className={styles.typeRow}>
          <span className={styles.typeText} style={{ color: accentColor }}>{displayed}</span>
          <span className={styles.cursor} style={{ background: accentColor }} />
        </div>

        <p className={styles.location}>
          <span className={styles.dot} style={{ background: accentColor }} />
          {profile.location}
        </p>

        <div className={styles.actions}>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className={styles.btnPrimary} style={{ background: accentColor }}>
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className={styles.btnSecondary}>
            GitHub
          </a>
          <a
            href={activeTab === "software" ? "/Anoop_Hattekar_Resume_v2.pdf" : "/Anoop_Hattekar_Resume_Addverb.pdf"}
            download
            className={styles.btnOutline}
            style={{ borderColor: accentColor, color: accentColor }}
          >
            ↓ Download Resume
          </a>
        </div>

        <div className={styles.contactRow}>
          <span className={styles.contactItem}>✉ {profile.email}</span>
          <span className={styles.contactItem}>📞 {profile.phone}</span>
        </div>
      </div>
    </section>
  );
}
