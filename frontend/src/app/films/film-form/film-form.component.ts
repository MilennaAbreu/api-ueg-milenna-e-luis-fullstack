import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { Film } from '../shared/film';
import { FilmsService } from '../shared/films.service';

@Component({
  selector: 'app-film-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule
  ],
  templateUrl: './film-form.component.html',
  styleUrls: ['./film-form.component.css']
})
export class FilmFormComponent implements OnInit {
  film: Film = {
    id: 0,
    title: '',
    director: '',
    releaseDate: '',
    genre: '',
    language: '',
    watched: false
  };
  isEdit = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private filmsService: FilmsService
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.params['id'];
    if (idParam) {
      this.isEdit = true;
      this.filmsService.getFilm(+idParam)
        .subscribe(f => this.film = f);
    }
  }

  save(): void {
    const req$ = this.isEdit
      ? this.filmsService.updateFilm(this.film)
      : this.filmsService.addFilm(this.film);

    req$.subscribe(() => this.router.navigate(['/list']));
  }
}
