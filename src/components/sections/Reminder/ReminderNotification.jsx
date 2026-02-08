import { useState, useEffect } from "react";
import { Bell, Clock, X, AlertCircle } from "lucide-react";
import "./ReminderNotification.css";

const ReminderNotification = ({ notification, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 10);

    if (notification.isPreReminder) {
      const timer = setTimeout(() => {
        handleClose();
      }, 30000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => onClose(), 300);
  };

  const formatTime = (timeStr) => {
    return timeStr;
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const options = { day: "numeric", month: "long" };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <div className={`reminder-notification ${isVisible ? "visible" : ""}`}>
      <div
        className={`notification-content ${notification.isPreReminder ? "pre-reminder" : "main-reminder"}`}
      >
        <div className="notification-header">
          <div className="notification-icon-wrapper">
            {notification.isPreReminder ? (
              <Clock className="notification-icon pre-icon" size={24} />
            ) : (
              <Bell className="notification-icon main-icon" size={24} />
            )}
          </div>

          <div className="notification-title-section">
            <span className="notification-label">
              {notification.isPreReminder ? "5-minute reminder" : "TIME'S UP!"}
            </span>
            <h3 className="notification-title">
              {notification.reminder.title}
            </h3>
          </div>

          <button className="close-notification-btn" onClick={handleClose}>
            <X size={20} />
          </button>
        </div>

        <div className="notification-body">
          <div className="notification-info">
            <div className="info-item">
              <Clock size={14} />
              <span>{formatTime(notification.reminder.time)}</span>
            </div>
            <div className="info-item">
              <AlertCircle size={14} />
              <span>{formatDate(notification.reminder.date)}</span>
            </div>
          </div>

          {notification.isPreReminder && (
            <p className="pre-reminder-text">
              Reminder will activate in 5 minutes
            </p>
          )}
        </div>

        <div className="notification-progress-bar">
          <div
            className={`progress-fill ${notification.isPreReminder ? "pre" : "main"}`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ReminderNotification;
