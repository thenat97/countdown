import { Component } from '@angular/core';
import { CountdownConfig, CountdownEvent } from 'ngx-countdown';
import { format, getDate } from 'date-fns';

const CountdownTimeUnits: Array<[string, number]> = [
  ['Y', 1000 * 60 * 60 * 24 * 365], // years
  ['M', 1000 * 60 * 60 * 24 * 30], // months
  ['D', 1000 * 60 * 60 * 24], // days
  ['H', 1000 * 60 * 60], // hours
  ['m', 1000 * 60], // minutes
  ['s', 1000], // seconds
  ['S', 1], // million seconds
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  config:CountdownConfig = {
    leftTime: this.calculateTimeDifference(),
    formatDate: ({ date, formatStr }) => {
      let duration = Number(date || 0);

      return CountdownTimeUnits.reduce((current, [name, unit]) => {
        if (current.indexOf(name) !== -1) {
          const v = Math.floor(duration / unit);
          duration -= v * unit;
          return current.replace(new RegExp(`${name}+`, 'g'), (match: string) => {
            return v.toString().padStart(match.length, '0');
          });
        }
        return current;
      }, "D:H:m:s");
    }};

  calculateTimeDifference() {
    const currentDate = new Date();
    const targetDate = new Date('2024-01-17T00:00:00');

    const differenceInSeconds = Math.floor((targetDate.getTime() - currentDate.getTime()) / 1000);
    return differenceInSeconds;
  }

  handleEvent(e: CountdownEvent) {
    console.log('Actions', e);
  }



}
