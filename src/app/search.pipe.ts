import { Pipe, PipeTransform } from '@angular/core';
export const icons = `https://developer.accuweather.com/sites/default/files`;

@Pipe({
  name: 'accuweatherIcon'
})
export class AccuweatherIconPipe implements PipeTransform {


  transform(value: any): any {
    if (value < 10) {
      value = `0${value}`;
    }
    return `${icons}/${value}-s.png`;
  }

}

