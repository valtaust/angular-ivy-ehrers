import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DisplayComponent } from '../display/display.component';
import { RouterModule } from '@angular/router';
import { WeatherComponent } from '../weather/weather.component';

import { HttpClientModule } from '@angular/common/http'
import { WeatherDataService } from '../weatherdata.service'
import { SelectionComponent } from '../selection/selection.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot([
    { path: 'weather.city', component: DisplayComponent },
    { path: '', component: WeatherComponent },
    { path: 'City', component: SelectionComponent }
  ]),
],
  providers: [WeatherDataService],
  declarations: [ AppComponent, HelloComponent, DisplayComponent, WeatherComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
