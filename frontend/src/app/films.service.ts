import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Film } from './film';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FilmsService {
  private readonly baseUrl = '/movies';

  constructor(private http: HttpClient) {}

  getFilms(): Observable<Film[]> {
    return this.http.get<Film[]>(this.baseUrl);
  }

  getFilm(id: number): Observable<Film> {
    return this.http.get<Film>(`${this.baseUrl}/${id}`);
  }

  addFilm(film: Film): Observable<any> {
    return this.http.post(this.baseUrl, film);
  }

  updateFilm(film: Film): Observable<any> {
    return this.http.put(`${this.baseUrl}/${film.id}`, film);
  }

  removeFilm(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
