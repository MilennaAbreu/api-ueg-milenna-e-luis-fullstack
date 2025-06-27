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
  displayedColumns = ['title','director','releaseDate','genre','language','status','check','edit','delete'];
  dataSource = new MatTableDataSource<Film>();

  constructor(private filmsService: FilmsService) {}

  ngOnInit(): void {
    this.loadFilms();
  }

  loadFilms(): void {
    this.filmsService.getFilms().subscribe(films => this.dataSource.data = films);
  }

  getStatusLabel(film: Film): string {
    return film.watched ? 'Assistido' : 'Não assistido';
  }

  toggleWatched(film: Film): void {
    this.filmsService.updateFilm({...film, watched: !film.watched})
      .subscribe(() => this.loadFilms());
  }

  delete(film: Film): void {
    this.filmsService.removeFilm(film.id!)
      .subscribe(() => this.loadFilms());
  }
}