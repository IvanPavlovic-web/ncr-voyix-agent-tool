import "./CopyNotification.css";

const CopyNotification = ({ notification }) => {
  if (!notification) return null;

  return (
    <div
      className={`copy-notification ${notification.type === "error" ? "error" : ""}`}
    >
      {notification.message}
    </div>
  );
};

export default CopyNotification;
