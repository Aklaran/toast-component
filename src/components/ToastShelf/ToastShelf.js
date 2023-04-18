import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

import { ToastContext } from "../ToastProvider/ToastProvider";

function ToastShelf() {
  const { activeToasts } = React.useContext(ToastContext);

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aira-label="Notification"
    >
      {activeToasts.map(({ id, message, variant }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast id={id} message={message} variant={variant}>
            Example notice toast
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
