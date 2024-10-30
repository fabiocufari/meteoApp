import { Component, Input } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { AdjustHourPipe } from '../../pipes/adjust-hour.pipe';
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'app-today-forecast',
  standalone: true,
  imports: [AdjustHourPipe ,IconComponent,AsyncPipe,LoaderComponent],
  templateUrl: './today-forecast.component.html',
  styleUrl: './today-forecast.component.scss'
})


export class TodayForecastComponent {
  @Input({required: true}) data = new Observable<any>;
  threeHoursMode: boolean = false;

  toggleMode(event: Event): void {
    this.threeHoursMode = (event.target as HTMLInputElement).checked;
    

  }

  ICON_MAPPING = {
    'clear-day': 'wi-day-sunny',
    'clear-night': 'wi-night-clear',
    'partly-cloudy-day': 'wi-day-cloudy',
    'partly-cloudy-night': 'wi-night-cloudy',
    'cloudy': 'wi-cloud',
    'fog': 'wi-fog',
    'wind': 'wi-strong-wind',
    'rain': 'wi-rain',
    'sleet': 'wi-sleet',
    'snow': 'wi-snow',
    'hail': 'wi-hail',
    'thunderstorm': 'wi-thunderstorm',
  }
  

  ngOnInit(){
    
  }

  getIconClass(iconKey: string): string {
    return this.ICON_MAPPING[iconKey as keyof typeof this.ICON_MAPPING] || 'wi-na';
  }

}
