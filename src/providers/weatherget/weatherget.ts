import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the WeathergetProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeathergetProvider {

  constructor(public http: HttpClient) {
    console.log('Hello WeathergetProvider Provider');
  }

  getWeather(city: any){
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q='+ city +'&&APPID=b1943cb006f34d0761e4ea4019b6dc67');
  }
  getWeatherP(){
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=Pretoria&APPID=b1943cb006f34d0761e4ea4019b6dc67');
  }
  getWeatherJ(){
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=Durban&APPID=b1943cb006f34d0761e4ea4019b6dc67');
  }

}
