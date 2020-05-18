import { Component, Input } from "@angular/core";
import { HourlyWeather } from "src/app/models/hourly-weather.model";

@Component({
  selector: "app-hourly-weather",
  templateUrl: "./hourly-weather.component.html",
  styleUrls: ["./hourly-weather.component.scss"],
})
export class HourlyWeatherComponent {
  @Input()
  hourlyWeather: HourlyWeather;

  constructor() {}
}
