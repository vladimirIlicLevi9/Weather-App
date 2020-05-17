import { environment } from "src/environments/environment";
import { ImageFormatEnum } from "../enums/img-format.enum";

export class Weather {
  description: String;
  icon: String;
  main: String;
  constructor(args: any = {}) {
    this.description = args.description;
    this.icon = environment.weatherIconAPI + args.icon + ImageFormatEnum.PNG;
    this.main = args.main;
  }
}
