// App.js
import { useState, useEffect } from "react";
import gsap from "gsap";
import Snowfall from "react-snowfall";
import { Moon, Sun } from "lucide-react";
import Preloader from "@components/common/Preloader";
import CopyNotification from "@components/common/CopyNotification";
import GlobalReminders from "@components/common/GlobalReminders";
import Header from "@components/layout/Header";
import ScrollBanner from "@components/layout/ScrollBanner";
import Footer from "@components/layout/Footer";
import TicketTemplate from "@components/sections/TicketTemplate/TicketTemplate";
import CommandList from "@components/sections/Commands/CommandList";
import RMASection from "@components/sections/RMA/RMASection";
import SORRSection from "@components/sections/SORR/SORRSection";
import TimezoneConverter from "@components/sections/Timezone/TimezoneConverter";
import HardwareHelper from "@components/sections/Hardware/HardwareHelper";
import SaveDataSection from "@components/sections/SaveData/SaveDataSection";
import ReminderSection from "@components/sections/Reminder/ReminderSection";
import OvernightTask from "@components/sections/OvernightTask/OvernightTask";
import { useClipboard } from "@hooks/useClipboard";
import "@styles/global.css";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("ticket");
  const [showSnow, setShowSnow] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const { notification } = useClipboard();

  // Snow state
  useEffect(() => {
    const saved = localStorage.getItem("showSnow");
    if (saved !== null) setShowSnow(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("showSnow", JSON.stringify(showSnow));
  }, [showSnow]);

  // Dark mode state
  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved !== null) setDarkMode(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light",
    );
  }, [darkMode]);

  const handlePreloaderComplete = () => {
    setLoading(false);
    const main = document.getElementById("main-content");
    if (main) {
      gsap.from(main, { opacity: 0, y: 30, duration: 1, ease: "power2.out" });
    }
  };

  const handleNavigate = (section) => setActiveSection(section);
  const toggleSnow = () => setShowSnow(!showSnow);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  if (loading) return <Preloader onComplete={handlePreloaderComplete} />;

  return (
    <div id="main-content">
      {showSnow && (
        <Snowfall
          style={{
            position: "fixed",
            width: "100vw",
            height: "100vh",
            pointerEvents: "none",
            zIndex: 9999,
          }}
          snowflakeCount={200}
          color="#dee4fd"
          speed={[0.5, 3]}
          wind={[-0.5, 2]}
          radius={[0.5, 3]}
        />
      )}

      <CopyNotification notification={notification} />
      <Header onNavigate={handleNavigate} activeSection={activeSection} />
      <ScrollBanner />

      <main className="main-container">
        <div style={{ display: activeSection === "ticket" ? "block" : "none" }}>
          <TicketTemplate />
        </div>
        <div style={{ display: activeSection === "rma" ? "block" : "none" }}>
          <RMASection />
        </div>
        <div
          style={{ display: activeSection === "command" ? "block" : "none" }}
        >
          <CommandList />
        </div>
        <div style={{ display: activeSection === "sorr" ? "block" : "none" }}>
          <SORRSection />
        </div>
        <div
          style={{ display: activeSection === "timezone" ? "block" : "none" }}
        >
          <TimezoneConverter />
        </div>
        <div
          style={{ display: activeSection === "hardware" ? "block" : "none" }}
        >
          <HardwareHelper />
        </div>
        <div
          style={{ display: activeSection === "reminder" ? "block" : "none" }}
        >
          <ReminderSection />
        </div>
        <div
          style={{ display: activeSection === "overnight" ? "block" : "none" }}
        >
          <OvernightTask />
        </div>
        <div style={{ display: activeSection === "save" ? "block" : "none" }}>
          <SaveDataSection />
        </div>
      </main>

      <Footer />

      {/* Floating Controls */}
      <div className="floating-controls">
        <button
          className="theme-toggle-btn"
          onClick={toggleDarkMode}
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          data-theme-active={darkMode}
        >
          <div className="theme-btn-content">
            {darkMode ? (
              <Sun className="theme-icon" size={24} />
            ) : (
              <Moon className="theme-icon" size={24} />
            )}
          </div>
          <span className="theme-glow"></span>
        </button>

        <button
          className="snow-toggle-btn"
          onClick={toggleSnow}
          aria-label={showSnow ? "Turn off snow" : "Let it snow"}
          data-snow-active={showSnow}
        >
          <div className="snow-btn-content">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="snowflake-icon"
            >
              <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
              <circle cx="12" cy="12" r="2" />
            </svg>
            <span className="snow-btn-text">LET IT SNOW</span>
          </div>
          <span className="snow-status-indicator"></span>
        </button>
      </div>

      {/* Global Reminders Floating Button */}
      <GlobalReminders />
    </div>
  );
}

export default App;
