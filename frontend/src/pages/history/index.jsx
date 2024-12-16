import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import { AppLayout } from "../../assets/components/AppLayout/AppLayout";
import styles from "./history.module.css";

export const History = () => {
  const { events } = useContext(DataContext);

  const pastEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    const today = new Date();
    return eventDate < today;
  });

  return (
    <div>
      <AppLayout>
        <div className={styles.eventHistory}>
          <div className={`custom-gradient p-4 ${styles.header}`}>
            <h2 className={styles.historyTitle}>Event History</h2>
          </div>
          {pastEvents.length === 0 ? (
            <p className={styles.noEventsMessage}>No past events available.</p>
          ) : (
            <div className={styles.historySections}>
              {pastEvents.map((event, index) => (
                <section className={styles.historySection} key={index}>
                  <Link
                    to={`/pastEventDetails/${event.id}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <div>
                      <h3 className={styles.eventTitle}>{event.title}</h3>
                      <p className={styles.eventDescription}>{event.description}</p>
                      <p className={styles.eventDate}>Date: {event.date}</p>
                    </div>
                  </Link>
                </section>
              ))}
            </div>
          )}
        </div>
      </AppLayout>
    </div>
  );
};
