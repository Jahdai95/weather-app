import "./widget.css";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import { useNavigate } from "react-router-dom";
import { Divider } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { saveStorage, getStorage, deleteStorage } from "../../utils/storage";
import { WeatherDTO } from "../../services/weather.service";

interface widgetProps {
  data: WeatherDTO;
}

function Widget(props: widgetProps) {
  const navigate = useNavigate();
  const { data } = props;
  const [isFavorite, setIsFavorite] = useState(false);
  const country = data.location.name;

  useEffect(() => {
    isMyFavorite();
  }, []);

  const isMyFavorite = () => {
    const valueStorage = getStorage(country);
    if (valueStorage) {
      const countryStorage = valueStorage.location.name;
      if (country === countryStorage) {
        setIsFavorite(true);
      }
    } else {
      setIsFavorite(false);
    }
  };

  const addFavorite = () => {
    if (!isFavorite) {
      saveStorage(country, data);
    } else {
      deleteStorage(country);
    }
    isMyFavorite();
  };

  return (
    <Card className="card-widget">
      <CardContent>
        <div className="mb-16">
          <h2 className="quicksand-700 text-center">{data.location.name}</h2>
          <h2 className="quicksand-700 text-center">{data.location.country}</h2>
        </div>
        <Divider />
        <div className="container-condition">
          <img
            src={data.current.condition.icon}
            alt={data.current.condition.text}
            loading="lazy"
          />
          <p className="quicksand-200 fontSize-larger">
            {data.current.feelslike_c}°
          </p>
        </div>

        <div className="mb-16">
          <p className="quicksand-200 fontSize-medium text-center">
            {data.current.condition.text}
          </p>
        </div>

        <div className="mb-16 ">
          <p className="quicksand-200 fontSize-small text-center">
            Humedad: {data.current.humidity} %
          </p>
          <p className="quicksand-200 fontSize-small text-center">
            Viento:{data.current.wind_kph} k/h
          </p>
        </div>

        <Divider />
        <div className="card-footer">
          <IconButton onClick={() => navigate("/home")}>
            <ArrowBackIosNewOutlinedIcon />
          </IconButton>

          <IconButton
            onClick={() => addFavorite()}
            disabled={data.location.name === ""}
          >
            <FavoriteIcon color={isFavorite && data ? "primary" : "inherit"} />
          </IconButton>
        </div>
      </CardContent>
    </Card>
  );
}

export default Widget;
