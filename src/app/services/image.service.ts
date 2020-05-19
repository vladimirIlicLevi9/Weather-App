import { Injectable } from "@angular/core";
import { CityWeather } from "../models/city-weather.model";
import { Cities } from "../enums/cities.enum";
import { ImageFormat } from "../enums/img-format.enum";

@Injectable({
  providedIn: "root",
})
export class ImageService {
  // Sets city icon path in CityWeather object based on cityId
  setCiityIcon(cityId: number, cityWeather: CityWeather, imagePath): void {
    switch (cityId) {
      case Cities.BERLIN:
        cityWeather.cityIcon = `${imagePath}berlin${ImageFormat.PNG}`;
        break;
      case Cities.PARIS:
        cityWeather.cityIcon = `${imagePath}paris${ImageFormat.PNG}`;
        break;
      case Cities.MADRID:
        cityWeather.cityIcon = `${imagePath}madrid${ImageFormat.PNG}`;
        break;
      case Cities.ROME:
        cityWeather.cityIcon = `${imagePath}rome${ImageFormat.PNG}`;
        break;
      case Cities.LONDON:
        cityWeather.cityIcon = `${imagePath}london${ImageFormat.PNG}`;
        break;
      default:
        cityWeather.cityIcon = `${imagePath}city${ImageFormat.PNG}`;
        break;
    }
  }
}
