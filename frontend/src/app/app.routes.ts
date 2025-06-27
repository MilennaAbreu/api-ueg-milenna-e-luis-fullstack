import { Routes } from '@angular/router';
import { FilmListComponent } from './films/film-list/film-list.component';
import { FilmFormComponent } from './films/film-form/film-form.component';

export const routes: Routes = [
  { path: 'list', component: FilmListComponent },
  { path: 'form', component: FilmFormComponent },
  { path: 'form/:id', component: FilmFormComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' }
];