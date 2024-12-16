import { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const url = "http://localhost:3333/sampleNews";

  const fetchEvents = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <DataContext.Provider value={{ events }}>
      {children}
    </DataContext.Provider>
  );
};
