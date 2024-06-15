import { Component } from '@angular/core';
import { CountdownConfig, CountdownEvent } from 'ngx-countdown';

const CountdownTimeUnits: Array<[string, number]> = [
  ['Y', 1000 * 60 * 60 * 24 * 365],
  ['M', 1000 * 60 * 60 * 24 * 30], 
  ['D', 1000 * 60 * 60 * 24],
  ['H', 1000 * 60 * 60], 
  ['m', 1000 * 60], 
  ['s', 1000], 
  ['S', 1], 
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayText:string = "Ya casi llega el día amor, solo un poquito más para estar abrazados y pegados como chicles, para estar juntos, para poder cuidarte y acompañarte, no volverás a estar solita mi amor, solo un poco más mi reina hermosa."
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
       this.calculateTimeDifference()
        return current;
      }, "D:H:m:s");
    }};

  calculateTimeDifference() {
    const currentDate = new Date();
    const targetDate = new Date('2024-06-15T00:00:00');

    const differenceInSeconds = Math.floor((targetDate.getTime() - currentDate.getTime()) / 1000);
  
    if (differenceInSeconds <= 0) {
      this.displayText = "Hemos pasado por mucho amor, pero el dia por fin llego, solo un poco mas mi reina hermosa, te veo dentro de poco amor mio, bienvenida a tu hogar amor "
    }
    return differenceInSeconds;
  }

}
