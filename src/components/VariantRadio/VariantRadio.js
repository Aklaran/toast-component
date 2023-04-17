import React from "react";
import styles from "../ToastPlayground/ToastPlayground.module.css";

function VariantRadio({ options, selectedOption, setSelectedOption }) {
  return (
    <>
      <div className={styles.label}>Variant</div>
      <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
        {options.map((option) => (
          <label key={option} htmlFor={`variant-${option}`}>
            <input
              id={`variant-${option}`}
              type="radio"
              name="variant"
              value={{ option }}
              checked={option === selectedOption}
              onChange={() => {
                setSelectedOption(option);
              }}
            />
            {option}
          </label>
        ))}

        {/* TODO Other Variant radio buttons here */}
      </div>
    </>
  );
}

export default VariantRadio;
