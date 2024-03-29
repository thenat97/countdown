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
  displayText:string = "Solo unas horas más para el gran día amor, por lo general soy paciente, pero en estos momentos solo puedo pensar en ti y lo poco que falta, ya te quiero ver amor, solo un poquito más."
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
    const targetDate = new Date('2024-03-23T00:00:00');

    const differenceInSeconds = Math.floor((targetDate.getTime() - currentDate.getTime()) / 1000);
  
    if (differenceInSeconds <= 0) {
      this.displayText = "Una vez más ha llegado el gran día mi amor, solo un ratito más y nos veremos de nuevo, estaremos pegados como chicles, te amo muchote mi reina hermosa, pronto podre decirte, bienvenida a tu hogar. "
    }
    return differenceInSeconds;
  }

}
