import { Component, OnInit, Input } from "@angular/core";
import { CityWeather } from "src/app/models/city-weather.model";
import { CityWeatherService } from "src/app/services/city-weather.service";
import { HourlyWeather } from "src/app/models/hourly-weather.model";
import { CitiesEnum } from "src/app/enums/cities.enum";
import { ToastrService } from "ngx-toastr";

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

  constructor(
    private cityWeatherService: CityWeatherService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getCityWeather(this.cityId);
  }

  //Logs error and displays message to user if something is wrong(Bad request or server is not working...)
  handleError(error): void {
    console.error(error);
    this.toastr.error("Something went wrong");
  }

  //Calls cityWeatherServices to get current weather information and store it in cityWeather
  getCityWeather(cityId: number): void {
    this.cityWeatherService.getCityWeather(cityId).subscribe(
      (response) => {
        this.cityWeather = new CityWeather({ ...response });
        this.setCiityIcon(this.cityId);
      },
      (error) => {
        this.handleError(error);
      }
    );
  }

  //Calls cityWeatherService to get hourly weather info and stores it in hourlyCityWeather
  getHourlyCityWeather(): void {
    this.cityWeatherService
      .getHourlyCityWeather(this.cityWeather.lat, this.cityWeather.lon)
      .subscribe(
        (response) => {
          response.hourly.forEach((element) => {
            this.hourlyCityWeather.push(new HourlyWeather(element));
          });
        },
        (error) => {
          this.handleError(error);
        }
      );
  }

  //Hides hourly wether component
  hideHourlyCityWeather(): void {
    this.hourlyCityWeather = [];
  }

  //Sets city icon path in CityWeather object based on cityId
  setCiityIcon(cityId: number): void {
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
