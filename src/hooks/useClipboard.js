import { useState, useCallback } from "react";

export const useClipboard = () => {
  const [notification, setNotification] = useState(null);

  const copyToClipboard = useCallback(async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setNotification({ type: "success", message: "Copied to clipboard!" });
      setTimeout(() => setNotification(null), 2300);
      return true;
    } catch (error) {
      setNotification({ type: "error", message: "✗ Failed to copy!" });
      setTimeout(() => setNotification(null), 2300);
      return false;
    }
  }, []);

  return { copyToClipboard, notification };
};
