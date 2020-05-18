import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class CityWeatherService {
  constructor(public http: HttpClient) {}

  //Path to Open Weather API
  weatherAPI: string = environment.API + "weather";
  hourlyWeatherAPI: string = environment.API + "onecall";

  //Service that uses city id to get info about weather form Open Weather API
  getCityWeather(cityId): Observable<any> {
    const params = new HttpParams().set("id", cityId);
    return this.http.get(this.weatherAPI, { params });
  }

  //Service that uses city latitude and longitude to get info about hourly weather from Open Weather API
  getHourlyCityWeather(lat, lon): Observable<any> {
    const params = new HttpParams()
      .set("lat", lat)
      .set("lon", lon)
      .set("exclude", "current,minutely,daily");
    return this.http.get(this.hourlyWeatherAPI, { params });
  }
}
