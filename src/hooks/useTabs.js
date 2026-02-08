import { useState, useCallback, useRef } from "react";

export const useTabs = () => {
  const [tabs, setTabs] = useState([]);
  const [activeTab, setActiveTab] = useState(null);
  const [tabCount, setTabCount] = useState(0);
  const isCreatingTab = useRef(false);

  const createTab = useCallback(() => {
    // Prevent double creation in StrictMode
    if (isCreatingTab.current) {
      return;
    }

    isCreatingTab.current = true;
    const newTabId = `ticket-${tabCount + 1}`;
    setTabCount((prev) => prev + 1);
    setTabs((prev) => [...prev, newTabId]);
    setActiveTab(newTabId);

    // Reset flag after state update
    setTimeout(() => {
      isCreatingTab.current = false;
    }, 0);

    return newTabId;
  }, [tabCount]);

  const closeTab = useCallback(
    (tabId) => {
      setTabs((prev) => {
        const newTabs = prev.filter((id) => id !== tabId);
        if (activeTab === tabId && newTabs.length > 0) {
          setActiveTab(newTabs[newTabs.length - 1]);
        }
        return newTabs;
      });
    },
    [activeTab],
  );

  const switchTab = useCallback((tabId) => {
    setActiveTab(tabId);
  }, []);

  return {
    tabs,
    activeTab,
    createTab,
    closeTab,
    switchTab,
  };
};
