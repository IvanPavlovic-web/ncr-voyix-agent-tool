// OvernightTask.jsx
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./OvernightTask.css";
import { useClipboard } from "@hooks/useClipboard";
import CopyNotification from "@components/common/CopyNotification";
import ConfirmModal from "@components/common/ConfirmModal";

const OvernightTask = () => {
  const { copyToClipboard, notification } = useClipboard();
  const [selectedTask, setSelectedTask] = useState("");
  const [formData, setFormData] = useState({});
  const [confirmModal, setConfirmModal] = useState(null);
  const formContainerRef = useRef(null);
  const taskButtonsRef = useRef(null);

  const taskTypes = [
    { id: "processor-change", label: "Processor Change", icon: "🏦" },
    {
      id: "merchant-terminal-change",
      label: "MerchantID/TerminalID Change",
      icon: "💳",
    },
    { id: "firmware-only", label: "Firmware Only Upgrade", icon: "📦" },
    { id: "aps-only", label: "APS Only Upgrade", icon: "⬆️" },
    { id: "firmware-aps", label: "Firmware & APS Upgrade", icon: "📦⬆️" },
  ];

  const taskTemplates = {
    "processor-change": {
      title: "Processor Change",
      topFields: [
        { name: "caseNumber", label: "Case Number", type: "text" },
        { name: "companyNumber", label: "Company Number", type: "text" },
        { name: "storeNumber", label: "Store Number", type: "text" },
        { name: "environment", label: "Environment", type: "text" },
      ],
      oldFields: [
        {
          name: "oldTransactionProfile",
          label: "Old Transaction Profile",
          type: "text",
        },
        { name: "oldProcessor", label: "Old Processor", type: "text" },
        { name: "oldMerchantID", label: "Old MerchantID", type: "text" },
        { name: "oldTerminalID", label: "Old TerminalID", type: "text" },
        { name: "oldBankID", label: "Old BankID", type: "text" },
        { name: "oldPlatformID", label: "Old PlatformID", type: "text" },
      ],
      newFields: [
        {
          name: "newTransactionProfile",
          label: "New Transaction Profile",
          type: "text",
        },
        { name: "newProcessor", label: "New Processor", type: "text" },
        { name: "newMerchantID", label: "New MerchantID", type: "text" },
        { name: "newTerminalID", label: "New TerminalID", type: "text" },
        { name: "newBankID", label: "New BankID", type: "text" },
        { name: "newPlatformID", label: "New PlatformID", type: "text" },
      ],
      bottomFields: [
        {
          name: "changeDate",
          label: "Change Date & Time (mm/dd/yyyy hh:mm tmz)",
          type: "text",
          fullWidth: true,
        },
        {
          name: "additionalSteps",
          label: "Additional Steps",
          type: "textarea",
          fullWidth: true,
        },
      ],
      generateBody: (data) => `Hello Team, please perform the following task:

Case Number: ${data.caseNumber || ""}
Company Number: ${data.companyNumber || ""}
Store Number: ${data.storeNumber || ""}
Environment: ${data.environment || ""}

Old Transaction Profile: ${data.oldTransactionProfile || ""}
Old Processor: ${data.oldProcessor || ""}
Old MerchantID: ${data.oldMerchantID || ""}
Old TerminalID: ${data.oldTerminalID || ""}
Old BankID: ${data.oldBankID || ""}
Old PlatformID: ${data.oldPlatformID || ""}

New Transaction Profile: ${data.newTransactionProfile || ""}
New Processor: ${data.newProcessor || ""}
New MerchantID: ${data.newMerchantID || ""}
New TerminalID: ${data.newTerminalID || ""}
New BankID: ${data.newBankID || ""}
New PlatformID: ${data.newPlatformID || ""}

The change should take place on ${data.changeDate || ""}

Additional steps: ${data.additionalSteps || ""}`,
    },
    "merchant-terminal-change": {
      title: "MerchantID/TerminalID Change",
      topFields: [
        { name: "caseNumber", label: "Case Number", type: "text" },
        { name: "companyNumber", label: "Company Number", type: "text" },
        { name: "storeNumber", label: "Store Number", type: "text" },
        { name: "environment", label: "Environment", type: "text" },
      ],
      oldFields: [
        {
          name: "oldTransactionProfile",
          label: "Old Transaction Profile",
          type: "text",
        },
        { name: "oldProcessor", label: "Old Processor", type: "text" },
        { name: "oldMerchantID", label: "Old MerchantID", type: "text" },
        { name: "oldTerminalID", label: "Old TerminalID", type: "text" },
        { name: "oldBankID", label: "Old BankID", type: "text" },
        { name: "oldPlatformID", label: "Old PlatformID", type: "text" },
      ],
      newFields: [
        {
          name: "newTransactionProfile",
          label: "New Transaction Profile",
          type: "text",
        },
        { name: "newProcessor", label: "New Processor", type: "text" },
        { name: "newMerchantID", label: "New MerchantID", type: "text" },
        { name: "newTerminalID", label: "New TerminalID", type: "text" },
        { name: "newBankID", label: "New BankID", type: "text" },
        { name: "newPlatformID", label: "New PlatformID", type: "text" },
      ],
      bottomFields: [
        {
          name: "changeDate",
          label: "Change Date & Time (mm/dd/yyyy hh:mm tmz)",
          type: "text",
          fullWidth: true,
        },
        {
          name: "additionalSteps",
          label: "Additional Steps",
          type: "textarea",
          fullWidth: true,
        },
      ],
      generateBody: (data) => `Hello Team, please perform the following task:

Case Number: ${data.caseNumber || ""}
Company Number: ${data.companyNumber || ""}
Store Number: ${data.storeNumber || ""}
Environment: ${data.environment || ""}

Old Transaction Profile: ${data.oldTransactionProfile || ""}
Old Processor: ${data.oldProcessor || ""}
Old MerchantID: ${data.oldMerchantID || ""}
Old TerminalID: ${data.oldTerminalID || ""}
Old BankID: ${data.oldBankID || ""}
Old PlatformID: ${data.oldPlatformID || ""}

New Transaction Profile: ${data.newTransactionProfile || ""}
New Processor: ${data.newProcessor || ""}
New MerchantID: ${data.newMerchantID || ""}
New TerminalID: ${data.newTerminalID || ""}
New BankID: ${data.newBankID || ""}
New PlatformID: ${data.newPlatformID || ""}

The change should take place on ${data.changeDate || ""}

Additional steps: ${data.additionalSteps || ""}`,
    },
    "firmware-only": {
      title: "Firmware Only Upgrade",
      fields: [
        {
          name: "caseNumber",
          label: "Case Number",
          type: "text",
          fullWidth: true,
        },
        { name: "companyNumber", label: "Company Number", type: "text" },
        { name: "storeNumber", label: "Store Number", type: "text" },
        {
          name: "pinPadModel",
          label: "PIN Pad Model Name",
          type: "text",
          fullWidth: true,
        },
        {
          name: "laneConfig",
          label: "Lane Configuration Name",
          type: "text",
          fullWidth: true,
        },
        {
          name: "lanesUpgrade",
          label: "Lanes that need the upgrade",
          type: "text",
          fullWidth: true,
        },
        { name: "oldFirmware", label: "Old Firmware version", type: "text" },
        { name: "newFirmware", label: "New Firmware version", type: "text" },
        {
          name: "directoryPath",
          label: "Directory/Path",
          type: "text",
          fullWidth: true,
        },
        { name: "storeCloses", label: "Store Closes at", type: "text" },
        { name: "storeOpens", label: "Store Opens at", type: "text" },
        { name: "settlementTime", label: "Settlement Time at", type: "text" },
        { name: "endOfDay", label: "End-of-Day at", type: "text" },
        {
          name: "upgradeDate",
          label: "Upgrade Date & Time (mm/dd/yyyy hh:mm tmz)",
          type: "text",
          fullWidth: true,
        },
      ],
      generateBody: (data) => `Hello Team, please perform the following task:

Case Number: ${data.caseNumber || ""}
Company Number: ${data.companyNumber || ""}
Store Number: ${data.storeNumber || ""}

PIN Pad Model Name: ${data.pinPadModel || ""}
Lane Configuration Name: ${data.laneConfig || ""}
Lanes that need the upgrade: ${data.lanesUpgrade || ""}

Old Firmware version: ${data.oldFirmware || ""}
New Firmware version: ${data.newFirmware || ""}

The files are uploaded on all lanes within the ${data.directoryPath || ""} directory/path.

Store Closes at: ${data.storeCloses || ""}
Store Opens at: ${data.storeOpens || ""}
Settlement Time at: ${data.settlementTime || ""}
End-of-Day at: ${data.endOfDay || ""}

The upgrade should take place on ${data.upgradeDate || ""}`,
    },
    "aps-only": {
      title: "APS Only Upgrade",
      fields: [
        {
          name: "caseNumber",
          label: "Case Number",
          type: "text",
          fullWidth: true,
        },
        { name: "companyNumber", label: "Company Number", type: "text" },
        { name: "storeNumber", label: "Store Number", type: "text" },
        { name: "oldAPS", label: "Old APS version", type: "text" },
        { name: "newAPS", label: "New APS version", type: "text" },
        {
          name: "directoryPath",
          label: "Directory/Path",
          type: "text",
          fullWidth: true,
        },
        { name: "storeCloses", label: "Store Closes at", type: "text" },
        { name: "storeOpens", label: "Store Opens at", type: "text" },
        { name: "settlementTime", label: "Settlement Time at", type: "text" },
        { name: "endOfDay", label: "End-of-Day at", type: "text" },
        {
          name: "upgradeDate",
          label: "Upgrade Date & Time (mm/dd/yyyy hh:mm tmz)",
          type: "text",
          fullWidth: true,
        },
      ],
      generateBody: (data) => `Hello Team, please perform the following task:

Case Number: ${data.caseNumber || ""}
Company Number: ${data.companyNumber || ""}
Store Number: ${data.storeNumber || ""}

Old APS version: ${data.oldAPS || ""}
New APS version: ${data.newAPS || ""}

The APS installer is uploaded on the BOH within the ${data.directoryPath || ""} directory/path.

Store Closes at: ${data.storeCloses || ""}
Store Opens at: ${data.storeOpens || ""}
Settlement Time at: ${data.settlementTime || ""}
End-of-Day at: ${data.endOfDay || ""}

The upgrade should take place on ${data.upgradeDate || ""}`,
    },
    "firmware-aps": {
      title: "Firmware and APS Upgrade",
      fields: [
        {
          name: "caseNumber",
          label: "Case Number",
          type: "text",
          fullWidth: true,
        },
        { name: "companyNumber", label: "Company Number", type: "text" },
        { name: "storeNumber", label: "Store Number", type: "text" },
        {
          name: "pinPadModel",
          label: "PIN Pad Model Name",
          type: "text",
          fullWidth: true,
        },
        {
          name: "laneConfig",
          label: "Lane Configuration Name",
          type: "text",
          fullWidth: true,
        },
        {
          name: "lanesUpgrade",
          label: "Lanes that need the upgrade",
          type: "text",
          fullWidth: true,
        },
        { name: "oldFirmware", label: "Old Firmware version", type: "text" },
        { name: "newFirmware", label: "New Firmware version", type: "text" },
        {
          name: "firmwareDirectoryPath",
          label: "Firmware Directory/Path",
          type: "text",
          fullWidth: true,
        },
        { name: "oldAPS", label: "Old APS version", type: "text" },
        { name: "newAPS", label: "New APS version", type: "text" },
        {
          name: "apsDirectoryPath",
          label: "APS Directory/Path",
          type: "text",
          fullWidth: true,
        },
        { name: "storeCloses", label: "Store Closes at", type: "text" },
        { name: "storeOpens", label: "Store Opens at", type: "text" },
        { name: "settlementTime", label: "Settlement Time at", type: "text" },
        { name: "endOfDay", label: "End-of-Day at", type: "text" },
        {
          name: "upgradeDate",
          label: "Upgrade Date & Time (mm/dd/yyyy hh:mm tmz)",
          type: "text",
          fullWidth: true,
        },
      ],
      generateBody: (data) => `Hello Team, please perform the following task:

Case Number: ${data.caseNumber || ""}
Company Number: ${data.companyNumber || ""}
Store Number: ${data.storeNumber || ""}

PIN Pad Model Name: ${data.pinPadModel || ""}
Lane Configuration Name: ${data.laneConfig || ""}
Lanes that need the upgrade: ${data.lanesUpgrade || ""}

Old Firmware version: ${data.oldFirmware || ""}
New Firmware version: ${data.newFirmware || ""}

The firmware files are uploaded on all lanes within the ${data.firmwareDirectoryPath || ""} directory/path.

Old APS version: ${data.oldAPS || ""}
New APS version: ${data.newAPS || ""}

The APS installer is uploaded on the BOH within the ${data.apsDirectoryPath || ""} directory/path.

Store Closes at: ${data.storeCloses || ""}
Store Opens at: ${data.storeOpens || ""}
Settlement Time at: ${data.settlementTime || ""}
End-of-Day at: ${data.endOfDay || ""}

The upgrade should take place on ${data.upgradeDate || ""}`,
    },
  };

  useEffect(() => {
    // Entrance animations
    gsap.from(".overnight-header", {
      y: -30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    });

    gsap.from(".task-selection-card", {
      y: 30,
      opacity: 0,
      duration: 0.6,
      delay: 0.2,
      ease: "power3.out",
    });
  }, []);

  useEffect(() => {
    if (selectedTask && formContainerRef.current) {
      gsap.fromTo(
        formContainerRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
      );

      gsap.from(".form-field-animated", {
        y: 20,
        opacity: 0,
        duration: 0.4,
        stagger: 0.05,
        delay: 0.2,
        ease: "power2.out",
      });
    }
  }, [selectedTask]);

  const handleTaskSelect = (taskId) => {
    setSelectedTask(taskId);
    setFormData({});
  };

  const handleInputChange = (fieldName, value) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));

    // Subtle field animation
    gsap.to(`.field-${fieldName}`, {
      scale: 1.01,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut",
    });
  };

  const handleClearAll = () => {
    setConfirmModal({
      message:
        "Are you sure you want to clear all fields?<br><small>This action cannot be undone.</small>",
      onConfirm: () => {
        setFormData({});
        setConfirmModal(null);
      },
      onCancel: () => setConfirmModal(null),
    });
  };

  const generateTitle = () => {
    if (!selectedTask) return "";
    const template = taskTemplates[selectedTask];
    const caseNumber = formData.caseNumber || "XXXX";
    const companyNumber = formData.companyNumber || "XX";
    const storeNumber = formData.storeNumber || "XXXX";
    return `Overnight Support - ${caseNumber} - ${template.title} CN ${companyNumber} SN ${storeNumber}`;
  };

  const copyTitle = () => {
    const title = generateTitle();
    copyToClipboard(title, "Subject line copied!");
    createParticles(event);
  };

  const copyAll = () => {
    if (!selectedTask) return;
    const template = taskTemplates[selectedTask];
    const body = template.generateBody(formData);
    copyToClipboard(body, "Task body copied!");
    createParticles(event);
  };

  const createParticles = (e) => {
    const button = e.target.closest("button");
    const rect = button.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    for (let i = 0; i < 8; i++) {
      const particle = document.createElement("div");
      particle.className = "copy-particle";
      particle.style.left = `${centerX}px`;
      particle.style.top = `${centerY}px`;
      document.body.appendChild(particle);

      const angle = (i / 8) * Math.PI * 2;
      const velocity = 60 + Math.random() * 40;

      gsap.to(particle, {
        x: Math.cos(angle) * velocity,
        y: Math.sin(angle) * velocity,
        opacity: 0,
        scale: 0,
        duration: 0.6,
        ease: "power2.out",
        onComplete: () => particle.remove(),
      });
    }
  };

  const renderField = (field, index) => {
    const isTextarea = field.type === "textarea";
    const baseClasses = `form-field-animated field-${field.name}`;
    const widthClass = field.fullWidth ? "col-span-full" : "";

    return (
      <div key={field.name} className={`${baseClasses} ${widthClass}`}>
        <label className="field-label">{field.label}</label>
        <div className="input-wrapper">
          {isTextarea ? (
            <textarea
              value={formData[field.name] || ""}
              onChange={(e) => handleInputChange(field.name, e.target.value)}
              placeholder={`Enter ${field.label.toLowerCase()}`}
              rows={4}
              className="field-textarea"
            />
          ) : (
            <input
              type="text"
              value={formData[field.name] || ""}
              onChange={(e) => handleInputChange(field.name, e.target.value)}
              placeholder={`Enter ${field.label.toLowerCase()}`}
              className="field-input"
            />
          )}
        </div>
      </div>
    );
  };

  const renderSplitLayout = (template) => {
    return (
      <>
        <div className="form-grid top-section">
          {template.topFields.map((field, idx) => renderField(field, idx))}
        </div>

        <div className="split-layout">
          <div className="split-column old-config">
            <h4 className="split-title old-title">Old Configuration</h4>
            {template.oldFields.map((field, idx) => renderField(field, idx))}
          </div>

          <div className="split-column new-config">
            <h4 className="split-title new-title">New Configuration</h4>
            {template.newFields.map((field, idx) => renderField(field, idx))}
          </div>
        </div>

        <div className="form-grid bottom-section">
          {template.bottomFields.map((field, idx) => renderField(field, idx))}
        </div>
      </>
    );
  };

  const renderStandardLayout = (template) => {
    return (
      <div className="form-grid">
        {template.fields.map((field, idx) => renderField(field, idx))}
      </div>
    );
  };

  return (
    <>
      <CopyNotification notification={notification} />

      <div className="overnight-task-container">
        <header className="overnight-header">
          <div className="header-badge">Create tasks in seconds</div>
          <h1 className="overnight-title">
            <span className="title-gradient">Overnight Task</span>
            <br />
            <span className="title-secondary">Generator</span>
          </h1>
          <p className="header-description">
            From zero to task in seconds. Select a task type.
          </p>
        </header>

        <section className="task-selection-card">
          <label className="task-selection-label">
            Select Task Type to Schedule
          </label>
          <div className="task-buttons-grid" ref={taskButtonsRef}>
            {taskTypes.map((task, index) => (
              <button
                key={task.id}
                className={`task-btn ${selectedTask === task.id ? "active" : ""}`}
                onClick={() => handleTaskSelect(task.id)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="task-btn-glow"></div>
                <span className="task-icon">{task.icon}</span>
                <span className="task-label">{task.label}</span>
              </button>
            ))}
          </div>
        </section>

        {selectedTask && (
          <div className="task-form-wrapper" ref={formContainerRef}>
            <div className="task-form-card">
              <div className="task-form-header">
                <h3 className="form-title-text">
                  {taskTemplates[selectedTask].title}
                </h3>

                <div className="title-preview-section">
                  <label className="title-preview-label">Subject Line</label>
                  <div className="title-preview-box">
                    <div className="title-display">{generateTitle()}</div>
                    <button className="copy-title-btn" onClick={copyTitle}>
                      <span>Copy</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="task-form-body">
                {taskTemplates[selectedTask].oldFields &&
                taskTemplates[selectedTask].newFields
                  ? renderSplitLayout(taskTemplates[selectedTask])
                  : renderStandardLayout(taskTemplates[selectedTask])}
              </div>

              <div className="task-form-actions">
                <button className="btn-clear" onClick={handleClearAll}>
                  <svg
                    className="btn-icon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                  Clear All
                </button>
                <button className="btn-copy" onClick={copyAll}>
                  <span>Copy Task</span>
                  <svg
                    className="btn-icon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {confirmModal && (
        <ConfirmModal
          message={confirmModal.message}
          onConfirm={confirmModal.onConfirm}
          onCancel={confirmModal.onCancel}
        />
      )}

      {/* Particles container */}
      <div id="particles-container"></div>
    </>
  );
};

export default OvernightTask;
