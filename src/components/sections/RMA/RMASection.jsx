import { useState } from "react";
import { useClipboard } from "@hooks/useClipboard";
import CopyNotification from "@components/common/CopyNotification";
import {
  formatRMASummary,
  formatRMATicket,
  formatRMATeams,
} from "@utils/formatters";
import RMAForm from "./RMAForm";
import CarrierTrackingReveal from "./CarrierTrackingReveal";
import "./RMASection.css";

const RMASection = () => {
  const [formData, setFormData] = useState({});
  const { copyToClipboard, notification } = useClipboard();

  const handleCopySummary = () => {
    copyToClipboard(formatRMASummary(formData));
  };

  const handleCopyTicket = () => {
    copyToClipboard(formatRMATicket(formData));
  };

  const handleCopyTeams = () => {
    copyToClipboard(formatRMATeams(formData));
  };

  const handleClear = () => {
    setFormData({});
  };

  return (
    <div className="rma-section">
      <CopyNotification notification={notification} />

      <div className="rma-buttons">
        <button type="button" onClick={handleCopySummary}>
          Copy Summary
        </button>
        <button type="button" onClick={handleCopyTicket}>
          Copy For Ticket
        </button>
        <button type="button" onClick={handleCopyTeams}>
          Copy For Teams
        </button>
        <button type="button" className="rma-clear" onClick={handleClear}>
          Clear
        </button>
      </div>

      <div className="rma-container">
        {/* RMA Form */}
        <RMAForm formData={formData} onChange={setFormData} />

        {/* Tracking section (FedEx / UPS / DHL) */}
        <div className="rma-gif-section">
          <div className="rma-info-card">
            <h3>Package Tracking</h3>
            <p>
              Select a carrier below to track the RMA shipment. Clicking a
              carrier will open the official tracking page.
            </p>
          </div>

          <CarrierTrackingReveal />
        </div>
      </div>
    </div>
  );
};

export default RMASection;
