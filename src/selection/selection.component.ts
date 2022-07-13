import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { WeatherDataService } from '../weatherdata.service'
import { WeatherComponent } from '../weather/weather.component';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent implements OnInit {
  @Output() onSelection: EventEmitter<WeatherComponent> = new EventEmitter<WeatherComponent>()  
  weather: WeatherComponent = new WeatherComponent()
  city: String = ""

  constructor(private weatherData: WeatherDataService) { }

  submit() {
    this.weatherData.load(this.city).subscribe(data => {
      this.weather.city = data['name']
      this.weather.conditions = data['weather'][0]['main']
      this.weather.temperature = Math.round((data['main']['temp'] - 273.15)*1.8 + 32)
      this.weather.icon = this.weatherData.getIconUrl(data['weather'][0]['icon'])

      this.onSelection.emit(this.weather)
    })
  }

  ngOnInit() {
  }

}