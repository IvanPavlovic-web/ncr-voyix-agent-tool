import { useState } from "react";

const CommandItem = ({ command, onCopy }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    onCopy();
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <div className={`command-item ${command.type}`}>
      <div className="command-content">
        <span className="command-text" style={{ flex: 1, fontWeight: 600 }}>
          {command.name}
        </span>
        <span
          className="command-text"
          style={{
            flex: 2,
            textAlign: "center",
            fontSize: "0.95rem",
            color: "#ccc",
          }}
        >
          {command.desc}
        </span>
        <button className="command-copy-btn" onClick={handleCopy}>
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
};

export default CommandItem;
