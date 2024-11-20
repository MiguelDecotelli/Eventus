import ImgCard from "../../img/banner1.jpg";
import { Navbar } from "../../components/Navbar";
import { useParams } from "react-router-dom";
import { useContext } from 'react';
import { DataContext } from '../../context/DataContext';
import { Footer } from "../../components/Footer";
import { Link } from "react-router-dom";


export const EventDetails = () => {
  const { id } = useParams();
  const { eventos } = useContext(DataContext);

  const evento = eventos.find(evento => evento.id === String(id));
  if (!evento) {
    return <div>Evento não encontrado.</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="eventDetails">
        <section className="eventSection">
          <div>
            <h3 className="eventTitle">{evento.title}</h3>
            <p className="eventDescription">{evento.description}</p>
            <p className="eventDescription">{evento.date}</p>
          </div>
          <div>
            <img
              src={evento.image || ImgCard}
              className="eventImage"
              alt="Card image"
            />
            <div className="d-flex justify-content-center mt-5">
              <Link className="btn eventButton" to={`/purchaseSimulation/${evento.id}`}>
                Comprar
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};