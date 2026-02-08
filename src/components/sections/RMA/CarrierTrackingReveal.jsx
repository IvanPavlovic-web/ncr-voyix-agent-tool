import { useState, useRef } from "react";

const CARRIERS = [
  {
    label: "FedEx",
    tag: "Tracking",
    img: "/ncr-voyix-agent-tool/Images/fed.webp",
    url: "https://www.fedex.com/fedextrack/",
  },
  {
    label: "UPS",
    tag: "Tracking",
    img: "/ncr-voyix-agent-tool/Images/ups.webp",
    url: "https://www.ups.com/track",
  },
  {
    label: "DHL",
    tag: "Tracking",
    img: "/ncr-voyix-agent-tool/Images/dhl.webp",
    url: "https://www.dhl.com/global-en/home/tracking.html",
  },
];

function CarrierTrackingReveal() {
  const [active, setActive] = useState(null);
  const imageRef = useRef(null);
  const containerRef = useRef(null);

  const handleMove = (e) => {
    if (!imageRef.current || !containerRef.current || active === null) return;

    const x = e.clientX;
    const y = e.clientY;

    // Postavi sliku tačno na poziciju kursora
    imageRef.current.style.left = `${x}px`;
    imageRef.current.style.top = `${y}px`;
    imageRef.current.style.transform = "none"; // Ukloni transform za centriranje
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMove}
      className="rma-tracking-section"
    >
      {CARRIERS.map((carrier, index) => (
        <div
          key={carrier.label}
          onMouseEnter={() => setActive(index)}
          onMouseLeave={() => setActive(null)}
          onClick={() => window.open(carrier.url, "_blank")}
          className="rma-reveal-row"
        >
          <p>{carrier.label}</p>
          <span>
            {carrier.tag}
            <span className="dot" />
          </span>
        </div>
      ))}

      {active !== null && (
        <img
          ref={imageRef}
          src={CARRIERS[active].img}
          alt={CARRIERS[active].label}
          className="rma-reveal-image"
          style={{
            position: "fixed",
            zIndex: 1000,
            pointerEvents: "none",
          }}
        />
      )}
    </section>
  );
}

export default CarrierTrackingReveal;
