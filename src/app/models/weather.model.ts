import { environment } from "src/environments/environment";
import { ImageFormat } from "../enums/img-format.enum";

export class Weather {
  description: string;
  icon: string;
  main: string;
  constructor(args: any = { icon: "01d" }) {
    this.description = args.description;
    this.icon = `${environment.weatherIconApi}${args.icon}${ImageFormat.PNG}`;
    this.main = args.main;
  }
}
