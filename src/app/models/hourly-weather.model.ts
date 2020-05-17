import { Weather } from "./weather.model";

export class HourlyWeather {
  weather: Weather;
  temp: String;
  wind_speed: String;
  dt: Date;

  constructor(args: any = { weather: [] }) {
    this.weather = new Weather(args.weather[0]);
    this.temp = args.temp;
    this.wind_speed = args.wind_speed;
    this.dt = new Date(args.dt * 1000);
  }
}
