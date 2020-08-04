import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const autoCompleteBatch = [
  { "Version": 1, "Key": "178087", "Type": "City", "Rank": 10, "LocalizedName": "Berlin", "Country": { "ID": "DE", "LocalizedName": "Germany" }, "AdministrativeArea": { "ID": "BE", "LocalizedName": "Berlin" } },
  { "Version": 1, "Key": "2921", "Type": "City", "Rank": 35, "LocalizedName": "Berazategui", "Country": { "ID": "AR", "LocalizedName": "Argentina" }, "AdministrativeArea": { "ID": "B", "LocalizedName": "Buenos Aires" } },
  { "Version": 1, "Key": "312122", "Type": "City", "Rank": 40, "LocalizedName": "Bern", "Country": { "ID": "CH", "LocalizedName": "Switzerland" }, "AdministrativeArea": { "ID": "BE", "LocalizedName": "Bern" } },
  { "Version": 1, "Key": "47786", "Type": "City", "Rank": 41, "LocalizedName": "Bertoua", "Country": { "ID": "CM", "LocalizedName": "Cameroon" }, "AdministrativeArea": { "ID": "ES", "LocalizedName": "East" } },
  { "Version": 1, "Key": "258220", "Type": "City", "Rank": 41, "LocalizedName": "Bergen", "Country": { "ID": "NO", "LocalizedName": "Norway" }, "AdministrativeArea": { "ID": "12", "LocalizedName": "Hordaland" } },
  { "Version": 1, "Key": "170337", "Type": "City", "Rank": 43, "LocalizedName": "Bergisch Gladbach", "Country": { "ID": "DE", "LocalizedName": "Germany" }, "AdministrativeArea": { "ID": "NW", "LocalizedName": "North Rhine-Westphalia" } },
  { "Version": 1, "Key": "289801", "Type": "City", "Rank": 45, "LocalizedName": "Berezniki", "Country": { "ID": "RU", "LocalizedName": "Russia" }, "AdministrativeArea": { "ID": "PER", "LocalizedName": "Perm'" } },
  { "Version": 1, "Key": "318259", "Type": "City", "Rank": 45, "LocalizedName": "Bergama", "Country": { "ID": "TR", "LocalizedName": "Turkey" }, "AdministrativeArea": { "ID": "35", "LocalizedName": "İzmir" } },
  { "Version": 1, "Key": "326524", "Type": "City", "Rank": 45, "LocalizedName": "Berdychiv", "Country": { "ID": "UA", "LocalizedName": "Ukraine" }, "AdministrativeArea": { "ID": "18", "LocalizedName": "Zhytomyr" } },
  { "Version": 1, "Key": "326515", "Type": "City", "Rank": 45, "LocalizedName": "Berdiansk", "Country": { "ID": "UA", "LocalizedName": "Ukraine" }, "AdministrativeArea": { "ID": "23", "LocalizedName": "Zaporizhzhya" } }
]

const telAviv = [{
  "LocalObservationDateTime":"2020-08-03T12:51:00+03:00",
  "EpochTime":1596448260,
  "WeatherText":"Sunny",
  "WeatherIcon":1,
  "HasPrecipitation":false,
  "PrecipitationType":null,
  "IsDayTime":true,
  "Temperature":{"Metric":{"Value":32.9,"Unit":"C","UnitType":17},"Imperial":{"Value":91,"Unit":"F","UnitType":18}},
  "MobileLink":"http://m.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
  "Link":"http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us"
}]

const fiveDays = [
  {
    "Headline": {
      "EffectiveDate": "2020-08-08T08:00:00+03:00",
      "EffectiveEpochDate": 1596862800,
      "Severity": 4,
      "Text": "Pleasant this weekend",
      "Category": "mild",
      "EndDate": null,
      "EndEpochDate": null,
      "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/extended-weather-forecast/215854?lang=en-us",
      "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?lang=en-us"
    },
    "DailyForecasts": [
      {
        "Date": "2020-08-04T07:00:00+03:00",
        "EpochDate": 1596513600,
        "Temperature": {
          "Minimum": {
            "Value": 79,
            "Unit": "F",
            "UnitType": 18
          },
          "Maximum": {
            "Value": 89,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "Day": {
          "Icon": 1,
          "IconPhrase": "Sunny",
          "HasPrecipitation": false
        },
        "Night": {
          "Icon": 35,
          "IconPhrase": "Partly cloudy",
          "HasPrecipitation": false
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us"
      },
      {
        "Date": "2020-08-05T07:00:00+03:00",
        "EpochDate": 1596600000,
        "Temperature": {
          "Minimum": {
            "Value": 76,
            "Unit": "F",
            "UnitType": 18
          },
          "Maximum": {
            "Value": 88,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "Day": {
          "Icon": 2,
          "IconPhrase": "Mostly sunny",
          "HasPrecipitation": false
        },
        "Night": {
          "Icon": 34,
          "IconPhrase": "Mostly clear",
          "HasPrecipitation": false
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us"
      },
      {
        "Date": "2020-08-06T07:00:00+03:00",
        "EpochDate": 1596686400,
        "Temperature": {
          "Minimum": {
            "Value": 77,
            "Unit": "F",
            "UnitType": 18
          },
          "Maximum": {
            "Value": 89,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "Day": {
          "Icon": 2,
          "IconPhrase": "Mostly sunny",
          "HasPrecipitation": false
        },
        "Night": {
          "Icon": 33,
          "IconPhrase": "Clear",
          "HasPrecipitation": false
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us"
      },
      {
        "Date": "2020-08-07T07:00:00+03:00",
        "EpochDate": 1596772800,
        "Temperature": {
          "Minimum": {
            "Value": 79,
            "Unit": "F",
            "UnitType": 18
          },
          "Maximum": {
            "Value": 90,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "Day": {
          "Icon": 2,
          "IconPhrase": "Mostly sunny",
          "HasPrecipitation": false
        },
        "Night": {
          "Icon": 34,
          "IconPhrase": "Mostly clear",
          "HasPrecipitation": false
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us"
      },
      {
        "Date": "2020-08-08T07:00:00+03:00",
        "EpochDate": 1596859200,
        "Temperature": {
          "Minimum": {
            "Value": 77,
            "Unit": "F",
            "UnitType": 18
          },
          "Maximum": {
            "Value": 89,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "Day": {
          "Icon": 2,
          "IconPhrase": "Mostly sunny",
          "HasPrecipitation": false
        },
        "Night": {
          "Icon": 35,
          "IconPhrase": "Partly cloudy",
          "HasPrecipitation": false
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us"
      }
    ]
  }
]
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  //apiKey = 'jmIoxyAiC7mrdfC2HAnmbmDxCXqjKm7M';
  //apiKey = 'vBNhTOMARg9rRUgqACnUgI6KOx3A1g31';
  //apiKey = 'aUvIMc3gQyuhrAbegcXZHuTQlCGD30xT';
  //apiKey = 'XXhoAfdvhAdPOhjR1CbGglFN2VJMyLHa';
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
    //return this.http.get(`${this.baseApi}/${this.autoCompleteSearch}`, {params: autoCompleteSerach}); // for real data
    return new Observable(sub => sub.next(autoCompleteBatch)); // for mock data
  }

  getCurrentConditions(location) {
    const currentConditions = {
      apikey: this.apiKey,
      language: this.language
    }
    //return this.http.get(`${this.baseApi}/${this.currentConditions}/${location}`, {params: currentConditions}); // for real data
    return new Observable(sub => sub.next(telAviv)); // for mock data
  }

  getTelAviv() {
    //return this.getCurrentConditions(215854);  // for real data
    return new Observable(sub => sub.next(telAviv)); // for mock data
  }

  getFiveDaysForecast(location) {
    const fiveDaysforecast = {
      apikey: this.apiKey,
      language: this.language
    }
    //return this.http.get(`${this.baseApi}/${this.fiveDaysforecast}/${location}`, {params: fiveDaysforecast}); // for real data
    return new Observable(sub => sub.next(fiveDays)); // for mock data
  }
}
