import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "../../ui";
import { BuscarPages, DcPages, HeroePages, MarvelPages } from "../pages";

const HeroesRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container p-2">
        <Routes>
          <Route path="marvel" element={<MarvelPages />} />
          <Route path="dc" element={<DcPages />} />
          <Route path="heroe/:id" element={<HeroePages />} />
          <Route path="buscar" element={<BuscarPages />} />
        </Routes>
      </div>
    </>
  );
};

export default HeroesRoutes;
