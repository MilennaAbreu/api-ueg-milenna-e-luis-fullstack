import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Film } from './film';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FilmsService {
  private baseUrl = '/api/movies';

  constructor(private http: HttpClient) {}

  getFilms(): Observable<Film[]> {
    return this.http.get<Film[]>(this.baseUrl);
  }

  getFilm(id: number): Observable<Film> {
    return this.http.get<Film>(`\${this.baseUrl}/\${id}`);
  }

  addFilm(film: Film): Observable<void> {
    return this.http.post<void>(this.baseUrl, film);
  }

  updateFilm(film: Film): Observable<void> {
    return this.http.put<void>(`\${this.baseUrl}/\${film.id}`, film);
  }

  removeFilm(id: number): Observable<void> {
    return this.http.delete<void>(`\${this.baseUrl}/\${id}`);
  }
}
