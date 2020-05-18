import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

const weatherAPI = `${environment.Api}weather`;
const hourlyWeatherAPI = `${environment.Api}onecall`;

@Injectable({
  providedIn: "root",
})
export class CityWeatherService {
  constructor(private http: HttpClient) {}

  //Service that uses city id to get info about weather form Open Weather API
  getCityWeather(cityId): Observable<any> {
    const params = new HttpParams().set("id", cityId);
    return this.http.get(weatherAPI, { params });
  }

  //Service that uses city latitude and longitude to get info about hourly weather from Open Weather API
  getHourlyCityWeather(latitude, longitude): Observable<any> {
    const params = new HttpParams()
      .set("lat", latitude)
      .set("lon", longitude)
      .set("exclude", "current,minutely,daily");
    return this.http.get(hourlyWeatherAPI, { params });
  }
}
