import { personalInfo } from "@/data/portfolio-data";

const chip: React.CSSProperties = {
  fontFamily: "var(--mono)",
  fontSize: "11.5px",
  padding: "6px 12px",
  borderRadius: 999,
  background: "var(--paper-2)",
  color: "var(--ink-2)",
};

const Hero = () => (
  <header id="top" style={{ position: "relative", zIndex: 2, overflow: "hidden" }}>
    <div
      aria-hidden
      style={{
        position: "absolute",
        top: "12%",
        left: -80,
        width: 300,
        height: 300,
        borderRadius: "50%",
        background: "var(--accent-soft)",
        filter: "blur(12px)",
        zIndex: 0,
      }}
    />
    <div
      aria-hidden
      style={{
        position: "absolute",
        bottom: "6%",
        right: "6%",
        width: 220,
        height: 220,
        borderRadius: "50%",
        background: "rgba(201,242,78,.4)",
        filter: "blur(10px)",
        zIndex: 0,
      }}
    />
    <span
      className="rf-wm"
      aria-hidden
      style={{
        position: "absolute",
        bottom: "-6%",
        left: "-1%",
        fontFamily: "var(--display)",
        fontWeight: 800,
        fontSize: "clamp(120px,20vw,300px)",
        lineHeight: 1,
        color: "rgba(108,60,233,.05)",
        letterSpacing: "-.04em",
        whiteSpace: "nowrap",
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      ENGINEER
    </span>

    <div
      className="rf-hero-grid"
      style={{
        position: "relative",
        zIndex: 3,
        minHeight: "100vh",
        maxWidth: 1200,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1.05fr .95fr",
        gap: "clamp(32px,5vw,64px)",
        alignItems: "center",
        padding: "140px clamp(20px,5vw,64px) 64px",
      }}
    >
      {/* LEFT: copy */}
      <div
        className="rf-hero-copy"
        style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}
      >
        <div
          data-reveal
          data-reveal-delay="0"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 9,
            marginBottom: 24,
            padding: "8px 15px",
            border: "1px solid var(--line-2)",
            borderRadius: 999,
            background: "#fff",
            boxShadow: "0 8px 22px -16px rgba(26,20,48,.5)",
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "var(--lime)",
              boxShadow: "0 0 0 4px rgba(201,242,78,.3)",
              animation: "rf-pulse 2.4s infinite",
            }}
          />
          <span
            style={{
              fontFamily: "var(--mono)",
              fontSize: "11.5px",
              color: "var(--ink-2)",
              letterSpacing: ".06em",
            }}
          >
            AVAILABLE NOW · LAHORE, PK
          </span>
        </div>

        <div
          data-reveal
          data-reveal-delay="60"
          style={{
            fontFamily: "var(--mono)",
            fontSize: 13,
            letterSpacing: ".14em",
            color: "var(--accent)",
            marginBottom: 14,
          }}
        >
          — HELLO, I'M
        </div>

        <h1
          data-reveal
          data-reveal-delay="120"
          style={{
            fontFamily: "var(--display)",
            fontWeight: 700,
            fontSize: "clamp(46px,6.6vw,92px)",
            lineHeight: 0.92,
            letterSpacing: "-.04em",
            margin: "0 0 22px",
          }}
        >
          <span style={{ display: "block" }}>{personalInfo.firstName}</span>
          <span style={{ display: "block", color: "var(--accent)", paddingBottom: ".06em" }}>
            {personalInfo.lastName}
          </span>
        </h1>

        <p
          data-reveal
          data-reveal-delay="180"
          style={{
            fontSize: "clamp(16px,1.5vw,19px)",
            lineHeight: 1.6,
            color: "var(--ink-2)",
            maxWidth: "min(440px, 100%)",
            margin: "0 0 18px",
          }}
        >
          {personalInfo.intro}
        </p>

        <div
          data-reveal
          data-reveal-delay="230"
          className="rf-hero-meta"
          style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 32 }}
        >
          {personalInfo.heroTags.map((t) => (
            <span key={t} style={chip}>
              {t}
            </span>
          ))}
        </div>

        <div
          data-reveal
          data-reveal-delay="280"
          className="rf-hero-cta"
          style={{ display: "flex", flexWrap: "wrap", gap: 13, alignItems: "center" }}
        >
          <a
            data-magnetic
            href={`mailto:${personalInfo.email}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              background: "var(--accent)",
              color: "#fff",
              fontFamily: "var(--mono)",
              fontSize: "13.5px",
              fontWeight: 500,
              padding: "15px 26px",
              borderRadius: 999,
              boxShadow: "0 10px 26px -10px rgba(108,60,233,.55)",
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = "var(--accent-2)")}
            onMouseOut={(e) => (e.currentTarget.style.background = "var(--accent)")}
          >
            Email me →
          </a>
          <a
            href={personalInfo.resumeUrl}
            download
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              border: "1px solid var(--ink)",
              fontFamily: "var(--mono)",
              fontSize: "13.5px",
              padding: "15px 24px",
              borderRadius: 999,
              color: "var(--ink)",
              transition: "background .2s,color .2s",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = "var(--ink)";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "var(--ink)";
            }}
          >
            Résumé ↓
          </a>
        </div>
      </div>

      {/* RIGHT: portrait */}
      <div
        data-reveal
        data-reveal-delay="200"
        className="rf-hero-photo"
        style={{ position: "relative", width: "clamp(280px,40vw,420px)", justifySelf: "end" }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: -14,
            borderRadius: "32px 32px 32px 120px",
            background: "var(--lime)",
            zIndex: 0,
          }}
        />
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: "10px -22px -22px 10px",
            border: "1.5px solid var(--accent)",
            borderRadius: "30px 30px 30px 110px",
            zIndex: 1,
          }}
        />
        <div
          className="rf-photo"
          data-tilt
          style={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            aspectRatio: "4/5",
            borderRadius: "28px 28px 28px 108px",
            overflow: "hidden",
            background: "var(--accent)",
            boxShadow: "0 30px 64px -30px rgba(108,60,233,.6)",
          }}
        >
          <img
            src="/images/portrait.webp"
            alt="Ahsan Ghafoor"
            width={420}
            height={525}
            loading="eager"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>

        <div
          className="rf-stat-badge"
          style={{
            position: "absolute",
            zIndex: 3,
            bottom: 18,
            right: -26,
            background: "#fff",
            border: "1px solid var(--line-2)",
            borderRadius: 16,
            padding: "13px 17px",
            boxShadow: "0 14px 30px -16px rgba(26,20,48,.5)",
            textAlign: "left",
          }}
        >
          <div style={{ display: "flex", alignItems: "baseline", gap: 5 }}>
            <span
              style={{
                fontFamily: "var(--display)",
                fontWeight: 800,
                fontSize: 30,
                lineHeight: 1,
                color: "var(--accent)",
              }}
            >
              {personalInfo.yearsExperience}
            </span>
            <span style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--ink-2)" }}>
              yrs
            </span>
          </div>
          <div
            style={{
              fontFamily: "var(--mono)",
              fontSize: 10,
              letterSpacing: ".04em",
              color: "var(--ink-3)",
              marginTop: 2,
            }}
          >
            SHIPPING
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Hero;
