import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404: route not found:", location.pathname);
  }, [location.pathname]);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--paper)",
        padding: "24px",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: 420 }}>
        <div
          style={{
            fontFamily: "var(--display)",
            fontWeight: 800,
            fontSize: "clamp(96px,20vw,180px)",
            lineHeight: 1,
            letterSpacing: "-.04em",
            color: "var(--accent)",
          }}
        >
          404
        </div>
        <p
          style={{
            fontFamily: "var(--body)",
            fontSize: 18,
            color: "var(--ink-2)",
            margin: "8px 0 28px",
          }}
        >
          This page wandered off. Let's get you back home.
        </p>
        <a
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 9,
            background: "var(--ink)",
            color: "#fff",
            fontFamily: "var(--mono)",
            fontSize: 14,
            padding: "14px 26px",
            borderRadius: 999,
          }}
        >
          Back to home →
        </a>
      </div>
    </div>
  );
};

export default NotFound;
