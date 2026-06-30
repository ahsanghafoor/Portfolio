import { aboutParagraphs, aboutTags, personalInfo } from "@/data/portfolio-data";

const tag: React.CSSProperties = {
  fontFamily: "var(--mono)",
  fontSize: "12.5px",
  padding: "9px 15px",
  borderRadius: 999,
  background: "var(--paper-2)",
  color: "var(--ink-2)",
};

const About = () => (
  <section
    id="about"
    style={{
      position: "relative",
      zIndex: 2,
      padding: "clamp(72px,10vw,128px) clamp(20px,5vw,64px)",
      maxWidth: 1160,
      margin: "0 auto",
    }}
  >
    <div
      className="rf-about"
      style={{
        display: "grid",
        gridTemplateColumns: ".85fr 1.15fr",
        gap: "clamp(32px,5vw,72px)",
        alignItems: "center",
      }}
    >
      <div
        data-reveal
        style={{ position: "relative", display: "flex", alignItems: "center", gap: 20 }}
      >
        <div
          className="rf-wm"
          style={{
            fontFamily: "var(--mono)",
            fontSize: 12,
            letterSpacing: ".2em",
            color: "var(--ink-3)",
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
            whiteSpace: "nowrap",
          }}
        >
          AHSAN GHAFOOR · ENGINEER
        </div>
        <div style={{ position: "relative" }}>
          <div
            style={{
              fontFamily: "var(--display)",
              fontWeight: 800,
              fontSize: "clamp(140px,20vw,230px)",
              lineHeight: 0.82,
              letterSpacing: "-.05em",
              color: "var(--accent)",
            }}
          >
            {personalInfo.yearsExperience.replace("+", "")}
            <span style={{ color: "var(--lime)", WebkitTextStroke: "2px var(--accent)" }}>+</span>
          </div>
          <div
            style={{
              fontFamily: "var(--mono)",
              fontSize: 13,
              letterSpacing: ".08em",
              color: "var(--ink-2)",
              marginTop: 6,
            }}
          >
            YEARS BUILDING
            <br />
            REAL PRODUCTS
          </div>
        </div>
      </div>

      <div>
        <div
          data-reveal
          style={{
            fontFamily: "var(--mono)",
            fontSize: 12,
            letterSpacing: ".14em",
            color: "var(--accent)",
            marginBottom: 16,
          }}
        >
          — ABOUT ME
        </div>
        <h2
          data-reveal
          data-reveal-delay="60"
          style={{
            fontFamily: "var(--display)",
            fontWeight: 700,
            fontSize: "clamp(28px,3.8vw,46px)",
            lineHeight: 1.08,
            letterSpacing: "-.03em",
            margin: "0 0 24px",
            textWrap: "balance",
          }}
        >
          Who is <span style={{ color: "var(--accent)" }}>Ahsan</span>?
        </h2>
        {aboutParagraphs.map((p, i) => (
          <p
            key={i}
            data-reveal
            data-reveal-delay={String(120 + i * 50)}
            style={{
              fontSize: 17,
              lineHeight: 1.7,
              color: "var(--ink-2)",
              margin: i === aboutParagraphs.length - 1 ? "0 0 28px" : "0 0 16px",
            }}
          >
            {p}
          </p>
        ))}
        <div
          data-reveal
          data-reveal-delay="220"
          style={{ display: "flex", flexWrap: "wrap", gap: 10 }}
        >
          {aboutTags.map((t) => (
            <span key={t} style={tag}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
