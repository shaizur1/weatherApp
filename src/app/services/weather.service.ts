import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey = 'Dt1hwcMlNx0doXOaZlOVb4yZ3z9hlr8b';
  language = 'en-us';
  baseApi = 'http://dataservice.accuweather.com';
  autoCompleteSearch = 'locations/v1/cities/autocomplete';
  currentConditions = 'currentconditions/v1';
  fiveDaysforecast = 'forecasts/v1/daily/5day';

  constructor(private http: HttpClient) { }

  getAutoCompleteSerach(location) {
    const autoCompleteSerach = {
      apikey: this.apiKey,
      q: location,
      language: this.language
    };
    return this.http.get(`${this.baseApi}/${this.autoCompleteSearch}`, {params: autoCompleteSerach});
  }

  getCurrentConditions(location) {
    const currentConditions = {
      apikey: this.apiKey,
      language: this.language
    }
    return this.http.get(`${this.baseApi}/${this.currentConditions}/${location}`, {params: currentConditions});
  }

  getTelAviv() {
    return this.getCurrentConditions(215854);
  }

  getFiveDaysForecast(location) {
    const fiveDaysforecast = {
      apikey: this.apiKey,
      language: this.language
    }
    return this.http.get(`${this.baseApi}/${this.fiveDaysforecast}/${location}`, {params: fiveDaysforecast});
  }
}
