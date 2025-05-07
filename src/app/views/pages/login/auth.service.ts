import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://127.0.0.1:8000/auth';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json' // Asegura JSON
    });

    const body = JSON.stringify({ username, password });

    return this.http.post(`${this.apiUrl}/login`, body, { headers }).pipe(
      catchError((error) => {
        console.error('Error en el inicio de sesión', error);
        return throwError(() => error);
      })
    );
  }

  logout(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(`${this.apiUrl}/logout`, {}, { headers }).pipe(
      catchError((error) => {
        console.error('Error al cerrar sesión', error);
        return throwError(() => error);
      })
    );
  }

  register(user: {username: string;
                  email: string;
                  full_name: string;
                  password: string; }): Observable<any> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const body = JSON.stringify(user);

    return this.http.post(`${this.apiUrl}/register`, body, { headers }).pipe(
      catchError((error) => {
        console.error('Error en el registro', error);
        return throwError(() => error);
      })
    );
  }


  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
