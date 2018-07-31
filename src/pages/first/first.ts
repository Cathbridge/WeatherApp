import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WeathergetProvider } from '../../providers/weatherget/weatherget';

/**
 * Generated class for the FirstPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-first',
  templateUrl: 'first.html',
})
export class FirstPage {
  info;
city: string;
weatherInfo;

  constructor(public navCtrl: NavController, public navParams: NavParams, private weather: WeathergetProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirstPage');
  }

  onSelectChange(selectedValue: any) {
    if(this.city === "p"){
     
      this.weather.getWeatherP().subscribe(data => {this.info = data; console.log(data);
        this.weatherInfo = this.info.weather;
      })
    
  } 
  else if(this.city === "j"){
    this.weather.getWeatherJ().subscribe(data => {this.info = data; console.log(data);
      this.weatherInfo = this.info.weather;
    })

  }


  }

}
