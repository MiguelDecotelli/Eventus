
import { useState, useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import { AppLayout } from "../../assets/components/AppLayout/AppLayout";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import styles from "./news.module.css";

import "./news.module.css";

export const News = () => {
  const { events } = useContext(DataContext);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of events per page

  // Pagination function
  const paginate = (events, pageNumber) => {
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return events.slice(startIndex, endIndex);
  };

  const totalPages = Math.ceil(events.length / itemsPerPage);
  const currentEvents = paginate(events, currentPage);

  return (
    <div className={styles.containerNews}>
      <AppLayout>
      <main className={styles.newsMain}>
        <section className={`custom-gradient p-4 ${styles.newsHeader}`}>
          <h1 className={styles.newsTitle}>News</h1>
          <p className={styles.newsSubtitle}>Stay updated with the latest news</p>
        </section>
        <section className={styles.newsList}>
          {currentEvents.length > 0 ? (
            currentEvents.map((event) => (
              <Link
                to={`/eventDetails/${event.id}`}
                key={event.id}
                className={styles.newsCard}
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className={styles.newsImage}
                />
                <h2 className={styles.newsItemTitle}>{event.title}</h2>
                <p className={styles.newsDescription}>{event.description}</p>
                <small className={styles.newsDate}>Date: {event.date}</small>
              </Link>
            ))
          ) : (
            <p className={styles.newsLoading}>Loading news...</p>
          )}
        </section>
        <div className={`d-flex justify-content-center align-items-center mt-4 ${styles.pagination}`}>
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={styles.paginationButton}
          >
            <FaChevronLeft />
          </button>
          <span className={styles.paginationInfo}>
            {`Page ${currentPage} of ${totalPages}`}
          </span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={styles.paginationButton}
          >
            <FaChevronRight />
          </button>
        </div>
      </main>
      </AppLayout>
    </div>
  );
};
