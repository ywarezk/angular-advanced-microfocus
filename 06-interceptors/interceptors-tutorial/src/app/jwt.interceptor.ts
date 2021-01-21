/**

what is interceptor

HttpClient.get
HttpClient.post -----0-------0-------0-----0----0-----> Server
HttpClient.post <----------------|-------|------|--------  Server

 */

import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('our interceptor is now running');
    // Authorization: Bearer 'token'
    return next.handle(req);
  }
}
