const TicketTab = ({ tabId, isActive, ticketNumber, onSwitch, onClose }) => {
  const displayTitle = ticketNumber
    ? `Ticket ${ticketNumber}`
    : tabId.replace("ticket-", "Ticket ");

  return (
    <div className={`tab ${isActive ? "active" : ""}`} onClick={onSwitch}>
      <span className="tab-title">{displayTitle}</span>
      <span
        className="close-btn"
        title="Close Tab"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
      >
        &times;
      </span>
    </div>
  );
};

export default TicketTab;
