import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { CitiesComponent } from "./components/cities/cities.component";
import { CityWeatherComponent } from "./components/cities/city-weather/city-weather.component";
import { HourlyWeatherComponent } from "./components/cities/city-weather/hourly-weather/hourly-weather.component";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { HttpAPIKeyInterceptor } from "./interseptors/api-key-interseptor";
import { ToastrModule } from "ngx-toastr";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

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
      useClass: HttpAPIKeyInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
