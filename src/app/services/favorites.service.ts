import { Injectable } from '@angular/core';
import { CurrentConditions } from '../models/current-conditions';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  favorites: CurrentConditions;

  constructor() { }
}
