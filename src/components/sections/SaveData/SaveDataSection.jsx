import { useState } from "react";
import { useLocalStorage } from "@hooks/useLocalStorage";
import DataCard from "./DataCard";
import "./SaveDataSection.css";

const SaveDataSection = () => {
  const [savedItems, setSavedItems] = useLocalStorage("savedItems", []);
  const [inputValue, setInputValue] = useState("");
  const [message, setMessage] = useState("");

  const handleSave = () => {
    if (!inputValue.trim()) {
      setMessage("Enter data before saving!");
      setTimeout(() => setMessage(""), 3000);
      return;
    }

    setSavedItems([...savedItems, inputValue]);
    setMessage(`Data saved: ${inputValue}`);
    setInputValue("");
    setTimeout(() => setMessage(""), 3000);
  };

  const handleDelete = (index) => {
    const item = savedItems[index];
    const newItems = savedItems.filter((_, i) => i !== index);
    setSavedItems(newItems);
    setMessage(`Deleted: ${item}`);
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <section className="save-data-section">
      <div className="save-data-header">
        <h2>
          Save <span>Data</span>
        </h2>
      </div>

      <div className="save-data-inputs">
        <input
          type="text"
          id="data-input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSave()}
          placeholder="Enter data"
        />
        <button id="btn-save" onClick={handleSave}>
          Save
        </button>
        {message && <p id="save-message">{message}</p>}
      </div>

      <div className="save-data-container">
        {savedItems.map((item, index) => (
          <DataCard
            key={index}
            data={item}
            onDelete={() => handleDelete(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default SaveDataSection;
