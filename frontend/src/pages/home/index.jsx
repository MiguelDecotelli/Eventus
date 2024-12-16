import { useContext, useEffect, useState } from "react";
import { AppLayout } from "../../assets/components/AppLayout/AppLayout";
import { CardEvent } from "../../assets/components/CardEvent/CardEvent";
import { Carousel } from "../../assets/components/Carousel/Carousel";
import { DynamicImage } from "../../assets/components/DynamicImage/DynamicImage";
import { DynamicText } from "../../assets/components/DynamicText/DynamicText";
import { DataContext } from "../../contexts/DataContext";

import ImagemHome1 from "../../assets/images/anoNovo.png";
import ImagemHome2 from "../../assets/images/gramado01.png";

import styles from "./home.module.css";

export const Home = () => {
  const { events } = useContext(DataContext); // Access events from the context
  const [renderedEvents, setRenderedEvents] = useState([]);

  // Function to fetch random events
  const catchRandomEvents = () => {
    if (events.length > 0) {
      const RandomEvents = events
        .sort(() => Math.random() - 0.5) // Shuffle events
        .slice(0, 4); // Get 4 random events
      setRenderedEvents(RandomEvents);
    }
  };

  useEffect(() => {
    catchRandomEvents();
    const eventTimer = setInterval(() => {
      catchRandomEvents(); // Update random events every 15 seconds
    }, 15000);
    return () => clearInterval(eventTimer); // Cleanup timer on unmount
  }, [events]);

  return (
    <div className="container-carousel">
      <AppLayout>
        <main className={styles.homeMain}>
          <Carousel />
          <DynamicText
            title="Bem-vindo a EVENTUS!"
            text="Aqui, você encontra ingressos para os espetáculos mais aguardados, 
            festivais incríveis e atrações turísticas imperdíveis. Explore uma plataforma 
            fácil e segura, pensada para conectar você às melhores experiências culturais, 
            musicais e de entretenimento. Aproveite nossas dicas de viagem, fique por dentro 
            das news e garanta sua presença nos eventos que mais combinam com você. Transforme 
            momentos em memórias inesquecíveis. Viva intensamente cada oportunidade – porque o 
            mundo está repleto de emoções esperando por você!"
          />
          <DynamicImage src={ImagemHome1} alt="Festa de fim de ano" />
          <DynamicText
            title="Explore as Maravilhas de Gramado!"
            text="Visite a deslumbrante Cascata do Caracol, um dos cartões-postais mais icônicos da 
            Serra Gaúcha. Com uma queda de 131 metros, o cenário é perfeito para quem busca contato 
            com a natureza e vistas de tirar o fôlego. Além disso, aproveite o encantador Natal Luz, 
            um espetáculo mágico de luzes, música e performances que transforma Gramado em um verdadeiro 
            conto de fadas. Descubra também vinícolas, cafés coloniais e a rica cultura local que fazem da 
            região um destino inesquecível. Gramado te espera para momentos únicos em todas as estações!"
          />
          <DynamicImage src={ImagemHome2} alt="Centro de Gramado iluminado" />
          <div className={styles.cardContainer}>
            <section className="d-flex gap-3 align-items-center justify-content-center flex-wrap">
              {renderedEvents.length > 0 ? (
                renderedEvents.map((event, index) => (
                  <CardEvent key={index} event={event} />
                ))
              ) : (
                <p>Carregando Eventos...</p>
              )}
            </section>
          </div>
        </main>
      </AppLayout>
    </div>
  );
};
