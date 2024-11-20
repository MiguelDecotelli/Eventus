import { Link } from "react-router-dom";

export const CardEvent = ({ evento }) => {

  return (
    <div className="card">
      <img src={evento.image} className="card-img-top card-img-custom" alt="Card image" />
      <div className="card-body d-flex flex-column">
        <h4 className="card-title">{evento.title}</h4>
        <p className="card-text">{evento.description}</p>
        <p className="card-text">{evento.date}</p>
        <div className="mt-auto d-flex justify-content-center">
          <Link className="btn btn-orange mx-auto" to={`/eventDetails/${evento.id}`}>
            Detalhes
          </Link>
        </div>
      </div>
    </div>
  )
}