import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import queryString from "query-string";
import { getHeroeByName } from "../helpers";
import HeroeCard from "../components/HeroeCard";

const BuscarPages = () => {
  
  const navigate = useNavigate();
  
  //para saber ubicacion/localicacion de donde nos encontramos.
  const location = useLocation();
  
  //extrae lo que esta en location.search
  const { q = "" } = queryString.parse(location.search);
  const heroes = getHeroeByName(q);
  
  const { buscarHeroe, onInputChange } = useForm({
    // representa el valor actual del campo de búsqueda
    buscarHeroe: q
  });

  const mostrarBusqueda = q.length === 0
  const mostrarError = q.length > 0 && heroes.length === 0

  const handleSubmit = (e) => {
    e.preventDefault();

    if (buscarHeroe.trim().length <= 1) return;
    //se encarga de pasar datos a la url
    navigate(`?q=${buscarHeroe.toLowerCase().trim()}`);
  };

  return (
    <>
      <h1>Buscar</h1>
      <hr />
      <div className="row">
        <div className="col-5 text-center">
          <form action="" onSubmit={handleSubmit}>
            <label
              htmlFor="buscar"
              className="fw-semibold text-uppercase mb-3 fs-4"
            >
              buscando a tu héroe
            </label>
            <input
              type="text"
              name="buscarHeroe"
              id="buscar"
              placeholder="Nombre del Héroe"
              className="form-control"
              autoComplete="off"
              value={buscarHeroe}
              onChange={onInputChange}
            />
            <button
              type="submit"
              className="btn btn-outline-info text-uppercase mt-2 shadow w-100 fw-bold"
            >
              Buscar
            </button>
          </form>
        </div>

        <div className="col-7">
          <h3 className="text-center text-uppercase">resultados</h3>
          <hr />

          <div className="text-center text-uppercase fw-semibold"> 
          {
            /*
            Opcion de mostrar una alerta u otra 
            q === ''
            ? (<div className="alert alert-info "> Buscar un heroe <b>{q}</b></div>)
            : ( heroes.length === 0 && (<div className="alert alert-danger"> No hemos encontrado resultados: <b>{q}</b> </div>))
            */
          }

         
            <div className="alert alert-info " style={{display: mostrarBusqueda ? '' : 'none'}}> Buscar un heroe <b>{q}</b></div>
            <div className="alert alert-danger" style={{display: mostrarError ? '' : "none"}}> No hemos encontrado resultados: <b>{q}</b> </div>
          
          </div>



          <div className="d-flex gap-4 ">
            {heroes.map( heroe => {
              return (
                 <HeroeCard key={heroe.id} heroe={...heroe}/>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default BuscarPages;
