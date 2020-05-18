import { Weather } from "./weather.model";
export class CityWeather {
  name: String;
  weather: Weather;
  temp: number;
  wind: number;
  lon: number;
  lat: number;
  cityIcon: String;
  constructor(args: any = { weather: [], main: {}, wind: {}, coord: {} }) {
    this.name = args.name;
    this.weather = new Weather(args.weather[0]);
    this.temp = args.main.temp;
    this.wind = args.wind.speed;
    this.lon = args.coord.lon;
    this.lat = args.coord.lat;
  }
}
