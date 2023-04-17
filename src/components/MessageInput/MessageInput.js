import React from "react";

import styles from "./MessageInput.module.css";

function MessageInput({ message, setMessage }) {
  return (
    <>
      <label
        htmlFor="message"
        className={styles.label}
        style={{ alignSelf: "baseline" }}
      >
        Message
      </label>
      <div className={styles.inputWrapper}>
        <textarea
          id="message"
          className={styles.messageInput}
          value={message}
          onChange={(event) => {
            setMessage(event.target.value);
          }}
        />
      </div>
    </>
  );
}

export default MessageInput;
