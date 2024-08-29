import "./App.css";
import MainRouter from "./routes/mainRoutes";

import { WeatherProvider } from "./providers/weather.provider";

function App() {
  return (
    <WeatherProvider>
      <MainRouter />
    </WeatherProvider>
  );
}

export default App;
