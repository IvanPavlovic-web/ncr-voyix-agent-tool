import { useState } from "react";
import { commands } from "@data/commands";
import { useClipboard } from "@hooks/useClipboard";
import CopyNotification from "@components/common/CopyNotification";
import CommandItem from "./CommandItem";
import "./CommandList.css";

const CommandList = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const { copyToClipboard, notification } = useClipboard();

  const filteredCommands = commands.filter(
    (cmd) => activeFilter === "all" || cmd.type === activeFilter,
  );

  const filters = [
    { id: "all", label: "All" },
    { id: "info", label: "Info" },
    { id: "network", label: "Network" },
    { id: "system", label: "System" },
  ];

  return (
    <section className="command-section">
      <CopyNotification notification={notification} />

      <div className="command-header">
        <span>Commands</span>
        <div className="command-filters">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`command-filter-btn ${
                activeFilter === filter.id ? "active" : ""
              }`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      <div className="command-list">
        {filteredCommands.map((command, index) => (
          <CommandItem
            key={index}
            command={command}
            onCopy={() => copyToClipboard(command.cmd)}
          />
        ))}
      </div>
    </section>
  );
};

export default CommandList;
