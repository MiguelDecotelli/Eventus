import PropTypes from "prop-types";
import styles from "./text.module.css";

export function DynamicText({ title, text }) {
  return (
    <div className={styles.textContainer}>
      <div className={styles.textInfo}>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}

DynamicText.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
