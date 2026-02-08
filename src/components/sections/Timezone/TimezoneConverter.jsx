import { useState } from "react";
import { TIMEZONES } from "@data/constants";
import "./TimezoneConverter.css";

const TimezoneConverter = () => {
  const [inputTime, setInputTime] = useState("");
  const [inputZone, setInputZone] = useState("America/Los_Angeles");
  const [outputZones, setOutputZones] = useState([]);
  const [convertedTimes, setConvertedTimes] = useState([]);

  const handleConvert = () => {
    if (!inputTime) {
      setConvertedTimes([{ error: "Please enter a date and time." }]);
      return;
    }

    if (outputZones.length === 0) {
      setConvertedTimes([
        { error: "Please select at least one timezone to convert to." },
      ]);
      return;
    }

    const date = new Date(inputTime);
    const results = outputZones.map((zone) => {
      const formatted = new Intl.DateTimeFormat([], {
        timeZone: zone,
        hour12: false,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZoneName: "short",
      }).format(date);

      const zoneName = TIMEZONES.find((tz) => tz.value === zone)?.label || zone;

      return {
        zone: zoneName,
        time: formatted,
      };
    });

    setConvertedTimes(results);
  };

  const handleOutputZoneChange = (e) => {
    const selected = Array.from(
      e.target.selectedOptions,
      (option) => option.value,
    );
    setOutputZones(selected);
  };

  return (
    <section className="timezone-section">
      <div className="timezone-form">
        <h2 className="tmz-section-header">Time Zone Converter</h2>

        <div className="input-grid">
          <div className="input-column">
            <label htmlFor="input-time">Enter Date & Time</label>
            <input
              type="datetime-local"
              id="input-time"
              className="tmz-input"
              value={inputTime}
              onChange={(e) => setInputTime(e.target.value)}
            />
          </div>

          <div className="input-column">
            <label htmlFor="input-zone">From Timezone</label>
            <select
              id="input-zone"
              className="tmz-input"
              value={inputZone}
              onChange={(e) => setInputZone(e.target.value)}
            >
              {TIMEZONES.map((tz) => (
                <option key={tz.value} value={tz.value}>
                  {tz.label}
                </option>
              ))}
            </select>
          </div>

          <div className="input-column input-full">
            <label htmlFor="output-zones">Convert To (Select Multiple)</label>
            <select
              id="output-zones"
              multiple
              className="tmz-input tmz-multiselect"
              value={outputZones}
              onChange={handleOutputZoneChange}
            >
              {TIMEZONES.map((tz) => (
                <option key={tz.value} value={tz.value}>
                  {tz.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="convert-container">
          <button
            id="convert-time"
            className="control-btn"
            onClick={handleConvert}
            disabled={!inputTime || outputZones.length === 0}
          >
            Convert Time
          </button>
        </div>

        {convertedTimes.length > 0 && (
          <div id="converted-times">
            {convertedTimes.map((result, i) => (
              <div
                key={i}
                className={`tmz-output ${result.error ? "tmz-output-error" : ""}`}
              >
                {result.error ? (
                  result.error
                ) : (
                  <>
                    <strong>{result.zone}</strong>
                    {result.time}
                  </>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TimezoneConverter;
