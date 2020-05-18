# WeatherApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.7.
Toastr package(https://www.npmjs.com/package/ngx-toastr)is used to display messages to user.

app folder contains components, enums, interseptors,models, services folders.

In city-weatehr folder there is city-weather.component.spec.ts file with unit test for this component.

In enums folder there is cities.enum.ts file that contains cityIds and img-format.enum.ts file that contains image format used on weather icons on Open Weather API.

In interseptors folder there is api-key-interseptor.ts file that Intersepts every HTTP request and adds apiId and units to query params to access Open Weather API.

In models folder there are city-weatehr.model.ts, hourly-weather.model.ts and weather.model.ts files that describe typeScript classes used in app.

In services folder there is cityWeather service that is used to get information about curent and hourly city weather

In assets folder there are images and sccs folders. Images folder contains all images used in app. Scss folder contains all scss files used in app.

In enviroment variable information about API link, path to api Icons, appId(to access Open Weather API), and unit(metric) is stored.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
