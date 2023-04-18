import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [activeToasts, setActiveToasts] = React.useState([]);

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

  return (
    <ToastContext.Provider value={{ activeToasts, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
