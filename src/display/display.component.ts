import { Component, OnInit } from '@angular/core';
import { WeatherComponent } from '../weather/weather.component';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent{
  weather: WeatherComponent = { 
    city: "Los Angeles", 
    conditions: "Sunny", 
    temperature: 70, 
    icon: "" 
  }

  constructor() { }

  ngOnInit() {
  }

  update(weather: WeatherComponent) { 
    this.weather = weather 
  }
 
}