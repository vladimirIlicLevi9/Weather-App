import { Cities } from "src/app/enums/cities.enum";
import { ImageService } from "./image.service";

describe("ImageService", () => {
  let service: ImageService;
  const imagePath = "../../../../assets/images/cities/";

  beforeAll(() => {
    service = new ImageService();
  });

  it("should set city icon path based on cityId", () => {
    expect(service.setCiityIcon(Cities.MADRID, imagePath)).toContain("madrid");
  });

  it("should set city default icon path if cityId is not found", () => {
    expect(service.setCiityIcon(1111, imagePath)).toContain("city");
  });
});
