import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { CityWeather } from "../models/city-weather.model";
import { map } from "rxjs/operators";
import { HourlyWeather } from "../models/hourly-weather.model";
import { ImageService } from "./image.service";

// Open Weather Api path
const weatherAPI = `${environment.Api}weather`;
const hourlyWeatherAPI = `${environment.Api}onecall`;

@Injectable({
  providedIn: "root",
})
export class CityWeatherService {
  constructor(private http: HttpClient, private imageService: ImageService) {}

  // Service that uses city id to get info about weather form Open Weather API and mapping response to CityWeater model
  getCityWeather(cityId, imagePath: string): Observable<CityWeather> {
    const params = new HttpParams().set("id", cityId);
    return this.http.get(weatherAPI, { params }).pipe(
      map((response) => {
        let cityWeather = new CityWeather({ ...response });
        // sets cityIcon to image location path
        cityWeather.cityIcon = this.imageService.setCiityIcon(
          cityId,
          imagePath
        );
        return cityWeather;
      })
    );
  }

  // Service that uses city latitude and longitude to get info about hourly weather from Open Weather API and mapping response to HourlWeather[] model
  getHourlyCityWeather(latitude, longitude): Observable<HourlyWeather[]> {
    const params = new HttpParams()
      .set("lat", latitude)
      .set("lon", longitude)
      .set("exclude", "current,minutely,daily");
    return this.http.get(hourlyWeatherAPI, { params }).pipe(
      map((response) => {
        let hourlyWeather: HourlyWeather[] = [];
        response["hourly"].forEach((element) => {
          hourlyWeather.push(new HourlyWeather(element));
        });
        return hourlyWeather;
      })
    );
  }
}
