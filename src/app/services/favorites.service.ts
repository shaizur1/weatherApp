import { Injectable } from '@angular/core';
import { CurrentConditions } from '../models/current-conditions';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  favorites: CurrentConditions;

  constructor() {
    this.favorites = JSON.parse(sessionStorage.getItem('favorites')) || [];
  }

  getFavorite() {
    return this.favorites;
  }

  setFavorite() {
    sessionStorage.setItem('products', JSON.stringify(this.favorites));
  }

  addFavorite() {

    this.setFavorite();
  }
}
