import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DataProvider } from "./contexts/DataContext"
import { UserProvider } from "./contexts/UserContext"

import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Signup } from "./pages/signup";
import { Events } from "./pages/events";
import { News } from "./pages/news"
import { History } from "./pages/history"
import { Contact } from "./pages/contact"

export const MainRoutes = () => {
    return (
        <DataProvider>
            <Router>
                <UserProvider>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/news" element={<News />} />
                        <Route path="/history" element={<History />} />
                        <Route path="/events" element={<Events />} />
                        <Route path="/contact" element={<Contact />} />
                        {/* <Route path="/eventDetails/:id" element={<EventDetails />} /> */}
                        {/* <Route path="/pasteventDetails/:id" element={<PastEventDetails />} /> */}
                        {/* <Route path="/purchaseSimulation/:id" element={<PurchaseSimulation />} /> */}

                        {/* ROUTE NOT FIND */}
                        <Route path="*" element={<h1>Página não encontrada (404)</h1>} />
                    </Routes>
                </UserProvider>
            </Router>
        </DataProvider>

    );
};
