import { useState, useEffect } from "react";
import { useTabs } from "@hooks/useTabs";
import { useClipboard } from "@hooks/useClipboard";
import CopyNotification from "@components/common/CopyNotification";
import TicketTab from "./TicketTab";
import TicketForm from "./TicketForm";
import ConfirmModal from "@components/common/ConfirmModal";
import "./TicketTemplate.css";

const TicketTemplate = () => {
  const { tabs, activeTab, createTab, closeTab, switchTab } = useTabs();
  const { copyToClipboard, notification } = useClipboard();
  const [tabData, setTabData] = useState({});
  const [confirmModal, setConfirmModal] = useState(null);

  // Create initial tab on mount
  useEffect(() => {
    if (tabs.length === 0) {
      createTab();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Run only once on mount

  const handleCreateTab = () => {
    createTab();
  };

  const handleCloseTab = (tabId) => {
    setConfirmModal({
      message:
        "Are you sure you want to close this tab?<br><small>All unsaved data will be lost.</small>",
      onConfirm: () => {
        closeTab(tabId);
        const newTabData = { ...tabData };
        delete newTabData[tabId];
        setTabData(newTabData);
        setConfirmModal(null);
      },
      onCancel: () => setConfirmModal(null),
    });
  };

  const handleFormChange = (tabId, data) => {
    setTabData((prev) => ({
      ...prev,
      [tabId]: data,
    }));
  };

  return (
    <>
      <CopyNotification notification={notification} />

      <div id="tabs" className="tabs-container">
        {tabs.map((tabId) => (
          <TicketTab
            key={tabId}
            tabId={tabId}
            isActive={activeTab === tabId}
            ticketNumber={tabData[tabId]?.ticketNumber || ""}
            onSwitch={() => switchTab(tabId)}
            onClose={() => handleCloseTab(tabId)}
          />
        ))}
        <button className="create-tab-btn" onClick={handleCreateTab}>
          + New Ticket
        </button>
      </div>

      <div id="tab-contents" className="tab-contents">
        {tabs.map((tabId) => (
          <div
            key={tabId}
            className="tab-content"
            style={{ display: activeTab === tabId ? "block" : "none" }}
          >
            <TicketForm
              tabId={tabId}
              formData={tabData[tabId] || {}}
              onChange={(data) => handleFormChange(tabId, data)}
              copyToClipboard={copyToClipboard}
            />
          </div>
        ))}
      </div>

      {confirmModal && (
        <ConfirmModal
          message={confirmModal.message}
          onConfirm={confirmModal.onConfirm}
          onCancel={confirmModal.onCancel}
        />
      )}
    </>
  );
};

export default TicketTemplate;
