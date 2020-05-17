import { Component, OnInit, Input } from "@angular/core";
import { HourlyWeather } from "src/app/models/hourly-weather.model";

@Component({
  selector: "app-hourly-wether",
  templateUrl: "./hourly-wether.component.html",
  styleUrls: ["./hourly-wether.component.scss"],
})
export class HourlyWetherComponent implements OnInit {
  @Input()
  hourlyWeather: HourlyWeather;

  constructor() {}

  ngOnInit(): void {}
}
