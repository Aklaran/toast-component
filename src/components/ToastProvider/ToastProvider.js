import React from "react";
import useKeyDown from "../../hooks/useKeyDown";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [activeToasts, setActiveToasts] = React.useState([]);

  useKeyDown("Escape", dismissAllToasts);

  function addToast(message, variant) {
    const toast = {
      id: Math.random(),
      message: message,
      variant: variant,
    };

    setActiveToasts([...activeToasts, toast]);
  }

  function removeToast(id) {
    const index = activeToasts.findIndex((toast) => toast.id === id);
    setActiveToasts(activeToasts.toSpliced(index, 1));
  }

  function dismissAllToasts() {
    setActiveToasts([]);
  }

  return (
    <ToastContext.Provider value={{ activeToasts, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
