import { useState } from "react";
import { HARDWARE_ITEMS } from "@data/constants";
import HardwareGallery from "./HardwareGallery";
import "./HardwareHelper.css";

const HardwareHelper = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredItems = HARDWARE_ITEMS.filter(
    (item) => activeFilter === "all" || item.category.includes(activeFilter),
  );

  return (
    <section className="hardware-section">
      <div className="section-header">
        <h2>Hardware Helper</h2>
      </div>

      <div className="hardware-filters">
        <button
          className={`filter-btn ${activeFilter === "all" ? "active" : ""}`}
          onClick={() => setActiveFilter("all")}
        >
          All
        </button>
        <button
          className={`filter-btn ${activeFilter === "cables" ? "active" : ""}`}
          onClick={() => setActiveFilter("cables")}
        >
          Cables
        </button>
        <button
          className={`filter-btn ${activeFilter === "equinox" ? "active" : ""}`}
          onClick={() => setActiveFilter("equinox")}
        >
          Equinox
        </button>
        <button
          className={`filter-btn ${activeFilter === "verifone" ? "active" : ""}`}
          onClick={() => setActiveFilter("verifone")}
        >
          Verifone
        </button>
      </div>

      <HardwareGallery items={filteredItems} />
    </section>
  );
};

export default HardwareHelper;
