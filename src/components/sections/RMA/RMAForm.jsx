import "./RMAForm.css";

const RMAForm = ({ formData, onChange }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...formData, [name]: value });
  };

  return (
    <form className="rma-form">
      <div className="rma-form-row">
        <label htmlFor="rma-caller-name">Callers First and Last Name:</label>
        <input
          type="text"
          id="rma-caller-name"
          name="callerName"
          value={formData.callerName || ""}
          onChange={handleInputChange}
        />
      </div>

      <div className="rma-form-row">
        <label htmlFor="rma-caller-phone">Callers Phone Number:</label>
        <input
          type="text"
          id="rma-caller-phone"
          name="callerPhone"
          value={formData.callerPhone || ""}
          onChange={handleInputChange}
        />
      </div>

      <div className="rma-form-row">
        <label htmlFor="rma-caller-email">Callers Email Address:</label>
        <input
          type="email"
          id="rma-caller-email"
          name="callerEmail"
          value={formData.callerEmail || ""}
          onChange={handleInputChange}
        />
      </div>

      <div className="rma-form-row">
        <label htmlFor="rma-company-number">Company Number:</label>
        <input
          type="text"
          id="rma-company-number"
          name="companyNumber"
          value={formData.companyNumber || ""}
          onChange={handleInputChange}
        />
      </div>

      <div className="rma-form-row">
        <label htmlFor="rma-store-number">Store Number:</label>
        <input
          type="text"
          id="rma-store-number"
          name="storeNumber"
          value={formData.storeNumber || ""}
          onChange={handleInputChange}
        />
      </div>

      <div className="rma-form-row">
        <label htmlFor="rma-aloha-key">Aloha Key:</label>
        <input
          type="text"
          id="rma-aloha-key"
          name="alohaKey"
          value={formData.alohaKey || ""}
          onChange={handleInputChange}
        />
      </div>

      <div className="rma-form-row">
        <label htmlFor="rma-ticket-number">Ticket Number:</label>
        <input
          type="text"
          id="rma-ticket-number"
          name="ticketNumber"
          value={formData.ticketNumber || ""}
          onChange={handleInputChange}
        />
      </div>

      <div className="rma-form-row">
        <label htmlFor="rma-issue-summary">Issue Summary:</label>
        <input
          type="text"
          id="rma-issue-summary"
          name="issueSummary"
          value={formData.issueSummary || ""}
          onChange={handleInputChange}
        />
      </div>

      <div className="rma-form-row">
        <label htmlFor="rma-pinpad-model">PIN Pad Model:</label>
        <input
          type="text"
          id="rma-pinpad-model"
          name="pinpadModel"
          value={formData.pinpadModel || ""}
          onChange={handleInputChange}
        />
      </div>

      <div className="rma-form-row">
        <label htmlFor="rma-firmware-version">Firmware version:</label>
        <input
          type="text"
          id="rma-firmware-version"
          name="firmwareVersion"
          value={formData.firmwareVersion || ""}
          onChange={handleInputChange}
        />
      </div>

      <div className="rma-form-row">
        <label htmlFor="rma-cable-type">Cable Type:</label>
        <input
          type="text"
          id="rma-cable-type"
          name="cableType"
          value={formData.cableType || ""}
          onChange={handleInputChange}
        />
      </div>

      <div className="rma-form-row">
        <label htmlFor="rma-error-message">Error message on the PIN Pad:</label>
        <input
          type="text"
          id="rma-error-message"
          name="errorMessage"
          value={formData.errorMessage || ""}
          onChange={handleInputChange}
        />
      </div>

      <div className="rma-form-row">
        <label htmlFor="rma-sla">Contractual SLA:</label>
        <input
          type="text"
          id="rma-sla"
          name="sla"
          value={formData.sla || ""}
          onChange={handleInputChange}
        />
      </div>

      <div className="rma-form-row">
        <label htmlFor="rma-com-port">
          Is the PIN Pad visible under COM port?:
        </label>
        <select
          id="rma-com-port"
          name="comPort"
          value={formData.comPort || ""}
          onChange={handleInputChange}
        >
          <option value="">-- Select --</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      <div className="rma-form-row">
        <label htmlFor="rma-usb-drivers">USB Drivers up-to-date?:</label>
        <select
          id="rma-usb-drivers"
          name="usbDrivers"
          value={formData.usbDrivers || ""}
          onChange={handleInputChange}
        >
          <option value="">-- Select --</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      <div className="rma-form-row">
        <label htmlFor="rma-power-drained">PIN Pad Power Drained?:</label>
        <select
          id="rma-power-drained"
          name="powerDrained"
          value={formData.powerDrained || ""}
          onChange={handleInputChange}
        >
          <option value="">-- Select --</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      <div className="rma-form-row">
        <label htmlFor="rma-swapped">
          PIN Pad Swapped to a different terminal?:
        </label>
        <select
          id="rma-swapped"
          name="swapped"
          value={formData.swapped || ""}
          onChange={handleInputChange}
        >
          <option value="">-- Select --</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      <div className="rma-form-row">
        <label htmlFor="rma-working-another">
          PIN Pad working on another Terminal?
        </label>
        <select
          id="rma-working-another"
          name="workingAnother"
          value={formData.workingAnother || ""}
          onChange={handleInputChange}
        >
          <option value="">-- Select --</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
    </form>
  );
};

export default RMAForm;
