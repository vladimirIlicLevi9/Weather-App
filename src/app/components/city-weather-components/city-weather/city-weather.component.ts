import { Component, OnInit, Input } from "@angular/core";
import { CityWeather } from "src/app/models/city-weather.model";
import { CityWeatherService } from "src/app/services/city-weather.service";
import { HourlyWeather } from "src/app/models/hourly-weather.model";

// Path to city images folder
const imagePath = "../../../../assets/images/cities/";

@Component({
  selector: "app-city-weather",
  templateUrl: "./city-weather.component.html",
  styleUrls: ["./city-weather.component.scss"],
})
export class CityWeatherComponent implements OnInit {
  @Input()
  cityId: number;

  cityWeather: CityWeather;
  hourlyCityWeather: HourlyWeather[] = [];
  // Hides component from view if an error occurs while getting weather info
  showCityWeather: boolean;

  constructor(private cityWeatherService: CityWeatherService) {}

  ngOnInit(): void {
    this.getCityWeather(this.cityId);
  }

  // Calls cityWeatherServices to get current weather information and store it in cityWeather
  getCityWeather(cityId: number): void {
    this.cityWeatherService.getCityWeather(cityId, imagePath).subscribe(
      (response) => {
        this.cityWeather = response;
        this.showCityWeather = true;
      },
      () => {
        this.showCityWeather = false;
      }
    );
  }

  // Calls cityWeatherService to get hourly weather info and stores it in hourlyCityWeather
  getHourlyCityWeather(): void {
    this.cityWeatherService
      .getHourlyCityWeather(
        this.cityWeather.latitude,
        this.cityWeather.longitude
      )
      .subscribe((response) => (this.hourlyCityWeather = response));
  }

  // Hides hourly wether component
  hideHourlyCityWeather(): void {
    this.hourlyCityWeather = [];
  }
}
