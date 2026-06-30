import { selectedWork, alsoBuilt, type WorkItem } from "@/data/portfolio-data";

const cardVariant: Record<
  WorkItem["variant"],
  { bg: string; numColor: string; badgeColor: string; shadow: string }
> = {
  accent: {
    bg: "linear-gradient(140deg,var(--accent),var(--accent-2))",
    numColor: "rgba(255,255,255,.12)",
    badgeColor: "var(--lime)",
    shadow: "0 24px 50px -28px rgba(108,60,233,.6)",
  },
  ink: {
    bg: "var(--ink)",
    numColor: "rgba(255,255,255,.08)",
    badgeColor: "var(--lime)",
    shadow: "0 24px 50px -30px rgba(26,20,48,.7)",
  },
  deep: {
    bg: "linear-gradient(140deg,#3A2D63,#241A45)",
    numColor: "rgba(255,255,255,.09)",
    badgeColor: "var(--lime)",
    shadow: "0 24px 50px -30px rgba(26,20,48,.6)",
  },
  lime: {
    bg: "var(--lime)",
    numColor: "rgba(26,20,48,.10)",
    badgeColor: "var(--ink)",
    shadow: "0 24px 50px -30px rgba(26,20,48,.4)",
  },
};

const rowTag: React.CSSProperties = {
  fontFamily: "var(--mono)",
  fontSize: "11.5px",
  padding: "6px 12px",
  border: "1px solid var(--line-2)",
  borderRadius: 999,
  color: "var(--ink-2)",
};

const WorkRow = ({ item, reversed, last }: { item: WorkItem; reversed: boolean; last: boolean }) => {
  const v = cardVariant[item.variant];
  return (
    <article
      data-reveal
      className={`rf-row${reversed ? " rf-rev" : ""}`}
      style={{
        borderTop: "1px solid var(--line-2)",
        borderBottom: last ? "1px solid var(--line-2)" : undefined,
        padding: "clamp(32px,4vw,52px) 0",
      }}
    >
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
          <span
            style={{
              fontFamily: "var(--display)",
              fontWeight: 800,
              fontSize: 38,
              color: "var(--accent)",
              lineHeight: 1,
            }}
          >
            {item.num}
          </span>
          <span
            style={{
              fontFamily: "var(--mono)",
              fontSize: "11.5px",
              letterSpacing: ".05em",
              color: "var(--ink-3)",
            }}
          >
            {item.meta}
          </span>
        </div>
        <h3
          style={{
            fontFamily: "var(--display)",
            fontWeight: 700,
            fontSize: "clamp(24px,3vw,34px)",
            letterSpacing: "-.02em",
            margin: "0 0 12px",
          }}
        >
          {item.title}
        </h3>
        <p
          style={{
            fontSize: 16,
            lineHeight: 1.65,
            color: "var(--ink-2)",
            margin: "0 0 18px",
            maxWidth: 440,
          }}
        >
          {item.description}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {item.tags.map((t) => (
            <span key={t} style={rowTag}>
              {t}
            </span>
          ))}
        </div>
      </div>

      <div
        data-tilt
        style={{
          flex: 1,
          minWidth: 0,
          position: "relative",
          height: "clamp(220px,26vw,300px)",
          borderRadius: 24,
          overflow: "hidden",
          background: v.bg,
          display: "flex",
          alignItems: "flex-end",
          padding: 26,
          boxShadow: v.shadow,
        }}
      >
        <span
          aria-hidden
          style={{
            position: "absolute",
            top: -30,
            right: 6,
            fontFamily: "var(--display)",
            fontWeight: 800,
            fontSize: 200,
            color: v.numColor,
            lineHeight: 1,
          }}
        >
          {item.num}
        </span>
        <span
          style={{
            position: "relative",
            fontFamily: "var(--mono)",
            fontSize: 12,
            letterSpacing: ".06em",
            color: v.badgeColor,
          }}
        >
          {item.badge}
        </span>
      </div>
    </article>
  );
};

const Work = () => (
  <section
    id="work"
    style={{
      position: "relative",
      zIndex: 2,
      background: "var(--paper-2)",
      padding: "clamp(72px,10vw,128px) clamp(20px,5vw,64px)",
    }}
  >
    <div style={{ maxWidth: 1160, margin: "0 auto" }}>
      <div data-reveal style={{ textAlign: "center", marginBottom: 56 }}>
        <div
          style={{
            fontFamily: "var(--mono)",
            fontSize: 12,
            letterSpacing: ".14em",
            color: "var(--accent)",
            marginBottom: 14,
          }}
        >
          — SELECTED WORK
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
          Things I've <span style={{ color: "var(--accent)" }}>shipped</span>
        </h2>
      </div>

      {selectedWork.map((item, i) => (
        <WorkRow
          key={item.num}
          item={item}
          reversed={i % 2 === 1}
          last={i === selectedWork.length - 1}
        />
      ))}

      {/* ALSO BUILT */}
      <div data-reveal style={{ marginTop: 44 }}>
        <div
          style={{
            fontFamily: "var(--mono)",
            fontSize: "11.5px",
            letterSpacing: ".08em",
            color: "var(--ink-3)",
            marginBottom: 18,
          }}
        >
          ALSO BUILT
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: 14,
          }}
        >
          {alsoBuilt.map((p) => {
            const inner = (
              <>
                <div
                  style={{
                    fontFamily: "var(--display)",
                    fontWeight: 600,
                    fontSize: 18,
                    marginBottom: 6,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  {p.title}
                  {p.href && <span style={{ color: "var(--accent)" }}>↗</span>}
                </div>
                <p style={{ fontSize: "13.5px", lineHeight: 1.55, color: "var(--ink-2)", margin: 0 }}>
                  {p.description}
                  {p.href && " Live ↗"}
                </p>
              </>
            );
            const base: React.CSSProperties = {
              border: "1px solid var(--line-2)",
              borderRadius: 16,
              padding: 22,
              background: "#fff",
            };
            return p.href ? (
              <a
                key={p.title}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ ...base, display: "block", transition: "border-color .2s,transform .2s" }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = "var(--line-2)";
                  e.currentTarget.style.transform = "none";
                }}
              >
                {inner}
              </a>
            ) : (
              <div key={p.title} style={base}>
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default Work;
