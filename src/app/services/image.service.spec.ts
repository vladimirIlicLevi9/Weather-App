import { Cities } from "src/app/enums/cities.enum";
import { CityWeather } from "src/app/models/city-weather.model";
import { ImageService } from "./image.service";

describe("ImageService", () => {
  let service: ImageService;
  let cityWeather: CityWeather;
  const imagePath = "../../../../assets/images/cities/";

  beforeEach(() => {
    service = new ImageService();
    cityWeather = new CityWeather();
  });

  it("should set city icon path based on cityId", () => {
    service.setCiityIcon(Cities.MADRID, cityWeather, imagePath);
    expect(cityWeather.cityIcon).toContain("madrid");
  });

  it("should set city default icon path if cityId is not found", () => {
    service.setCiityIcon(1111, cityWeather, imagePath);
    expect(cityWeather.cityIcon).toContain("city");
  });
});
