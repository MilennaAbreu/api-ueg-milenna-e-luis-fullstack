import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Film } from './film';

@Injectable({ providedIn: 'root' })
export class FilmsService {
  private baseUrl = `${environment.apiUrl}/movies`;

  constructor(private http: HttpClient) {}

  getFilms(): Observable<Film[]> {
    return this.http.get<Film[]>(this.baseUrl);
  }

  getFilm(id: number): Observable<Film> {
    return this.http.get<Film>(`${this.baseUrl}/${id}`);
  }

  addFilm(film: Film): Observable<Film> {
    return this.http.post<Film>(this.baseUrl, film);
  }

  updateFilm(film: Film): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${film.id}`, film);
  }

  removeFilm(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}