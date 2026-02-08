import { useState, useEffect } from "react";
import { useClipboard } from "@hooks/useClipboard";
import CopyNotification from "@components/common/CopyNotification";
import { formatSORRSummary, formatSORRFull } from "@utils/formatters";
import SORRForm from "./SORRForm";
import "./SORRSection.css";

const SORRSection = () => {
  const [formData, setFormData] = useState({});
  const [issueNotes, setIssueNotes] = useState("");
  const [showDiscrepancyFields, setShowDiscrepancyFields] = useState(false);
  const { copyToClipboard, notification } = useClipboard();

  useEffect(() => {
    setShowDiscrepancyFields(formData.issueType === "Discrepancy");

    switch (formData.issueType) {
      case "Resubmission":
        setIssueNotes(
          `<div class="note-box critical">
            <p>Please don't forget to attach the Resubmission Sheet Before Escalating the ticket to SORR Department!</p>
          </div>`,
        );
        break;

      case "Discrepancy":
        setIssueNotes(
          `<div class="note-box info">
            <p>Please make sure that there are no locally (approved) transactions on the Terminals and that they weren't settling by the failover settlement</p>
          </div>
          <div class="note-box warning">
            <p>If the case is escalated to SORR Department, make sure to attach PDR and RAW Export files in .csv format</p>
          </div>`,
        );
        break;

      case "Offline File Reprocessing":
        setIssueNotes(
          `<div class="note-box warning">
            <p>Before uploading the files to DC1 Secure Server, please make sure that you downloaded the latest Journal file from the affected Terminal(s), KEK Encryption Key and the Offline file itself. Also delete the offline file once downloaded to your work-pc to avoid double reprocessing => double charges</p>
          </div>`,
        );
        break;

      case "Settlement Issue":
        setIssueNotes(
          `<div class="note-box info">
            <p>1) Make sure that there are no transactions stuck in the Offline file</p>
            <p>2) Verify that all of the Terminals configured as PIN Pad lanes in Configuration Management are Online. (Lanes defined as "NO PIN Pad" can be removed from ConMan, FYI)</p>
            <p>3) Check if there are transaction(s) stuck in the Offline Pending Report.</p>
            <p>4) Verify that there are no ".hld" or ".req" files stuck within C:\\CONNECTEDPAYMENTS folder on all Terminals.</p>
            <p>5) Check if the uptime of the BOH is over a week, as that can cause issues with the SettleCP event.</p>
            <br>
            <div class="note-box warning">
              <p>If none of the above helped, then you will have to review the Journals and Debouts. To simplify your root cause analysis, please follow these steps:</p>
              <br>
              <p>Ask the customer about their Settlement method if it's Manual or Automatic</p>
              <p>   If they Settle "Manually", ask which Terminal was used and the timestamp, and search for "ac130000" in the Journal.</p>
              <p>   If they Settle "Automatically, then review the Debout of the Master lane, and search the time on when the SettleCP event is configured from Events.cfg file.</p>
            </div>
          </div>`,
        );
        break;

      default:
        setIssueNotes("");
    }
  }, [formData.issueType]);

  const handleCopySummary = () => {
    copyToClipboard(formatSORRSummary(formData));
  };

  const handleCopyAll = () => {
    copyToClipboard(formatSORRFull(formData));
  };

  const handleClear = () => {
    setFormData({});
    setIssueNotes("");
  };

  return (
    <section className="tool-section sorr-section">
      <CopyNotification notification={notification} />

      <div className="section-header">
        <h2>
          SORR -{" "}
          <em>
            <span>Settlement</span> - Offline (Offline Reprocessing) -{" "}
            <span>Reconciliation (Discrepancy)</span> - Resubmission
          </em>
        </h2>
        <div className="section-controls">
          <button className="control-btn" onClick={handleCopySummary}>
            Copy Summary
          </button>
          <button className="control-btn" onClick={handleCopyAll}>
            Copy All
          </button>
          <button className="control-btn" onClick={handleClear}>
            Clear
          </button>
        </div>
      </div>

      <SORRForm
        formData={formData}
        onChange={setFormData}
        showDiscrepancyFields={showDiscrepancyFields}
      />

      {issueNotes && (
        <div
          className="notes-container"
          dangerouslySetInnerHTML={{ __html: issueNotes }}
        />
      )}
    </section>
  );
};

export default SORRSection;
