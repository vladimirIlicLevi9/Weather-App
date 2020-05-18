import { environment } from "src/environments/environment";
import { ImageFormatEnum } from "../enums/img-format.enum";

export class Weather {
  description: string;
  icon: string;
  main: string;
  constructor(args: any = { icon: "01d" }) {
    this.description = args.description;
    this.icon = environment.weatherIconAPI + args.icon + ImageFormatEnum.PNG;
    this.main = args.main;
  }
}
