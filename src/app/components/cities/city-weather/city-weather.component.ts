import { Component, OnInit, Input } from "@angular/core";
import { CityWeather } from "src/app/models/city-weather.model";
import { CityWeatherService } from "src/app/services/city-weather.service";
import { HourlyWeather } from "src/app/models/hourly-weather.model";
import { CitiesEnum } from "src/app/enums/cities.enum";

@Component({
  selector: "app-city-weather",
  templateUrl: "./city-weather.component.html",
  styleUrls: ["./city-weather.component.scss"],
})
export class CityWeatherComponent implements OnInit {
  @Input()
  cityId: number;

  imagePath: String = "../../../../assets/images/cities/";
  cityWeather: CityWeather = new CityWeather();
  hourlyCityWeather: HourlyWeather[] = [];

  constructor(private cityWeatherService: CityWeatherService) {}

  ngOnInit(): void {
    this.getCityWeather(this.cityId);
  }

  //Calls cityWeatherServices to get current weather information and store it in cityWeather
  getCityWeather(cityId: number): void {
    this.cityWeatherService.getCityWeather(cityId).subscribe(
      (response) => {
        this.cityWeather = new CityWeather({ ...response });
        this.setCiityIcon(this.cityId);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  //Calls cityWeatherService to get hourly weather info and stores it in hourlyCityWeather
  getHourlyCityWeather() {
    this.cityWeatherService
      .getHourlyCityWeather(this.cityWeather.lat, this.cityWeather.lon)
      .subscribe(
        (response) => {
          response.hourly.forEach((element) => {
            this.hourlyCityWeather.push(new HourlyWeather(element));
          });
        },
        (error) => {
          console.log(error);
        }
      );
  }

  //Hides hourly wether component
  hideHourlyCityWeather() {
    this.hourlyCityWeather = [];
  }

  //Sets city icon path in CityWeather object based on cityId
  setCiityIcon(cityId: number) {
    switch (cityId) {
      case CitiesEnum.BERLIN:
        this.cityWeather.cityIcon = this.imagePath + "berlin.png";
        break;
      case CitiesEnum.PARIS:
        this.cityWeather.cityIcon = this.imagePath + "paris.png";
        break;
      case CitiesEnum.MADRID:
        this.cityWeather.cityIcon = this.imagePath + "madrid.png";
        break;
      case CitiesEnum.ROME:
        this.cityWeather.cityIcon = this.imagePath + "rome.png";
        break;
      case CitiesEnum.LONDON:
        this.cityWeather.cityIcon = this.imagePath + "london.png";
        break;
      default:
        this.cityWeather.cityIcon = this.imagePath + "city.png";
        break;
    }
  }
}
