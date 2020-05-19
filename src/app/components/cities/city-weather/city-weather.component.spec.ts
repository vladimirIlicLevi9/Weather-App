import { CityWeatherComponent } from "./city-weather.component";
import { CityWeatherService } from "src/app/services/city-weather.service";
import { from } from "rxjs/";
import { Cities } from "src/app/enums/cities.enum";
import { HourlyWeather } from "src/app/models/hourly-weather.model";
import { CityWeather } from "src/app/models/city-weather.model";

describe("CityWeatherComponent", () => {
  let component: CityWeatherComponent;
  let service: CityWeatherService;

  const getCityWeatherResponse = {
    coord: {
      lon: -3.7,
      lat: 40.42,
    },
    weather: [
      {
        main: "Clear",
        description: "clear sky",
        icon: "01d",
      },
    ],
    main: {
      temp: 21.95,
    },
    wind: {
      speed: 1,
    },
    name: "Madrid",
  };

  const getHourlyCityWeatherResponse = {
    hourly: [
      {
        dt: 1589799600,
        temp: 18.77,
        weather: [
          {
            id: 801,
            main: "Clouds",
            description: "few clouds",
            icon: "02d",
          },
        ],
      },
      {
        dt: 1589803200,
        temp: 18.39,
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "broken clouds",
            icon: "04d",
          },
        ],
      },
    ],
  };

  beforeEach(() => {
    service = new CityWeatherService(null);
    component = new CityWeatherComponent(service);
  });

  it("should set city icon path based on cityId", () => {
    component.cityWeather = new CityWeather();
    component.setCiityIcon(Cities.MADRID);
    expect(component.cityWeather.cityIcon).toContain("madrid");
  });

  it("should set city default icon path if cityId is not found", () => {
    component.cityWeather = new CityWeather();
    component.setCiityIcon(1111);
    expect(component.cityWeather.cityIcon).toContain("city");
  });

  it("should remove all items form hourlyCityWeather list", () => {
    component.hourlyCityWeather = [new HourlyWeather()];
    component.hideHourlyCityWeather();
    expect(component.hourlyCityWeather.length).toBe(0);
  });

  it("should call the server to get current weather information for city and create new CityWeather object", () => {
    spyOn(service, "getCityWeather").and.callFake(() => {
      return from([getCityWeatherResponse]);
    });

    component.getCityWeather(component.cityId);
    expect(component.cityWeather.name).toBe(getCityWeatherResponse.name);
    expect(component.cityWeather.temp).toBe(getCityWeatherResponse.main.temp);
    expect(component.cityWeather.wind).toBe(getCityWeatherResponse.wind.speed);
    expect(component.cityWeather.latitude).toBe(
      getCityWeatherResponse.coord.lat
    );
    expect(component.cityWeather.longitude).toBe(
      getCityWeatherResponse.coord.lon
    );
  });

  it("should call the server to get hourly weather information for city when show more link is clicked", () => {
    spyOn(service, "getHourlyCityWeather").and.callFake(() => {
      return from([getHourlyCityWeatherResponse]);
    });
    component.cityWeather = new CityWeather();
    component.getHourlyCityWeather();
    expect(component.hourlyCityWeather.length).toBe(2);
  });
});
