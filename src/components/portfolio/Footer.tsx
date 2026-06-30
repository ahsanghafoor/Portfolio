import { personalInfo } from "@/data/portfolio-data";

const Footer = () => (
  <footer
    style={{
      position: "relative",
      zIndex: 2,
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 16,
      padding: "40px clamp(20px,5vw,64px)",
      background: "var(--deep)",
      color: "rgba(255,255,255,.5)",
      fontFamily: "var(--mono)",
      fontSize: 12,
      letterSpacing: ".04em",
      borderTop: "1px solid rgba(255,255,255,.12)",
    }}
  >
    <span style={{ display: "inline-flex", alignItems: "center", gap: 9 }}>
      <span style={{ width: 9, height: 9, borderRadius: "50%", background: "var(--lime)" }} />©{" "}
      {new Date().getFullYear()} {personalInfo.name}
    </span>
    <div style={{ display: "flex", flexWrap: "wrap", gap: 22 }}>
      {[
        { label: "GitHub", href: personalInfo.github },
        { label: "LinkedIn", href: personalInfo.linkedin },
      ].map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "rgba(255,255,255,.5)", transition: "color .2s" }}
          onMouseOver={(e) => (e.currentTarget.style.color = "#fff")}
          onMouseOut={(e) => (e.currentTarget.style.color = "rgba(255,255,255,.5)")}
        >
          {s.label}
        </a>
      ))}
    </div>
    <span>Built end to end · Lahore, PK</span>
  </footer>
);

export default Footer;
