import { Weather } from "./weather.model";

export class HourlyWeather {
  weather: Weather;
  temp: number;
  date: Date;

  constructor(args: any = { weather: [] }) {
    this.weather = new Weather(args.weather[0]);
    this.temp = args.temp;
    // Converts seconds to miliiseconds to create date objcet
    this.date = new Date(args.dt * 1000);
  }
}
