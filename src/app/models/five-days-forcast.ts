export interface FiveDaysForecast {
    Headline: Headline;
    DailyForecasts: DailyForecasts[];
  }

export interface Metric {
    Value: number;
    Unit: string;
    UnitType: number;
}

export interface Temperature {
    Metric: Metric;
    Imperial: Metric;
}

export interface DailyForecasts {
    Date: String;
    EpochDate: Number;
    Temperature: Temperature;
    Day: Day;
    Night: Night;
    Sources: String[];
    MobileLink: String;
    Link: String;
}

interface Night {
    Icon: Number;
    IconPhrase: String;
    HasPrecipitation: boolean;
    PrecipitationType?: String;
    PrecipitationIntensity?: String;
}

interface Day {
    Icon: Number;
    IconPhrase: String;
    HasPrecipitation: boolean;
}


interface Minimum {
    Value: Number;
    Unit: String;
    UnitType: Number;
}

interface Headline {
    EffectiveDate: String;
    EffectiveEpochDate: Number;
    Severity: Number;
    Text: String;
    Category: String;
    EndDate?: any;
    EndEpochDate?: any;
    MobileLink: String;
    Link: String;
}
