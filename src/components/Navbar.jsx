import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const NAV_ITEMS = [
  { id: "about", label: "About", icon: "⊙" },
  { id: "skills", label: "Skills", icon: "⌬" },
  { id: "experience", label: "Experience", icon: "◈" },
  { id: "projects", label: "Projects", icon: "⬡" },
  { id: "achievements", label: "Awards", icon: "✦" },
  { id: "education", label: "Education", icon: "◻" },
];

export default function Navbar({ activeTab, onTabChange }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <div className={styles.logo} onClick={() => scrollTo("hero")}>
          <span className={styles.logoText}>AH</span>
          <span className={styles.logoDot} />
        </div>

        <div className={styles.tabs}>
          <button
            className={`${styles.tabBtn} ${activeTab === "software" ? styles.active : ""}`}
            onClick={() => onTabChange("software")}
          >
            <span className={styles.tabIcon}>⌨</span> Software
          </button>
          <button
            className={`${styles.tabBtn} ${activeTab === "embedded" ? styles.active : ""}`}
            onClick={() => onTabChange("embedded")}
          >
            <span className={styles.tabIcon}>⚙</span> Embedded
          </button>
        </div>

        <ul className={`${styles.links} ${menuOpen ? styles.open : ""}`}>
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button className={styles.link} onClick={() => scrollTo(item.id)}>
                <span className={styles.icon}>{item.icon}</span>
                <span className={styles.linkLabel}>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>

        <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
          <span className={menuOpen ? styles.barOpen : styles.bar} />
          <span className={menuOpen ? styles.barMid : styles.bar} />
          <span className={menuOpen ? styles.barOpen : styles.bar} />
        </button>
      </div>
    </nav>
  );
}
