import { Component, OnInit, Input } from "@angular/core";
import { CityWeather } from "src/app/models/city-weather.model";
import { CityWeatherService } from "src/app/services/city-weather.service";
import { HourlyWeather } from "src/app/models/hourly-weather.model";
import { Cities } from "src/app/enums/cities.enum";
import { ToastrService } from "ngx-toastr";
import { ImageFormat } from "src/app/enums/img-format.enum";

//Path to city images folder
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
  //Hides component from view if an error occurs while getting weather info
  showCityWeather: boolean;

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
        this.showCityWeather = true;
      },
      (error) => {
        this.handleError(error);
        this.showCityWeather = false;
      }
    );
  }

  //Calls cityWeatherService to get hourly weather info and stores it in hourlyCityWeather
  getHourlyCityWeather(): void {
    this.cityWeatherService
      .getHourlyCityWeather(
        this.cityWeather.latitude,
        this.cityWeather.longitude
      )
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
      case Cities.BERLIN:
        this.cityWeather.cityIcon = `${imagePath}berlin${ImageFormat.PNG}`;
        break;
      case Cities.PARIS:
        this.cityWeather.cityIcon = `${imagePath}paris${ImageFormat.PNG}`;
        break;
      case Cities.MADRID:
        this.cityWeather.cityIcon = `${imagePath}madrid${ImageFormat.PNG}`;
        break;
      case Cities.ROME:
        this.cityWeather.cityIcon = `${imagePath}rome${ImageFormat.PNG}`;
        break;
      case Cities.LONDON:
        this.cityWeather.cityIcon = `${imagePath}london${ImageFormat.PNG}`;
        break;
      default:
        this.cityWeather.cityIcon = `${imagePath}city${ImageFormat.PNG}`;
        break;
    }
  }
}
