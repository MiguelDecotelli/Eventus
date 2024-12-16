import PropTypes from "prop-types";
import styles from "./image.module.css";

export function DynamicImage({ src, alt }) {
  return <img src={src} className={styles.imageHome} alt={alt} />;
}

DynamicImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
