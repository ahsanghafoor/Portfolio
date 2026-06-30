import { tickerItems } from "@/data/portfolio-data";

const Row = ({ hidden }: { hidden?: boolean }) => (
  <span
    aria-hidden={hidden}
    style={{
      fontFamily: "var(--display)",
      fontWeight: 600,
      fontSize: 17,
      color: "var(--ink)",
      paddingRight: 0,
    }}
  >
    {tickerItems.map((item, i) => (
      <span key={i}>
        {item}
        <span style={{ padding: "0 26px" }}>★</span>
      </span>
    ))}
  </span>
);

const Marquee = () => (
  <div
    style={{
      position: "relative",
      zIndex: 2,
      background: "var(--lime)",
      borderTop: "2px solid var(--ink)",
      borderBottom: "2px solid var(--ink)",
      overflow: "hidden",
      whiteSpace: "nowrap",
      padding: "16px 0",
    }}
  >
    <div className="rf-marquee-track">
      <Row />
      <Row hidden />
    </div>
  </div>
);

export default Marquee;
