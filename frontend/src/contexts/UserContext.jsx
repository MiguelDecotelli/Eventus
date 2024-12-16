import { createContext, useContext, useEffect, useState } from "react";
import { makeRequest } from "../utils/makeRequest";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userLogged, setUserLogged] = useState(null); // Stores the logged-in user's data
  const [user, setUser] = useState(undefined); // Stores the current user
  const [token, setToken] = useState(""); // Stores the authentication token

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (storedToken) {
      setToken(storedToken);
    }

    if (storedUser) {
      setUser(storedUser);
    }

    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const usersData = await makeRequest("/users", "GET");
      const username = localStorage.getItem("user");

      const foundUser = usersData.find((user) => user.username === username);

      if (foundUser) {
        setUserLogged(foundUser);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  // Sets the user and saves it to localStorage
  function setUserAndStore(user) {
    localStorage.setItem("user", user);
    setUser(user);
  }

  // Clears user data on logout
  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken("");
    setUser(undefined);
    setUserLogged(null);
  }

  const values = {
    userLogged,
    user,
    token,
    logout,
    setUser: setUserAndStore,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

// Custom hook to consume the UserContext
export function useUser() {
  return useContext(UserContext);
}
