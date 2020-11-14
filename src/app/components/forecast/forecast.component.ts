import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { Subscription } from 'rxjs';
import { CurrentConditions } from '../../models/current-conditions';
import { FiveDaysForecast } from '../../models/five-days-forcast';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit, OnDestroy {

  weatherSub: Subscription;
  weatherWeekSub: Subscription;

  cityID: Number = 215854;
  @Input () currentCity: CurrentConditions;
  fiveDaysForcast: FiveDaysForecast;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
     this.weatherSub = this.weatherService.getTelAviv().subscribe((data: CurrentConditions) => {
      if(!data[0]) return {};
      this.currentCity = data[0];
    })
    this.weatherWeekSub = this.weatherService.getFiveDaysForecast(this.cityID).subscribe((data: FiveDaysForecast) => {
      this.currentCity.Daily = data.DailyForecasts;
    });
  }

  ngOnDestroy() {
      this.weatherWeekSub.unsubscribe();
      this.weatherSub.unsubscribe();
  }

}
