import { toolkit } from "@/data/portfolio-data";

const pill: React.CSSProperties = {
  fontFamily: "var(--mono)",
  fontSize: "12.5px",
  padding: "6px 12px",
  border: "1px solid rgba(255,255,255,.25)",
  borderRadius: 999,
  color: "#fff",
};

const Toolkit = () => (
  <section
    style={{
      position: "relative",
      zIndex: 2,
      background: "var(--accent)",
      padding: "clamp(72px,9vw,120px) clamp(20px,5vw,64px)",
    }}
  >
    <div style={{ maxWidth: 1160, margin: "0 auto" }}>
      <div data-reveal style={{ marginBottom: 48 }}>
        <div
          style={{
            fontFamily: "var(--mono)",
            fontSize: 12,
            letterSpacing: ".14em",
            color: "var(--lime)",
            marginBottom: 14,
          }}
        >
          — WHAT I WORK WITH
        </div>
        <h2
          style={{
            fontFamily: "var(--display)",
            fontWeight: 700,
            fontSize: "clamp(30px,4.4vw,52px)",
            letterSpacing: "-.03em",
            color: "#fff",
            margin: "0 0 16px",
          }}
        >
          My toolkit
        </h2>
        <p
          style={{
            fontFamily: "var(--body)",
            fontSize: 16,
            lineHeight: 1.6,
            color: "rgba(255,255,255,.78)",
            maxWidth: 520,
            margin: 0,
          }}
        >
          Comfortable across the whole stack, from the interface a user taps to the
          cloud services running behind it.
        </p>
      </div>

      <div
        className="rf-tiles"
        style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 18 }}
      >
        {toolkit.map((group, i) => (
          <div
            key={group.title}
            data-reveal
            data-reveal-delay={i % 2 === 0 ? "0" : "80"}
            data-tilt
            style={{
              borderRadius: 22,
              background: "rgba(255,255,255,.07)",
              border: "1px solid rgba(255,255,255,.16)",
              padding: 30,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
              <span
                style={{
                  fontFamily: "var(--display)",
                  fontWeight: 700,
                  fontSize: 20,
                  color: "var(--ink)",
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: "var(--lime)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {group.num}
              </span>
              <h3
                style={{
                  fontFamily: "var(--display)",
                  fontWeight: 600,
                  fontSize: 21,
                  color: "#fff",
                  margin: 0,
                }}
              >
                {group.title}
              </h3>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {group.items.map((item) => (
                <span key={item} style={pill}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Toolkit;
