import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Widget from "../../components/widget/widget";
import { WeatherDTO } from "../../services/weather.service";
import Wrapper from "../../components/wrapper/wrapper";
import "./favorites.css";
import { getStorage } from "../../utils/storage";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";

const Favorites = () => {
  const navigate = useNavigate();

  const [favorites, setFavorites] = useState<WeatherDTO[]>([]);

  useEffect(() => {
    const keys = Object.keys(localStorage);
    const lastThreeKeys = keys.slice(-3);

    const lastThreeValues = lastThreeKeys.map((key) => {
      const item = getStorage(key);
      return item;
    });

    setFavorites(lastThreeValues.filter((item) => item !== null));
  }, []);

  return (
    <Wrapper>
      {favorites.length > 0 ? (
        <div className="container-favorites">
          {favorites.map((item, index) => (
            <div key={index}>
              <Widget data={item} />
            </div>
          ))}
        </div>
      ) : (
        <h3 className="quicksand-500">
          <IconButton onClick={() => navigate("/")}>
            <ArrowBackIosNewOutlinedIcon />
          </IconButton>
          No tienes ninguna ciudad como favorita
        </h3>
      )}
    </Wrapper>
  );
};

export default Favorites;
