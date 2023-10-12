import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey = '43f15742-6900-11ee-a26f-0242ac130002-43f157ba-6900-11ee-a26f-0242ac130002';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor() {}

  getWeather(city: string) {
    const params = {
      q: city,
      appid: this.apiKey,
      units: 'metric', // You can change the units to 'imperial' or 'standard'
    };

    return axios.get(this.apiUrl, { params });
  }
}

