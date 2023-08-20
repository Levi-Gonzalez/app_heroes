import  {HeroeCard}  from "./";
import { getHeroesByPublisher } from "../helpers";
import { useMemo } from "react";
const HeroesLista = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <>
      <div className="row rows-cols-1 rows-cols-md-3 g-3">
        {heroes.map((heroe) => (<HeroeCard key={heroe.id} heroe={...heroe}/>))}
      </div>
    </>
  );
};

export default HeroesLista;
