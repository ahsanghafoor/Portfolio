const CursorGlow = () => (
  <div
    id="cursor-glow"
    aria-hidden
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: 460,
      height: 460,
      margin: "-230px 0 0 -230px",
      borderRadius: "50%",
      background:
        "radial-gradient(circle, rgba(108,60,233,.12), transparent 65%)",
      pointerEvents: "none",
      zIndex: 1,
      mixBlendMode: "multiply",
      willChange: "transform",
    }}
  />
);

export default CursorGlow;
