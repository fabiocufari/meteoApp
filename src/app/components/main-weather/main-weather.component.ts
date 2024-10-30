import { Component } from '@angular/core';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-main-weather',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './main-weather.component.html',
  styleUrl: './main-weather.component.scss'
})
export class MainWeatherComponent {

}
