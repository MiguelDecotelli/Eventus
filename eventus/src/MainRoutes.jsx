import { DataProvider } from './context/DataContext';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { SignUp } from "./pages/signup";
import { Login } from "./pages/login";
import { Contact } from "./pages/contact";
import { UserProvider } from "./context/UserContext";
// import { History } from "./pages/history";
import { News } from "./pages/news";
import { NextEvents } from "./pages/nextEvents";
import { DataProvider } from "./context/DataContext";
import { EventDetails } from "./pages/EventDetails";
import { PurchaseSimulation } from "./pages/purchaseSimulation";

function MainRoutes() {
	return (
		<DataProvider>
			<Router>
				<UserProvider>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/signup" element={<SignUp />} />
						<Route path="/login" element={<Login />} />
						<Route path="/contact" element={<Contact />} />
						{/* <Route path="/history" element={<History />} /> */}
						<Route path="/news" element={<News />} />
						<Route path="/nextEvents" element={<NextEvents />} />
						<Route path="/eventDetails/:id" element={<EventDetails />} />
						<Route path="/purchaseSimulation/:id" element={<PurchaseSimulation />} />

						{/* BASE ROTA NÃO ENCONTRADA */}
						<Route path="*" element={<h1>Página não encontrada (404)</h1>} />
					</Routes>
				</UserProvider>
			</Router>
		</DataProvider>
	);
}

export default MainRoutes;
