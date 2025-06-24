import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from "@angular/core";
import {catchError, Observable, throwError} from "rxjs";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService,
              private router: Router) {
  }

  intercept(request: HttpRequest<any>,
            next: HttpHandler): Observable<HttpEvent<any>>{

    const authToken = this.authService.getToken();

    let authReq = request;

    if (authToken) {
      authReq = request.clone({
        setHeaders: {
          Authorization: `Bearer ${authToken}`
        }
      });
    }

    return next.handle(authReq).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.authService.clearToken();
          this.router.navigate(['/auth/login']).then(() => {
            window.location.reload();
          });
        }
        return throwError(()=> error);
      })
    );
  }
}
