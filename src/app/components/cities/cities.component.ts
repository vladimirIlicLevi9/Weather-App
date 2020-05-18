import { Component, OnInit } from "@angular/core";
import { CitiesEnum } from "src/app/enums/cities.enum";

@Component({
  selector: "app-cities",
  templateUrl: "./cities.component.html",
  styleUrls: ["./cities.component.scss"],
})
export class CitiesComponent implements OnInit {
  //Initialisation of citiId list from enums
  citiesId: number[] = [
    CitiesEnum.BERLIN,
    CitiesEnum.LONDON,
    CitiesEnum.MADRID,
    CitiesEnum.PARIS,
    CitiesEnum.ROME,
  ];

  constructor() {}

  ngOnInit(): void {}
}
