import { ISSUE_TYPES } from "@data/constants";
import "./SORRForm.css";

const SORRForm = ({ formData, onChange, showDiscrepancyFields }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...formData, [name]: value });
  };

  return (
    <div className="sorr-form-container">
      <div className="form-group">
        <label htmlFor="sorr-caller-name">Caller's First and Last Name:</label>
        <input
          type="text"
          id="sorr-caller-name"
          className="form-input"
          name="callerName"
          value={formData.callerName || ""}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="sorr-caller-phone">Caller's Phone Number:</label>
        <input
          type="text"
          id="sorr-caller-phone"
          className="form-input"
          name="callerPhone"
          value={formData.callerPhone || ""}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="sorr-caller-email">Caller's Email Address:</label>
        <input
          type="email"
          id="sorr-caller-email"
          className="form-input"
          name="callerEmail"
          value={formData.callerEmail || ""}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-spacer"></div>

      <div className="form-group">
        <label htmlFor="sorr-company-number">Company Number:</label>
        <input
          type="text"
          id="sorr-company-number"
          className="form-input"
          name="companyNumber"
          value={formData.companyNumber || ""}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="sorr-store-number">Store Number:</label>
        <input
          type="text"
          id="sorr-store-number"
          className="form-input"
          name="storeNumber"
          value={formData.storeNumber || ""}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="sorr-aloha-key">Aloha Key:</label>
        <input
          type="text"
          id="sorr-aloha-key"
          className="form-input"
          name="alohaKey"
          value={formData.alohaKey || ""}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-spacer"></div>

      <div className="form-group">
        <label htmlFor="sorr-issue-type">Issue Type:</label>
        <select
          id="sorr-issue-type"
          className="form-select"
          name="issueType"
          value={formData.issueType || ""}
          onChange={handleInputChange}
        >
          <option value="">-- Select Issue Type --</option>
          {ISSUE_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {showDiscrepancyFields && (
        <>
          <div className="form-group">
            <label htmlFor="sorr-start-date">Start Date of Discrepancy:</label>
            <input
              type="date"
              id="sorr-start-date"
              className="form-input"
              name="startDate"
              value={formData.startDate || ""}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="sorr-end-date">End Date of Discrepancy:</label>
            <input
              type="date"
              id="sorr-end-date"
              className="form-input"
              name="endDate"
              value={formData.endDate || ""}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="sorr-missing-amount">
              Exact or approximate missing amount:
            </label>
            <input
              type="text"
              id="sorr-missing-amount"
              className="form-input"
              name="missingAmount"
              value={formData.missingAmount || ""}
              onChange={handleInputChange}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default SORRForm;
