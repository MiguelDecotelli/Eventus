import { useState, useEffect, useContext } from "react";
import { CardEvent } from "../../assets/components/CardEvent/CardEvent";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { DataContext } from "../../contexts/DataContext";
import { AppLayout } from "../../assets/components/AppLayout/AppLayout";

import styles from "./events.module.css"; // Importando o CSS module

export const Events = () => {
  const { events } = useContext(DataContext);

  const futureEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    const today = new Date();
    return eventDate > today;
  });

  const [search, setSearch] = useState("");
  const [displayedEvents, setDisplayedEvents] = useState(futureEvents);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);

  // useEffect(() => {
  //   const filteredEvents = futureEvents.filter(
  //     (event) =>
  //       event.title.toLowerCase().includes(search.toLowerCase()) ||
  //       event.id.toString().includes(search)
  //   );
  //   setDisplayedEvents(filteredEvents);
  // }, [search, futureEvents]);

  useEffect(() => {
    if (events.length > 0) {
      const filteredEvents = futureEvents.filter(
        (event) =>
          event.title.toLowerCase().includes(search.toLowerCase()) ||
          event.id.toString().includes(search)
      );
      setDisplayedEvents(filteredEvents);
    }
  }, [search, events]);

  if (!displayedEvents.length) {
    return (
      <div className={styles.nextEvents}>
        <AppLayout>
          <h1 className={styles.nextEventsTitle}>Loading events...</h1>
        </AppLayout>
      </div>
    );
  }


  const paginate = (events, pageNumber) => {
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return events.slice(startIndex, endIndex);
  };

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  // const onDragEnd = (result) => {
  //   if (!result.destination) return;

  //   const reordered = reorder(displayedEvents, result.source.index, result.destination.index);
  //   setDisplayedEvents(reordered);
  // };

const onDragEnd = (result) => {
  if (!result.destination || displayedEvents.length === 0) return;

  const reordered = reorder(displayedEvents, result.source.index, result.destination.index);
  setDisplayedEvents(reordered);
};


  const totalPages = Math.ceil(displayedEvents.length / itemsPerPage);
  const currentEvents = paginate(displayedEvents, currentPage);

  return (
    <div className={styles.nextEvents}>
      <AppLayout>
        <h1 className={styles.nextEventsTitle}>Search Events</h1>
        <div className={styles.search}>
          <label className={styles.searchLabel}>
            <input
              type="search"
              placeholder="Filtrar Eventos"
              value={search}
              className={styles.searchInput}
              onChange={(e) => setSearch(e.target.value)}
            />
          </label>
        </div>

        {futureEvents.length > 0 && (
          <section>
            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId="events" type="list" direction="horizontal">
                {(provided) => (
                  <ul
                    className={`${styles.listCards} d-flex justify-content-around flex-wrap gap-5 p-5 rounded-4`}
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {currentEvents.map((event, index) => (
                      <Draggable key={event.id} draggableId={event.id.toString()} index={index}>
                        {(provided) => (
                          <li
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <CardEvent event={event} />
                          </li>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </ul>
                )}
              </Droppable>
            </DragDropContext>
          </section>
        )}

        <div className={`${styles.pagination} d-flex justify-content-center align-items-center mt-4`}>
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            <FaChevronLeft />
          </button>
          <span>{`Page ${currentPage} of ${totalPages}`}</span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            <FaChevronRight />
          </button>
        </div>
      </AppLayout>
    </div>
  );
};
