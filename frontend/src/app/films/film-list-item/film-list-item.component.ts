import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Film } from '../shared/film';
import { FilmsService } from '../shared/films.service';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {
  displayedColumns: string[] = [
    'title',
    'director',
    'releaseDate',
    'genre',
    'language',
    'status',
    'check',
    'edit',
    'delete'
  ];
  dataSource = new MatTableDataSource<Film>();

  constructor(private filmsService: FilmsService) {}

  ngOnInit(): void {
    this.loadFilms();
  }

  /** Carrega os filmes do backend */
  loadFilms(): void {
    this.filmsService.getFilms()
      .subscribe(films => this.dataSource.data = films);
  }

  /** Rótulo de status baseado em watched */
  getStatusLabel(film: Film): string {
    return film.watched ? 'Assistido' : 'Não assistido';
  }

  /** Alterna o watched e salva no backend */
  toggleWatched(film: Film): void {
    const updated: Film = { ...film, watched: !film.watched };
    this.filmsService.updateFilm(updated)
      .subscribe(() => this.loadFilms());
  }

  /** Remove o filme e recarrega a lista */
  delete(film: Film): void {
    this.filmsService.removeFilm(film.id!)
      .subscribe(() => this.loadFilms());
  }
}
