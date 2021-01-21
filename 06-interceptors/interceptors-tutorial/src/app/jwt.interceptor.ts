/**

what is interceptor

HttpClient.get
HttpClient.post -----0-------0-------0-----0----0-----> Server
HttpClient.post <----------------|-------|------|--------  Server

 */

import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { tap } from 'rxjs/operators';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  // constructor(private _router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('our interceptor is now running');
    // Authorization: Bearer 'token'

    const newReq = req.clone({
      headers: req.headers.append('Authorization', `Bearer hello world`)
    });

    return next.handle(newReq).pipe(
      tap((responseEvents: HttpEvent<any>) => {
        // add some response login
      })
    );
  }
}
