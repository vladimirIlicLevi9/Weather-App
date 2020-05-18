import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

//Intersepts every HTTP request and adds apiId and units to query params to access Open Weather API
@Injectable()
export class HttpApiKeyInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    request = request.clone({
      setParams: {
        units: environment.unit,
        appid: environment.appId,
      },
    });
    return next.handle(request);
  }
}
