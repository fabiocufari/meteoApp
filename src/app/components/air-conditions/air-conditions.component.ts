import { Component } from '@angular/core';
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'app-air-conditions',
  standalone: true,
  imports: [LoaderComponent],
  templateUrl: './air-conditions.component.html',
  styleUrl: './air-conditions.component.scss'
})
export class AirConditionsComponent {

}
