import { useState, useEffect } from "react";
import { Clock, Bell, Plus, Trash2, X } from "lucide-react";
import ReminderNotification from "@components/sections/Reminder/ReminderNotification";
import "./GlobalReminders.css";

const GlobalReminders = () => {
  const [reminders, setReminders] = useState(() => {
    const saved = localStorage.getItem("reminders");
    return saved ? JSON.parse(saved) : [];
  });
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    time: "",
    date: "",
  });
  const [activeNotifications, setActiveNotifications] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    localStorage.setItem("reminders", JSON.stringify(reminders));
  }, [reminders]);

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

  const handleViewAllReminders = () => {
    const event = new CustomEvent("navigate-to-section", {
      detail: "reminder",
    });
    window.dispatchEvent(event);
    setShowForm(false);
  };

  return (
    <>
      <div className="floating-reminders-container">
        <button
          className="reminders-toggle-btn"
          onClick={() => setShowForm(!showForm)}
          aria-label={showForm ? "Close reminders" : "Open reminders"}
        >
          <div className="reminders-btn-content">
            <Clock className="reminders-icon" size={24} />
            <span className="reminders-count">{reminders.length}</span>
          </div>
        </button>

        {showForm && (
          <div className="reminders-dropdown">
            <div className="reminders-dropdown-header">
              <div className="reminders-title-section">
                <Clock className="reminders-title-icon" size={20} />
                <h3 className="reminders-title">Reminders</h3>
              </div>
              <button
                className="close-reminders-btn"
                onClick={() => setShowForm(false)}
              >
                <X size={18} />
              </button>
            </div>

            {message && <p className="reminders-dropdown-message">{message}</p>}

            <div className="reminders-dropdown-form">
              <div className="dropdown-form-grid">
                <input
                  type="text"
                  placeholder="Title (e.g., Client meeting)"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  maxLength={100}
                />
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                  min={getTodayDate()}
                />
                <input
                  type="time"
                  value={formData.time}
                  onChange={(e) =>
                    setFormData({ ...formData, time: e.target.value })
                  }
                />
              </div>
              <button className="dropdown-add-btn" onClick={handleAddReminder}>
                <Plus size={16} />
                Add Reminder
              </button>
            </div>

            <div className="reminders-dropdown-list">
              {sortedReminders.length === 0 ? (
                <div className="dropdown-empty-state">
                  <Bell size={32} />
                  <p>No reminders set</p>
                </div>
              ) : (
                sortedReminders.slice(0, 5).map((reminder) => (
                  <div key={reminder.id} className="dropdown-reminder-item">
                    <div className="dropdown-reminder-info">
                      <span className="dropdown-reminder-title">
                        {reminder.title}
                      </span>
                      <span className="dropdown-reminder-time">
                        {reminder.date} at {reminder.time}
                      </span>
                    </div>
                    <button
                      className="dropdown-delete-btn"
                      onClick={() => handleDeleteReminder(reminder.id)}
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                ))
              )}
              {sortedReminders.length > 5 && (
                <div className="dropdown-more-count">
                  +{sortedReminders.length - 5} more reminders
                </div>
              )}
            </div>

            <div className="reminders-dropdown-footer">
              <button
                onClick={handleViewAllReminders}
                className="view-all-link"
              >
                View all reminders →
              </button>
            </div>
          </div>
        )}
      </div>

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

export default GlobalReminders;
