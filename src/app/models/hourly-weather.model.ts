import { Weather } from "./weather.model";

export class HourlyWeather {
  weather: Weather;
  temp: number;
  dt: Date;

  constructor(args: any = { weather: [] }) {
    this.weather = new Weather(args.weather[0]);
    this.temp = args.temp;
    this.dt = new Date(args.dt * 1000);
  }
}
