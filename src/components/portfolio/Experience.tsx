import { experiences, education, personalInfo } from "@/data/portfolio-data";

const Experience = () => (
  <section
    id="experience"
    style={{
      position: "relative",
      zIndex: 2,
      padding: "clamp(72px,10vw,128px) clamp(20px,5vw,64px)",
      maxWidth: 1160,
      margin: "0 auto",
    }}
  >
    <div data-reveal style={{ textAlign: "center", marginBottom: 52 }}>
      <div
        style={{
          fontFamily: "var(--mono)",
          fontSize: 12,
          letterSpacing: ".14em",
          color: "var(--accent)",
          marginBottom: 14,
        }}
      >
        — THE JOURNEY
      </div>
      <h2
        style={{
          fontFamily: "var(--display)",
          fontWeight: 700,
          fontSize: "clamp(32px,5vw,60px)",
          letterSpacing: "-.03em",
          margin: 0,
          textWrap: "balance",
        }}
      >
        Experience &amp; <span style={{ color: "var(--accent)" }}>education</span>
      </h2>
    </div>

    <div
      className="rf-two-col"
      style={{
        display: "grid",
        gridTemplateColumns: "1.15fr .85fr",
        gap: "clamp(28px,4vw,56px)",
        alignItems: "start",
      }}
    >
      {/* WORK */}
      <div data-reveal>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
          <span
            style={{
              width: 38,
              height: 38,
              borderRadius: 11,
              background: "var(--accent)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "var(--display)",
              fontWeight: 700,
              color: "#fff",
              fontSize: 16,
            }}
          >
            W
          </span>
          <h3 style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: 22, margin: 0 }}>
            Work experience
          </h3>
        </div>
        <div style={{ borderRadius: 18, border: "1px solid var(--line-2)", overflow: "hidden" }}>
          {experiences.map((exp, i) => (
            <div
              key={exp.company + exp.duration}
              style={{
                padding: "22px 24px",
                background: i === 0 ? "var(--paper-2)" : undefined,
                borderTop: i === 0 ? undefined : "1px solid var(--line-2)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  gap: 12,
                  flexWrap: "wrap",
                }}
              >
                <h4 style={{ fontFamily: "var(--display)", fontWeight: 600, fontSize: 18, margin: 0 }}>
                  {exp.role}
                </h4>
                <span
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "11.5px",
                    color: exp.current ? "var(--accent)" : "var(--ink-3)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {exp.duration}
                </span>
              </div>
              <div
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "12.5px",
                  color: "var(--ink-3)",
                  margin: "4px 0 10px",
                }}
              >
                {exp.company}
              </div>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--ink-2)", margin: 0 }}>
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* EDUCATION */}
      <div data-reveal data-reveal-delay="100">
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
          <span
            style={{
              width: 38,
              height: 38,
              borderRadius: 11,
              background: "var(--lime)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "var(--display)",
              fontWeight: 700,
              color: "var(--ink)",
              fontSize: 16,
            }}
          >
            E
          </span>
          <h3 style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: 22, margin: 0 }}>
            Education
          </h3>
        </div>
        <div style={{ borderRadius: 18, border: "1px solid var(--line-2)", overflow: "hidden" }}>
          {education.map((edu, i) => (
            <div
              key={edu.institution}
              style={{
                padding: "22px 24px",
                background: i === 0 ? "var(--paper-2)" : undefined,
                borderTop: i === 0 ? undefined : "1px solid var(--line-2)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  gap: 12,
                  flexWrap: "wrap",
                }}
              >
                <h4 style={{ fontFamily: "var(--display)", fontWeight: 600, fontSize: 17, margin: 0 }}>
                  {edu.degree}
                </h4>
                <span
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "11.5px",
                    color: "var(--ink-3)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {edu.duration}
                </span>
              </div>
              <div
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "12.5px",
                  color: "var(--ink-3)",
                  marginTop: 4,
                }}
              >
                {edu.institution}
              </div>
            </div>
          ))}
        </div>

        <a
          href={personalInfo.resumeUrl}
          download
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 14,
            padding: "18px 22px",
            borderRadius: 16,
            background: "var(--ink)",
            color: "#fff",
            transition: "background .2s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.background = "var(--accent)")}
          onMouseOut={(e) => (e.currentTarget.style.background = "var(--ink)")}
        >
          <span style={{ fontFamily: "var(--display)", fontWeight: 600, fontSize: 16 }}>
            Download résumé
          </span>
          <span style={{ fontFamily: "var(--mono)", fontSize: 18 }}>↓</span>
        </a>
      </div>
    </div>
  </section>
);

export default Experience;
