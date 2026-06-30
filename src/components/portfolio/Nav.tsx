import { useEffect, useState } from "react";
import { navItems, personalInfo } from "@/data/portfolio-data";

const linkBase: React.CSSProperties = {
  fontFamily: "var(--mono)",
  fontSize: "12.5px",
  letterSpacing: ".02em",
  color: "var(--ink-2)",
  transition: "color .2s ease",
};

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navItems.map((n) => n.id);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <nav
      id="site-nav"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 90,
        display: "flex",
        justifyContent: "center",
        padding: "16px clamp(16px,4vw,40px)",
      }}
    >
      <div
        id="nav-pill"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
          width: "100%",
          maxWidth: 1160,
          background: "rgba(255,255,255,.9)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid var(--line-2)",
          borderRadius: 999,
          padding: "10px 10px 10px 22px",
          boxShadow: scrolled
            ? "0 12px 34px -18px rgba(26,20,48,.55)"
            : "0 6px 22px -16px rgba(26,20,48,.4)",
          transition: "box-shadow .3s ease",
        }}
      >
        <a href="#top" style={{ display: "flex", alignItems: "center", gap: 9 }}>
          <span
            style={{
              width: 11,
              height: 11,
              borderRadius: "50%",
              background: "var(--accent)",
              boxShadow: "0 0 0 4px var(--accent-soft)",
            }}
          />
          <span
            style={{
              fontFamily: "var(--display)",
              fontWeight: 700,
              fontSize: 17,
              letterSpacing: "-.02em",
            }}
          >
            {personalInfo.name}
          </span>
        </a>

        <div
          className="rf-nav-links"
          style={{ display: "flex", alignItems: "center", gap: 28 }}
        >
          {navItems.map((n) => (
            <a
              key={n.id}
              href={n.href}
              className="rf-link-underline"
              data-active={active === n.id}
              style={linkBase}
            >
              {n.label}
            </a>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <a
            data-magnetic
            href="#contact"
            className="rf-contact-btn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "var(--ink)",
              color: "#fff",
              fontFamily: "var(--mono)",
              fontSize: "12.5px",
              fontWeight: 500,
              padding: "12px 20px",
              borderRadius: 999,
              transition: "background .2s ease",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.background = "var(--accent)")
            }
            onMouseOut={(e) => (e.currentTarget.style.background = "var(--ink)")}
          >
            Contact me
          </a>

          {/* Mobile menu toggle */}
          <button
            className="rf-burger"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            style={{
              display: "none",
              alignItems: "center",
              justifyContent: "center",
              width: 42,
              height: 42,
              borderRadius: 999,
              border: "1px solid var(--line-2)",
              background: "#fff",
              cursor: "pointer",
            }}
          >
            <span
              style={{
                position: "relative",
                width: 16,
                height: 2,
                background: "var(--ink)",
                display: "block",
                transition: "transform .25s",
                transform: open ? "rotate(45deg)" : "none",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  top: open ? 0 : -5,
                  width: 16,
                  height: 2,
                  background: "var(--ink)",
                  transition: "top .25s,opacity .2s",
                  opacity: open ? 0 : 1,
                }}
              />
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  top: open ? 0 : 5,
                  width: 16,
                  height: 2,
                  background: "var(--ink)",
                  transition: "top .25s,transform .25s",
                  transform: open ? "rotate(-90deg)" : "none",
                }}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className="rf-mobile-menu"
        data-open={open}
        style={{
          position: "absolute",
          top: 78,
          left: "clamp(16px,4vw,40px)",
          right: "clamp(16px,4vw,40px)",
          background: "rgba(255,255,255,.97)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid var(--line-2)",
          borderRadius: 24,
          padding: open ? "14px" : "0 14px",
          maxHeight: open ? 320 : 0,
          opacity: open ? 1 : 0,
          overflow: "hidden",
          transition: "max-height .35s ease, opacity .25s ease, padding .35s ease",
          boxShadow: "0 18px 40px -24px rgba(26,20,48,.5)",
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}
      >
        {navItems.map((n) => (
          <a
            key={n.id}
            href={n.href}
            onClick={() => setOpen(false)}
            style={{
              fontFamily: "var(--mono)",
              fontSize: 14,
              color: "var(--ink-2)",
              padding: "12px 12px",
              borderRadius: 12,
            }}
          >
            {n.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setOpen(false)}
          style={{
            fontFamily: "var(--mono)",
            fontSize: 14,
            color: "#fff",
            background: "var(--ink)",
            padding: "12px",
            borderRadius: 12,
            textAlign: "center",
            marginTop: 4,
          }}
        >
          Contact me
        </a>
      </div>
    </nav>
  );
};

export default Nav;
