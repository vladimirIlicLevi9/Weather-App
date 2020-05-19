import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { CitiesComponent } from "./components/city-weather-components/cities/cities.component";
import { CityWeatherComponent } from "./components/city-weather-components/city-weather/city-weather.component";
import { HourlyWeatherComponent } from "./components/city-weather-components/hourly-weather/hourly-weather.component";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { HttpApiKeyInterceptor } from "./interceptors/api-key.interceptor";
import { ToastrModule } from "ngx-toastr";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpErrorInterceptor } from "./interceptors/error.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CitiesComponent,
    CityWeatherComponent,
    HourlyWeatherComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({ timeOut: 2000 }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpApiKeyInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
