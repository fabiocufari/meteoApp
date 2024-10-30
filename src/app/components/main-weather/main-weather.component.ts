import { Component, Input } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { Observable } from 'rxjs/internal/Observable';
import { AsyncPipe } from '@angular/common';
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'app-main-weather',
  standalone: true,
  imports: [IconComponent,LoaderComponent, AsyncPipe],
  templateUrl: './main-weather.component.html',
  styleUrl: './main-weather.component.scss'
})
export class MainWeatherComponent {
  @Input({required: true}) data = new Observable<any>;
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
