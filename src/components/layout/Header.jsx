import { useEffect } from "react";
import "./Header.css";

const Header = ({ onNavigate, activeSection }) => {
  const navItems = [
    { id: "ticket", label: "Ticket Template" },
    { id: "rma", label: "RMA" },
    { id: "command", label: "Command List" },
    { id: "sorr", label: "SORR" },
    { id: "timezone", label: "Time Zone Converter" },
    { id: "hardware", label: "Hardware Helper" },
    { id: "reminder", label: "Reminders" },
    { id: "overnight", label: "Overnight Task" },
    { id: "save", label: "Save Data" },
  ];

  useEffect(() => {
    const handleNavigateEvent = (event) => {
      if (event.detail === "reminder") {
        onNavigate("reminder");
      }
    };

    window.addEventListener("navigate-to-section", handleNavigateEvent);

    return () => {
      window.removeEventListener("navigate-to-section", handleNavigateEvent);
    };
  }, [onNavigate]);

  return (
    <header className="header-container">
      <div className="header-text-logo">AGENT TOOL</div>
      <nav>
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`nav-btn ${activeSection === item.id ? "active" : ""}`}
            onClick={() => onNavigate(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Header;
