import { Carousel } from "../../components/Carousel";
import { Navbar } from "../../components/Navbar";
import { CardEvent } from "../../components/CardEvent";
import { TextTitle } from "../../components/TextTitle";
import { ImagemHome01 } from "../../components/ImagemHome01";
import { TextHome } from "../../components/TextHome";
import { ImagemHome02 } from "../../components/ImagemHome02";
import { Footer } from "../../components/Footer";
import { useState, useEffect, useContext } from 'react';
import { DataContext } from '../../context/DataContext';

export const Home = () => {

	const { eventos } = useContext(DataContext);
	const [renderedEvents, setRenderedEvents] = useState([]);
	const catchRandomEvents = () => {
		if (eventos.length > 0) {
			const RandomEvents = eventos
				.sort(() => Math.random() - 0.5)
				.slice(0, 4);
			setRenderedEvents(RandomEvents);
		}
	};
	useEffect(() => {
		catchRandomEvents();
		const eventTimer = setInterval(() => {
			catchRandomEvents();
		}, 15000);
		return () => clearInterval(eventTimer);
	}, [eventos]);
	return (
		<div className="container-carousel">
			<Navbar />
			<main className="d-flex flex-column gap-0">
				<Carousel />
				<TextTitle />
				<ImagemHome01 />
				<TextHome />
				<ImagemHome02 />
				<div className="cardContainer">
					<section className="d-flex gap-3 align-items-center justify-content-center flex-wrap">
						{renderedEvents.length > 0 ? (
							renderedEvents.map((evento, index) => (
								<CardEvent key={index} evento={evento} />
							))
						) : (
							<p>Carregando eventos...</p>
						)}
					</section>
				</div>
				{/* <section className="d-flex gap-3 align-items-center justify-content-center flex-wrap">
					{renderedEvents.length > 0 ? (
						renderedEvents.map((evento, index) => (
							<CardEvent key={index} evento={evento} />
						))
					) : (
						<p>Carregando eventos...</p>
					)}
				</section> */}
				<Footer />
			</main>
		</div>
	);
};
