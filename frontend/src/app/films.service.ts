import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Film } from './film';

@Injectable({ providedIn: 'root' })
export class FilmsService {
  private base = `${environment.apiUrl}/movies`;

  constructor(private http: HttpClient) {}

  listAll() {
    return this.http.get<Film[]>(this.base);
  }

  getById(id: number) {
    return this.http.get<Film>(`${this.base}/${id}`);
  }

  create(film: Film) {
    return this.http.post<Film>(this.base, film);
  }
  // update, delete…
}
