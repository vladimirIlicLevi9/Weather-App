import { Injectable } from "@angular/core";
import { Cities } from "../enums/cities.enum";
import { ImageFormat } from "../enums/img-format.enum";

@Injectable({
  providedIn: "root",
})
export class ImageService {
  // Sets city icon path in based on cityId
  setCiityIcon(cityId: number, imagePath): string {
    let cityIcon;
    switch (cityId) {
      case Cities.BERLIN:
        cityIcon = `${imagePath}berlin${ImageFormat.PNG}`;
        break;
      case Cities.PARIS:
        cityIcon = `${imagePath}paris${ImageFormat.PNG}`;
        break;
      case Cities.MADRID:
        cityIcon = `${imagePath}madrid${ImageFormat.PNG}`;
        break;
      case Cities.ROME:
        cityIcon = `${imagePath}rome${ImageFormat.PNG}`;
        break;
      case Cities.LONDON:
        cityIcon = `${imagePath}london${ImageFormat.PNG}`;
        break;
      default:
        cityIcon = `${imagePath}city${ImageFormat.PNG}`;
        break;
    }
    return cityIcon;
  }
}
