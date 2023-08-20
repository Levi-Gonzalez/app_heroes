import { Routes, Route } from "react-router-dom";
import { LoginPages } from "../auth";
import HeroesRoutes from "../heroes/routes/HeroesRoutes";

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPages />} />
        <Route path="/*" element={<HeroesRoutes />} />
      </Routes>
    </>
  );
};
