import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse, HttpHeaders
} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {AuthService} from "./services";
import {Router} from "@angular/router";

@Injectable()
export class MainInterceptor implements HttpInterceptor {

  constructor(private authService:AuthService, private router:Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const isAuthenticated = this.authService.isAuthenticated();
    if(isAuthenticated){
      request = this.addToken(request, this.authService.getToken())
    }

    return next.handle(request).pipe(
      catchError((res)=>{
        if(res && res.error && res.status === 401){
          this.authService.deleteToken();
          this.router.navigate(['login'])
        }
        return throwError(()=>new Error(('token invalid or expire d')))
      }));
  }

  addToken(request:HttpRequest<any>, token:string):HttpRequest<any>{
    return request.clone({setHeaders: {Authorization: `Bearer ${token}`}})
  }
}
