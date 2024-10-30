import { Component, inject } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { MainWeatherComponent } from "../../components/main-weather/main-weather.component";
import { TodayForecastComponent } from "../../components/today-forecast/today-forecast.component";
import { AirConditionsComponent } from "../../components/air-conditions/air-conditions.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, MainWeatherComponent, TodayForecastComponent, AirConditionsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  wServ = inject(WeatherService)
  
  protected weatherData$=this.wServ.weatherData$
  

  ngOnInit() {
     
    this.wServ.getWeather(41.902782, 12.496366)
    
  }

}
