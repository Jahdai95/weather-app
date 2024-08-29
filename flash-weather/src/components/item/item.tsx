import "./item.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useWeatherContext } from "../../providers/weather.provider";

function Item() {
  const { data } = useWeatherContext();
  return data.forecast.forecastday.map((item) => {
    return (
      <Card className="card-item" key={item.date}>
        <CardContent>
          <div className="container-condition">
            <img
              src={item.day.condition.icon}
              alt={item.day.condition.text}
              loading="lazy"
            />
            <p className="quicksand-200 fontSize-medium">
              {item.day.maxtemp_c}°
            </p>
          </div>
          <div>
            <p className="quicksand-200 fontSize-small">
              Min: {item.day.mintemp_c}°
            </p>
            <p className="quicksand-200 fontSize-small">
              Lluvia: {item.day.daily_chance_of_rain}%
            </p>
          </div>

          <div>
            <p className="quicksand-200 fontSize-small ">{item.date}</p>
          </div>
        </CardContent>
      </Card>
    );
  });
}

export default Item;
