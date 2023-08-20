import { Link } from "react-router-dom";
//componente que no se exporta y solo vive acá:
const CaracteristicasDelHeroe = ({ alter_ego, characters }) => {
  return alter_ego === characters 
  ? <></>    //retorna nada.
  : <p>{characters}</p>;
};

const HeroeCard = ({ heroe }) => {
  const { id, superhero, publisher, alter_ego, first_appearance, characters } =
    heroe;
  const imagen = `../../../assets/heroes/${id}.jpg`;

  return (
    <div className="col-md-3 mb-3 animate__animated animate__fadeIn">
      <div className="card h-100">
        <img src={imagen} className="card-img-top" alt={superhero} />
        <div className="card-body text-center">
          <h5 className="card-title">{superhero}</h5>
          <p className="card-text">{alter_ego}</p>
          <p>{publisher}</p>
          <CaracteristicasDelHeroe
            characters={characters}
            alter_ego={alter_ego}
          />
          <p className="card-text">
            <small className="text-muted">{first_appearance}</small>
          </p>
          <p> </p>
          <Link to={`/heroe/${id}`} className="text-decoration-none">Ir</Link>
        </div>
      </div>
    </div>
  );
};

export default HeroeCard;
