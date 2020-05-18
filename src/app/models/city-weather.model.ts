import { Weather } from "./weather.model";
export class CityWeather {
  name: string;
  weather: Weather;
  temp: number;
  wind: number;
  longitude: number;
  latitude: number;
  cityIcon: string;
  constructor(args: any = { weather: [], main: {}, wind: {}, coord: {} }) {
    this.name = args.name;
    this.weather = new Weather(args.weather[0]);
    this.temp = args.main.temp;
    this.wind = args.wind.speed;
    this.longitude = args.coord.lon;
    this.latitude = args.coord.lat;
  }
}
