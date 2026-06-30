import { personalInfo } from "@/data/portfolio-data";

const Contact = () => {
  return (
    <section
      id="contact"
      style={{
        position: "relative",
        zIndex: 2,
        background: "var(--deep)",
        color: "#fff",
        padding: "clamp(80px,12vw,150px) clamp(20px,5vw,64px)",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: -80,
          left: "50%",
          transform: "translateX(-50%)",
          width: 520,
          height: 520,
          borderRadius: "50%",
          background: "radial-gradient(circle,rgba(108,60,233,.55),transparent 62%)",
          filter: "blur(20px)",
          zIndex: 0,
        }}
      />
      <div style={{ position: "relative", zIndex: 1, maxWidth: 880, margin: "0 auto" }}>
        <div
          data-reveal
          style={{
            fontFamily: "var(--mono)",
            fontSize: 12,
            letterSpacing: ".14em",
            color: "var(--lime)",
            marginBottom: 24,
          }}
        >
          — LET'S TALK
        </div>
        <h2
          data-reveal
          data-reveal-delay="60"
          style={{
            fontFamily: "var(--display)",
            fontWeight: 700,
            fontSize: "clamp(40px,8vw,104px)",
            lineHeight: 0.96,
            letterSpacing: "-.035em",
            margin: "0 0 24px",
            textWrap: "balance",
          }}
        >
          Let's work <span style={{ color: "var(--lime)" }}>together</span>
        </h2>
        <p
          data-reveal
          data-reveal-delay="120"
          style={{
            fontSize: "clamp(16px,1.6vw,19px)",
            lineHeight: 1.6,
            color: "rgba(255,255,255,.72)",
            maxWidth: 560,
            margin: "0 auto 40px",
          }}
        >
          I'm open to full-stack, software engineering, and AI roles, whether
          that's full-time or part-time, on-site or remote. I'm in Lahore,
          Pakistan, and I usually reply within a day.
        </p>

        {/* Primary CTA */}
        <div
          data-reveal
          data-reveal-delay="160"
          style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}
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
              fontSize: 14,
              fontWeight: 500,
              padding: "18px 32px",
              borderRadius: 999,
              boxShadow: "0 14px 32px -12px rgba(108,60,233,.7)",
              transition: "background .2s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = "#8254F0")}
            onMouseOut={(e) => (e.currentTarget.style.background = "var(--accent)")}
          >
            {personalInfo.email} →
          </a>
          <a
            href={personalInfo.resumeUrl}
            download
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              border: "1px solid rgba(255,255,255,.4)",
              fontFamily: "var(--mono)",
              fontSize: 14,
              padding: "18px 28px",
              borderRadius: 999,
              color: "#fff",
              transition: "background .2s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = "rgba(255,255,255,.1)")}
            onMouseOut={(e) => (e.currentTarget.style.background = "transparent")}
          >
            Download résumé ↓
          </a>
        </div>

        <div
          data-reveal
          data-reveal-delay="220"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 14,
            justifyContent: "center",
            marginTop: 48,
          }}
        >
          {[
            { label: "GitHub ↗", href: personalInfo.github },
            { label: "LinkedIn ↗", href: personalInfo.linkedin },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--mono)",
                fontSize: "12.5px",
                padding: "11px 20px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,.2)",
                color: "rgba(255,255,255,.82)",
                transition: "background .2s,color .2s",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "var(--lime)";
                e.currentTarget.style.color = "var(--ink)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "rgba(255,255,255,.82)";
              }}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
