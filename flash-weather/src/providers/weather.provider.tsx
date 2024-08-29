import { createContext, useState, ReactNode, useContext } from "react";
import { WeatherDTO } from "../services/weather.service";

interface WeatherContextType {
  data: WeatherDTO;
  getData: (value: WeatherDTO) => void;
}

export const WeatherContext = createContext<WeatherContextType | null>(null);

const defaultData = {
  location: {
    name: "",
    region: "",
    country: "",
    lat: 0,
    lon: 0,
    tz_id: "",
    localtime_epoch: 0,
    localtime: "",
  },
  current: {
    condition: { text: "", icon: "", code: 0 },
    wind_kph: 0,
    humidity: 0,
    feelslike_c: 0,
  },
  forecast: {
    forecastday: [],
  },
};

export const WeatherProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<WeatherDTO>(defaultData);

  const getData = (value: WeatherDTO) => {
    setData(value);
  };

  return (
    <WeatherContext.Provider value={{ data, getData }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeatherContext = () => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error(
      "useWeatherContext debe ser usado dentro de WeatherProvider, wrapealo =)"
    );
  }
  return context;
};
