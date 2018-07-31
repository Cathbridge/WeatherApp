import { WeathergetProvider } from './../../providers/weatherget/weatherget';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  info;
  we: boolean;
  change;
  city : string;
  weatherInfo;
  weatherState;
  icon: string;
  //convert

  Temp;
  K;
  CtoF;// temp * 9/5 + 32;
  FtoC; // (temp - 32) * 5/9;
  getTemp;
  //ngModel
  degrees;
  sa: boolean;
  all: boolean;
  faran: boolean;
  kelvin: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private weather: WeathergetProvider, public alertCtrl: AlertController) {
     //this.weather.getWeather(this.city).subscribe(data => {this.info = data; console.log(data), this.weatherInfo = this.info})
     this.we = false;
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  onUpdate(){
   
     if(this.city === this.city){
      console.log(this.city);
    this.we = true;
    this.all = false;
    this.sa = true;
    this.faran = false;
    this.weather.getWeather(this.city).subscribe(data => {this.info = data; console.log(data), this.weatherInfo = this.info; console.log(this.city);
    this.icon = this.info.weather[0].icon;
    this.weatherState = "http://openweathermap.org/img/w/"+ this.icon +".png";
    })
  }
  if(this.city === undefined){
    // alert("enter city");
    this.we = false;
    this.all = false;
    this.sa = false;
    this.faran = false;
    const alert = this.alertCtrl.create({
      title: 'Error 555',
      subTitle: 'Please enter city name to search weather',
      buttons: ['OK']
    });
    alert.present();
  }
}
onSelectChange(){
  if(this.degrees === "C"){
    this.sa = false;
    this.all = true;
    this.faran = false;
    this.kelvin = false;
    this.weather.getWeather(this.city).subscribe(data => {this.info = data; console.log(data), this.weatherInfo = this.info;
      this.Temp = this.info.main.temp-273.15;
      this.Temp = this.info.main.temp_min-273.15;
      this.Temp = this.info.main.temp_max-273.15;
      this.CtoF = this.Temp;
    })
 

  }else if(this.degrees === "F"){
    this.sa = false;
    this.all = false;
    this.faran = true;
    this.kelvin = false;
    this.weather.getWeather(this.city).subscribe(data => {this.info = data; console.log(data), this.weatherInfo = this.info;
      this.Temp = this.info.main.temp-459.67;
      this.Temp = this.info.main.temp_min-459.67;
      this.Temp = this.info.main.temp_max-459.67;
      this.FtoC = this.Temp;
    })
  }else if(this.degrees === "K"){
    this.kelvin = true;
    this.sa = false;
    this.all = false;
    this.faran = false;

    this.weather.getWeather(this.city).subscribe(data => {this.info = data; console.log(data), this.weatherInfo = this.info;
      this.Temp = this.info.main.temp;
      this.Temp = this.info.main.temp_min;
      this.Temp = this.info.main.temp_max;
      this.K = this.Temp;

  })
}
}

onRefresh(){
  this.navCtrl.setRoot(this.navCtrl.getActive().component);
}

}
