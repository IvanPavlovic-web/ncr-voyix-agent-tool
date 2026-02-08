import { ENVIRONMENTS, GROUPS, SEVERITIES } from "@data/constants";
import { formatTicketSummary, formatTicketFull } from "@utils/formatters";
import {
  createTechEscalationEmail,
  createCustomerEscalationEmail,
} from "@utils/emailHelper";
import "./TicketForm.css";

const TicketForm = ({ tabId, formData, onChange, copyToClipboard }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...formData, [name]: value });
  };

  const handleCopySummary = () => {
    const summary = formatTicketSummary(formData);
    copyToClipboard(summary);
  };

  const handleCopyFull = () => {
    const fullText = formatTicketFull(formData);
    copyToClipboard(fullText);
  };

  const handleClear = () => {
    onChange({});
  };

  const handleTechEscalation = () => {
    const mailto = createTechEscalationEmail(formData);
    window.location.href = mailto;
  };

  const handleCustomerEscalation = () => {
    const mailto = createCustomerEscalationEmail(formData);
    window.location.href = mailto;
  };

  return (
    <form>
      <div className="buttons">
        <button type="button" onClick={handleCopySummary}>
          Copy Summary
        </button>
        <button type="button" onClick={handleCopyFull}>
          Copy Full Text
        </button>
        <button type="button" onClick={handleTechEscalation}>
          Technical Escalation
        </button>
        <button type="button" onClick={handleCustomerEscalation}>
          Customer Escalation
        </button>
        <button type="button" className="clear" onClick={handleClear}>
          Clear
        </button>
      </div>

      <div className="form-flex-container">
        <div className="form-left-column">
          <div className="form-row">
            <label htmlFor={`caller-name-${tabId}`}>
              Callers First and Last Name:
            </label>
            <input
              type="text"
              id={`caller-name-${tabId}`}
              name="callerName"
              value={formData.callerName || ""}
              onChange={handleInputChange}
              placeholder="Enter caller's full name"
            />
          </div>

          <div className="form-row">
            <label htmlFor={`caller-phone-${tabId}`}>
              Callers Phone Number:
            </label>
            <input
              type="text"
              id={`caller-phone-${tabId}`}
              name="callerPhone"
              value={formData.callerPhone || ""}
              onChange={handleInputChange}
              placeholder="Enter phone number"
            />
          </div>

          <div className="form-row">
            <label htmlFor={`caller-email-${tabId}`}>
              Callers Email Address:
            </label>
            <input
              type="email"
              id={`caller-email-${tabId}`}
              name="callerEmail"
              value={formData.callerEmail || ""}
              onChange={handleInputChange}
              placeholder="Enter email address"
            />
          </div>

          <div className="form-row">
            <label htmlFor={`environment-${tabId}`}>Environment:</label>
            <select
              id={`environment-${tabId}`}
              name="environment"
              value={formData.environment || ""}
              onChange={handleInputChange}
            >
              <option value="">-- Select Environment --</option>
              {ENVIRONMENTS.map((env) => (
                <option key={env} value={env}>
                  {env}
                </option>
              ))}
            </select>
          </div>

          <div className="form-row">
            <label htmlFor={`group-${tabId}`}>Group:</label>
            <select
              id={`group-${tabId}`}
              name="group"
              value={formData.group || ""}
              onChange={handleInputChange}
            >
              <option value="">-- Select Group --</option>
              {GROUPS.map((group) => (
                <option key={group} value={group}>
                  {group}
                </option>
              ))}
            </select>
          </div>

          <div className="form-row">
            <label htmlFor={`company-number-${tabId}`}>Company Number:</label>
            <input
              type="text"
              id={`company-number-${tabId}`}
              name="companyNumber"
              value={formData.companyNumber || ""}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-row">
            <label htmlFor={`store-number-${tabId}`}>Store Number:</label>
            <input
              type="text"
              id={`store-number-${tabId}`}
              name="storeNumber"
              value={formData.storeNumber || ""}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-row">
            <label htmlFor={`aloha-key-${tabId}`}>Aloha Key:</label>
            <input
              type="text"
              id={`aloha-key-${tabId}`}
              name="alohaKey"
              value={formData.alohaKey || ""}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-row">
            <label htmlFor={`summary-${tabId}`}>Summary:</label>
            <input
              type="text"
              id={`summary-${tabId}`}
              name="summary"
              value={formData.summary || ""}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-row">
            <label htmlFor={`ticket-number-${tabId}`}>Ticket Number:</label>
            <input
              type="text"
              id={`ticket-number-${tabId}`}
              name="ticketNumber"
              value={formData.ticketNumber || ""}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-row">
            <label htmlFor={`issue-date-${tabId}`}>
              Date when the issue was reported:
            </label>
            <input
              type="date"
              id={`issue-date-${tabId}`}
              name="issueDate"
              value={formData.issueDate || ""}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-row">
            <label htmlFor={`lanes-affected-${tabId}`}>Lane(s) Affected:</label>
            <input
              type="text"
              id={`lanes-affected-${tabId}`}
              name="lanesAffected"
              value={formData.lanesAffected || ""}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-row">
            <label htmlFor={`severity-${tabId}`}>Severity:</label>
            <select
              id={`severity-${tabId}`}
              name="severity"
              value={formData.severity || ""}
              onChange={handleInputChange}
            >
              <option value="">-- None --</option>
              {SEVERITIES.map((sev) => (
                <option key={sev} value={sev}>
                  {sev}
                </option>
              ))}
            </select>
          </div>

          <div className="form-row">
            <label htmlFor={`mtx-pos-${tabId}`}>MTX_POS.dll version:</label>
            <input
              type="text"
              id={`mtx-pos-${tabId}`}
              name="mtxPos"
              value={formData.mtxPos || ""}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-row">
            <label htmlFor={`mtx-eps-${tabId}`}>MTX_EPS.dll version:</label>
            <input
              type="text"
              id={`mtx-eps-${tabId}`}
              name="mtxEps"
              value={formData.mtxEps || ""}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-row">
            <label htmlFor={`firmware-version-${tabId}`}>
              Firmware version:
            </label>
            <input
              type="text"
              id={`firmware-version-${tabId}`}
              name="firmwareVersion"
              value={formData.firmwareVersion || ""}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-row">
            <label htmlFor={`os-version-${tabId}`}>OS version:</label>
            <input
              type="text"
              id={`os-version-${tabId}`}
              name="osVersion"
              value={formData.osVersion || ""}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-row">
            <label htmlFor={`pinpad-model-${tabId}`}>PIN Pad Model:</label>
            <input
              type="text"
              id={`pinpad-model-${tabId}`}
              name="pinpadModel"
              value={formData.pinpadModel || ""}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-row">
            <label htmlFor={`aps-version-${tabId}`}>APS version:</label>
            <input
              type="text"
              id={`aps-version-${tabId}`}
              name="apsVersion"
              value={formData.apsVersion || ""}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-row">
            <label htmlFor={`pos-version-${tabId}`}>Aloha POS version:</label>
            <input
              type="text"
              id={`pos-version-${tabId}`}
              name="posVersion"
              value={formData.posVersion || ""}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="form-right-column">
          <label htmlFor={`steps-performed-${tabId}`}>
            Steps performed to resolve the issue:
          </label>
          <textarea
            id={`steps-performed-${tabId}`}
            name="stepsPerformed"
            value={formData.stepsPerformed || ""}
            onChange={handleInputChange}
            placeholder="Describe steps..."
          />
        </div>
      </div>
    </form>
  );
};

export default TicketForm;
