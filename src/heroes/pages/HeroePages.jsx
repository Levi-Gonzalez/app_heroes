import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useMemo } from "react";
import { getHeroeById } from "../helpers";

const Heroe = () => {
  const { id } = useParams();
  //recuerda el resultado de la funcion y evita que se rerenderice el componente evitando demora en el componente
  const heroe = useMemo(() => getHeroeById(id), [id]);
  const navigate = useNavigate();


  if (!heroe) {
    return <Navigate to={"/marvel"} />;
  }

  const volverAlInicio = () => {
    navigate(-1);
  };

  const { superhero, publisher, alter_ego, first_appearance, characters } =
    heroe;

  const imagen = `../../../assets/heroes/${id}.jpg`;

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={imagen}
          alt={superhero}
          className="img-thumbnail img-fluid shadow-lg animate__animated animate__fadeIn"
        />
      </div>
      <div className="col-8">
        <h1 className="fw-bold text-uppercase">{superhero}</h1>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b className="text-capitalize">personalidad: </b>
            {alter_ego}
          </li>
          <li className="list-group-item">
            <b className="text-capitalize">universo: </b>
            {publisher}
          </li>
          <li className="list-group-item">
            <b className="text-capitalize">primer Apariencia: </b>
            {first_appearance}
          </li>
          <h5 className="mt-3"> Personaje</h5>
          <p>{characters}</p>
        </ul>
        <div className="d-flex justify-content-end">
          <button
            className="btn btn-primary fw-semibold text-uppercase"
            onClick={volverAlInicio}
          >
            Regresar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Heroe;
