import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailLocation from "../containers/detailLocation/detailLocation";
import Home from "../containers/home/home";
import Favorites from "../containers/favorites/favorites";

export default function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path={"/detalle"} element={<DetailLocation />} />
        <Route path={"/mis-favoritos"} element={<Favorites />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
