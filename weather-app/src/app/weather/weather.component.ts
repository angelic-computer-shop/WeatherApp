import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent {
  city: string = '';
  weatherData: any;

  constructor(private weatherService: WeatherService) {}

  getWeather() {
    this.weatherService.getWeather(this.city).then((response) => {
      this.weatherData = response.data;
    });
  }
}
