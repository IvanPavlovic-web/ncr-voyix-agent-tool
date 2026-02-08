import { Calendar, Clock, Trash2, Bell } from "lucide-react";
import "./ReminderCard.css";

const ReminderCard = ({ reminder, onDelete }) => {
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const options = { weekday: "short", day: "numeric", month: "short" };
    return date.toLocaleDateString("en-US", options);
  };

  const formatTime = (timeStr) => {
    return timeStr;
  };

  const isUpcoming = () => {
    const reminderTime = new Date(`${reminder.date}T${reminder.time}`);
    const now = new Date();
    return reminderTime > now;
  };

  const isPast = () => {
    const reminderTime = new Date(`${reminder.date}T${reminder.time}`);
    const now = new Date();
    return reminderTime < now;
  };

  return (
    <div
      className={`reminder-card ${isPast() ? "past" : ""} ${reminder.notified ? "notified" : ""}`}
    >
      <div className="reminder-card-header">
        <Bell
          size={20}
          className={`reminder-bell ${isUpcoming() ? "upcoming" : ""}`}
        />
        <h3 className="reminder-title">{reminder.title}</h3>
      </div>

      <div className="reminder-details">
        <div className="reminder-detail">
          <Calendar size={16} />
          <span>{formatDate(reminder.date)}</span>
        </div>
        <div className="reminder-detail">
          <Clock size={16} />
          <span>{formatTime(reminder.time)}</span>
        </div>
      </div>

      {reminder.notified && (
        <div className="reminder-status">
          <span className="status-badge">Notified</span>
        </div>
      )}

      <button className="delete-reminder-btn" onClick={onDelete}>
        <Trash2 size={16} />
        Delete
      </button>
    </div>
  );
};

export default ReminderCard;
