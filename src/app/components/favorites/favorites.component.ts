import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../../services/favorites.service';
import { CurrentConditions } from '../../models/current-conditions';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  favorites: CurrentConditions;

  constructor(private favoritesService: FavoritesService) { }

  ngOnInit(): void {
    this.updateFavorites();
  }

  updateFavorites() {
    this.favorites = this.favoritesService.getFavorite();
  }
}
