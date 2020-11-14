import { Temperature } from './five-days-forcast'

export interface CurrentConditions {
    LocalObservationDateTime: string;
    EpochTime: number;
    WeatherText: string;
    WeatherIcon: number;
    HasPrecipitation: boolean;
    PrecipitationType?: any;
    IsDayTime: boolean;
    Temperature: Temperature;
    MobileLink: string;
    Link: string;
    Daily: object [];
  }
