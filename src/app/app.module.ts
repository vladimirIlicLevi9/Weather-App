import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { CitiesComponent } from "./components/cities/cities.component";
import { CityWeatherComponent } from "./components/cities/city-weather/city-weather.component";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { HttpAPIKeyInterceptor } from "./interseptors/api-key-interseptor";
import { HourlyWetherComponent } from "./components/cities/city-weather/hourly-wether/hourly-wether.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CitiesComponent,
    CityWeatherComponent,
    HourlyWetherComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpAPIKeyInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
