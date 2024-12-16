import { forwardRef } from "react";
import styles from "./textarea.module.css";

export const TextArea = forwardRef(
  ({ label, id, placeholder, error, ...rest }, ref) => {
    return (
      <>
        <div className={`input-group d-flex flex-nowrap ${styles.inputGroup}`}>
          <div className="form-floating">
            <textarea
              className={`${styles.textArea} form-control`}
              id={id}
              placeholder={placeholder}
              ref={ref}
              required
              {...rest}
            />
            <label className={styles.label} htmlFor={id}>
              {label}
            </label>
          </div>
        </div>

        <p className={`${styles.errorMessage} ${error ? styles.visible : styles.invisible}`}>
          {error}
        </p>
      </>
    );
  }
);
