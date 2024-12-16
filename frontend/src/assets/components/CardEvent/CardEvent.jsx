
import { Link } from "react-router-dom";
import styles from "./CardEvent.module.css";

export const CardEvent = ({ event }) => {
  if (!event) {
    alert("não tem card")
    return null; // Prevent rendering if no event data is passed
  }

  return (
    <div className={styles.card}>
      <img
        src={event.image}
        className={`card-img-top ${styles.cardImage}`}
        alt="Card image" />
      <div className={`${styles.cardBody} d-flex flex-column`}>
        <h4 className={styles.cardTitle}>{event.title}</h4>
        <p className={styles.cardText}>{event.description}</p>
        <div className="mt-auto d-flex justify-content-center">
          <Link className="btn btn-orange mx-auto" to={`/eventDetails/${event.id}`}>
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};
