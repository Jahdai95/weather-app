import { WeatherDTO } from "../services/weather.service";

export function getStorage(key: string) {
  if (key !== null) {
    const value = localStorage.getItem(key);
    const parsedItem = value ? JSON.parse(value) : null;
    return parsedItem;
  }
}

export function saveStorage(key: string, value: WeatherDTO) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function deleteStorage(key: string) {
  localStorage.removeItem(key);
}
