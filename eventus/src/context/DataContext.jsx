import{ createContext, useState, useEffect } from "react";
export const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const [eventos, setEventos] = useState([]);
  // const url = "https://jsonplaceholder.typicode.com/posts/";
const url = "http://localhost:3333/sampleNews";
  const fetchEventos = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setEventos(data);
    } catch (error) {
      console.error("Erro ao buscar eventos:", error);
    }
  };
  useEffect(() => {
    fetchEventos();
  }, []);
  return(
    <DataContext.Provider value={{ eventos }}>
      {children}
    </DataContext.Provider>
  )
};