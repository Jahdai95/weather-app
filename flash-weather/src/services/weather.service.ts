const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "X-RapidAPI-Key": "f5e199cb95msh600b0299ee9cdb6p15beb9jsneb1f8829ba4e",
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
};

export interface WeatherDTO {
  current: {
    condition: { text: string; icon: string; code: number };
    wind_kph: number;
    humidity: number;
    feelslike_c: number;
  };
  location: {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    tz_id: string;
    localtime_epoch: number;
    localtime: string;
  };
  forecast: {
    forecastday: {
      date: string;
      day: {
        maxtemp_c: number;
        mintemp_c: number;
        daily_chance_of_rain: number;
        condition: { text: string; icon: string; code: number };
      };
    }[];
  };
}

export function getWeatherbyLocation(location: string): Promise<WeatherDTO> {
  const API = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${location}&days=3`;
  return fetch(API, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.statusText}`);
      }
      return response.json();
    })
    .catch((error) => {
      //   console.error("Error al llamar a la API:", error);
      throw error;
    });
}
