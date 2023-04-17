import React from "react";

import Button from "../Button";

import MessageInput from "../MessageInput";
import VariantRadio from "../VariantRadio";
import Toast from "../Toast";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [message, setMessage] = React.useState("Write yo message here");
  const [variant, setVariant] = React.useState("notice");
  const [isToastShown, setIsToastShown] = React.useState(false);

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <Toast
        isShown={isToastShown}
        setIsShown={setIsToastShown}
        message={message}
        variant={variant}
      />

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <MessageInput message={message} setMessage={setMessage} />
        </div>
        <div className={styles.row}>
          <VariantRadio
            options={VARIANT_OPTIONS}
            selectedOption={variant}
            setSelectedOption={setVariant}
          />
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button onClick={() => setIsToastShown(true)}>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
