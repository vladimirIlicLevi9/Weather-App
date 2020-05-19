import { Component } from "@angular/core";
import { Cities } from "src/app/enums/cities.enum";

@Component({
  selector: "app-cities",
  templateUrl: "./cities.component.html",
  styleUrls: ["./cities.component.scss"],
})
export class CitiesComponent {
  // Initialisation of citiId list from enums
  citiesId: number[] = [
    Cities.BERLIN,
    Cities.LONDON,
    Cities.MADRID,
    Cities.PARIS,
    Cities.ROME,
  ];

  constructor() {}
}
