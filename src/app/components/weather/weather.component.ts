import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { FormControl}  from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AutoCompleteSearch } from '../../models/autoCompleteSearch';
import { CurrentConditions } from '../../models/current-conditions';
import { DailyForecasts, FiveDaysForecast } from '../../models/five-days-forcast';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  search: AutoCompleteSearch[];
  cities = [];
  // defualt city : tel aviv
  cityID: Number = 215854;
  control = new FormControl();
  filteredCities: Observable<string[]>;
  currentCity: CurrentConditions;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.filteredCities = this.control.valueChanges.pipe(
     startWith(''),
     map(value => this.autoCompleteSearch(value))
    );
  }

  currentConditions() {
    this.weatherService.getCurrentConditions(this.cityID).subscribe((data: CurrentConditions) => {
      this.currentCity = data[0];
    });
    this.weatherService.getFiveDaysForecast(this.cityID).subscribe((data: FiveDaysForecast) => {
      this.currentCity.Daily = data.DailyForecasts;
    });
  }

  autoCompleteSearch(value: string): string[]{
    this.weatherService.getAutoCompleteSerach(value).subscribe((data: any) => {
      if(!data) return [];
      this.cities = data.map(item => item.LocalizedName || '');
      this.cityID = data[0].Key;
      return data;
    });
    return this.cities;
  }

}
