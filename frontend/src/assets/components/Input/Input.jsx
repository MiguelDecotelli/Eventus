import { forwardRef } from "react";
import styles from "./input.module.css";


export const Input = forwardRef(
  ({ label, type = "text", id, placeholder, error, ...rest }, ref) => {
    return (
      <>
        <div className={`input-group d-flex flex-nowrap ${styles.inputContainer}`}>
          <div className="form-floating">
            <input
              type={type}
              className={`${styles.input} form-control`}
              id={id}
              placeholder={placeholder}
              ref={ref}
              {...rest}
            />
            <label
              htmlFor={id}
              className={styles.label}
            >
              {label}
            </label>
          </div>
        </div>
        {error && <p className={`${styles.errorMessage} text-danger`}>{error}</p>}
      </>
    );
  }
);
