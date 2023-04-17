import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts, setToasts }) {
  function removeToast(id) {
    const index = toasts.findIndex((toast) => toast.id === id);
    setToasts(toasts.toSpliced(index, 1));
  }

  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ id, message, variant }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast
            handleClose={() => removeToast(id)}
            message={message}
            variant={variant}
          >
            Example notice toast
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
