import { useState, useEffect } from "react";
import { Clock, Bell, Plus, Trash2, X } from "lucide-react";
import { useLocalStorage } from "@hooks/useLocalStorage";
import ReminderCard from "./ReminderCard";
import ReminderNotification from "./ReminderNotification";
import "./ReminderSection.css";

const ReminderSection = () => {
  const [reminders, setReminders] = useLocalStorage("reminders", []);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    time: "",
    date: "",
  });
  const [activeNotifications, setActiveNotifications] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const checkReminders = () => {
      const now = new Date();
      const currentTime = now.getTime();

      reminders.forEach((reminder) => {
        if (reminder.notified) return;

        const reminderTime = new Date(
          `${reminder.date}T${reminder.time}`,
        ).getTime();
        const timeDiff = reminderTime - currentTime;

        if (timeDiff > 0 && timeDiff <= 300000 && !reminder.preNotified) {
          showNotification(reminder, true);
          updateReminderStatus(reminder.id, { preNotified: true });
        }

        if (timeDiff <= 0 && timeDiff > -60000) {
          showNotification(reminder, false);
          updateReminderStatus(reminder.id, { notified: true });
        }
      });
    };

    const interval = setInterval(checkReminders, 30000);
    checkReminders();
    return () => clearInterval(interval);
  }, [reminders]);

  const showNotification = (reminder, isPreReminder) => {
    const notification = {
      id: Date.now(),
      reminder,
      isPreReminder,
    };
    setActiveNotifications((prev) => [...prev, notification]);
  };

  const updateReminderStatus = (id, updates) => {
    setReminders(
      reminders.map((r) => (r.id === id ? { ...r, ...updates } : r)),
    );
  };

  const handleAddReminder = () => {
    if (!formData.title || !formData.time || !formData.date) {
      setMessage("Please fill all fields!");
      setTimeout(() => setMessage(""), 3000);
      return;
    }

    const newReminder = {
      id: Date.now(),
      title: formData.title,
      time: formData.time,
      date: formData.date,
      createdAt: new Date().toISOString(),
      notified: false,
      preNotified: false,
    };

    setReminders([...reminders, newReminder]);
    setFormData({ title: "", time: "", date: "" });
    setShowForm(false);
    setMessage(`Reminder added: ${formData.title}`);
    setTimeout(() => setMessage(""), 3000);
  };

  const handleDeleteReminder = (id) => {
    const reminder = reminders.find((r) => r.id === id);
    setReminders(reminders.filter((r) => r.id !== id));
    setMessage(`Deleted: ${reminder.title}`);
    setTimeout(() => setMessage(""), 3000);
  };

  const closeNotification = (notificationId) => {
    setActiveNotifications((prev) =>
      prev.filter((n) => n.id !== notificationId),
    );
  };

  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const sortedReminders = [...reminders].sort((a, b) => {
    const timeA = new Date(`${a.date}T${a.time}`).getTime();
    const timeB = new Date(`${b.date}T${b.time}`).getTime();
    return timeA - timeB;
  });

  return (
    <>
      <section className="reminder-section">
        <div className="reminder-header">
          <div className="header-title">
            <Clock className="header-icon" size={32} />
            <h2>
              Reminder <span>System</span>
            </h2>
          </div>
          <button
            className="add-reminder-btn"
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? <X size={20} /> : <Plus size={20} />}
            {showForm ? "Close" : "New Reminder"}
          </button>
        </div>

        {showForm && (
          <div className="reminder-form">
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="reminder-title">Title</label>
                <input
                  type="text"
                  id="reminder-title"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  placeholder="e.g., Client meeting"
                  maxLength={100}
                />
              </div>

              <div className="form-group">
                <label htmlFor="reminder-date">Date</label>
                <input
                  type="date"
                  id="reminder-date"
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                  min={getTodayDate()}
                />
              </div>

              <div className="form-group">
                <label htmlFor="reminder-time">Time</label>
                <input
                  type="time"
                  id="reminder-time"
                  value={formData.time}
                  onChange={(e) =>
                    setFormData({ ...formData, time: e.target.value })
                  }
                />
              </div>
            </div>

            <button className="submit-reminder-btn" onClick={handleAddReminder}>
              <Bell size={18} />
              Set Reminder
            </button>
          </div>
        )}

        {message && <p className="reminder-message">{message}</p>}

        <div className="reminders-container">
          {sortedReminders.length === 0 ? (
            <div className="empty-state">
              <Bell size={48} className="empty-icon" />
              <p>You have no reminders</p>
              <p className="empty-subtitle">Click "New Reminder" to add one</p>
            </div>
          ) : (
            sortedReminders.map((reminder) => (
              <ReminderCard
                key={reminder.id}
                reminder={reminder}
                onDelete={() => handleDeleteReminder(reminder.id)}
              />
            ))
          )}
        </div>
      </section>

      {/* Notifications overlay */}
      <div className="notifications-overlay">
        {activeNotifications.map((notification) => (
          <ReminderNotification
            key={notification.id}
            notification={notification}
            onClose={() => closeNotification(notification.id)}
          />
        ))}
      </div>
    </>
  );
};

export default ReminderSection;
