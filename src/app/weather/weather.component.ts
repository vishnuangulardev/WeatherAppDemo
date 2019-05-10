import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  enter1 = false;
  cityname1;
  img1
  display1: boolean = false;
  temp1: any;
  error1: boolean = false;
  enter2 = false;
  cityname2;
  img2
  display2: boolean = false;
  temp2: any;
  error2: boolean = false;
  enter3 = false;
  cityname3;
  img3
  display3: boolean = false;
  temp3: any;
  error3: boolean = false;
  enter4 = false;
  cityname4;
  img4
  display4: boolean = false;
  temp4: any;
  error4: boolean = false;
  enter5 = false;
  cityname5;
  img5
  display5: boolean = false;
  temp5: any;
  error5: boolean = false;
  enter6 = false;
  cityname6;
  img6
  display6: boolean = false;
  temp6: any;
  error6: boolean = false;
  enter7 = false;
  cityname7;
  img7
  display7: boolean = false;
  temp7: any;
  error7: boolean = false;
  enter8 = false;
  cityname8;
  img8
  display8: boolean = false;
  temp8: any;
  error8: boolean = false;
  enter9 = false;
  cityname9;
  img9
  display9: boolean = false;
  temp9: any;
  error9: boolean = false;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  enterCity1() {
    this.enter1 = true;

  }
  getweather1() {

    console.log(this.cityname1);
    this.http.get("https://api.openweathermap.org/data/2.5/weather?q=" + this.cityname1 +
      "&appid=789e26faae68a5e88e56a40ff0dbb70e&units=metric").subscribe(val => {
        console.log(val)
        this.temp1 = val['main'].temp
        this.img1 = "http://openweathermap.org/img/w/" +
          val['weather'][0].icon +
          ".png";
        this.display1 = true;

      },
        (error) => {
          this.display1 = false;
          this.error1 = true
        }
      )

  }
  edit1() {
    this.display1 = false;

  }
  enterCity2() {
    this.enter2 = true;

  }
  getweather2() {

    console.log(this.cityname2);
    this.http.get("https://api.openweathermap.org/data/2.5/weather?q=" + this.cityname2 +
      "&appid=789e26faae68a5e88e56a40ff0dbb70e&units=metric").subscribe(val => {
        console.log(val)
        this.temp2 = val['main'].temp
        this.img2 = "http://openweathermap.org/img/w/" +
          val['weather'][0].icon +
          ".png";
        this.display2 = true;

      },
        (error) => {
          this.display2 = false;
          this.error2 = true
        }
      )

  }
  edit2() {
    this.display2 = false;

  }
  enterCity3() {
    this.enter3 = true;

  }
  getweather3() {

    console.log(this.cityname3);
    this.http.get("https://api.openweathermap.org/data/2.5/weather?q=" + this.cityname3+
      "&appid=789e26faae68a5e88e56a40ff0dbb70e&units=metric").subscribe(val => {
        console.log(val)
        this.temp3 = val['main'].temp
        this.img3 = "http://openweathermap.org/img/w/" +
          val['weather'][0].icon +
          ".png";
        this.display3 = true;

      },
        (error) => {
          this.display3= false;
          this.error3 = true
        }
      )

  }
  edit3() {
    this.display3 = false;

  }
  enterCity4() {
    this.enter4 = true;

  }
  getweather4() {

    console.log(this.cityname4);
    this.http.get("https://api.openweathermap.org/data/2.5/weather?q=" + this.cityname4 +
      "&appid=789e26faae68a5e88e56a40ff0dbb70e&units=metric").subscribe(val => {
        console.log(val)
        this.temp4 = val['main'].temp
        this.img4 = "http://openweathermap.org/img/w/" +
          val['weather'][0].icon +
          ".png";
        this.display4 = true;

      },
        (error) => {
          this.display4 = false;
          this.error4 = true
        }
      )

  }
  edit4() {
    this.display4 = false;

  }
  enterCity5() {
    this.enter5 = true;

  }
  getweather5() {

    console.log(this.cityname5);
    this.http.get("https://api.openweathermap.org/data/2.5/weather?q=" + this.cityname5 +
      "&appid=789e26faae68a5e88e56a40ff0dbb70e&units=metric").subscribe(val => {
        console.log(val)
        this.temp5 = val['main'].temp
        this.img5 = "http://openweathermap.org/img/w/" +
          val['weather'][0].icon +
          ".png";
        this.display5= true;

      },
        (error) => {
          this.display5 = false;
          this.error5 = true
        }
      )

  }
  edit5() {
    this.display5 = false;

  }
  enterCity6() {
    this.enter6 = true;

  }
  getweather6() {

    console.log(this.cityname6);
    this.http.get("https://api.openweathermap.org/data/2.5/weather?q=" + this.cityname6 +
      "&appid=789e26faae68a5e88e56a40ff0dbb70e&units=metric").subscribe(val => {
        console.log(val)
        this.temp6 = val['main'].temp
        this.img6 = "http://openweathermap.org/img/w/" +
          val['weather'][0].icon +
          ".png";
        this.display6 = true;

      },
        (error) => {
          this.display6 = false;
          this.error6 = true
        }
      )

  }
  edit6() {
    this.display6 = false;

  }
  enterCity7() {
    this.enter7 = true;

  }
  getweather7() {

    console.log(this.cityname7);
    this.http.get("https://api.openweathermap.org/data/2.5/weather?q=" + this.cityname7 +
      "&appid=789e26faae68a5e88e56a40ff0dbb70e&units=metric").subscribe(val => {
        console.log(val)
        this.temp7 = val['main'].temp
        this.img7= "http://openweathermap.org/img/w/" +
          val['weather'][0].icon +
          ".png";
        this.display7 = true;

      },
        (error) => {
          this.display7 = false;
          this.error7 = true
        }
      )

  }
  edit7() {
    this.display7 = false;

  }
  enterCity8() {
    this.enter8 = true;

  }
  getweather8() {

    console.log(this.cityname8);
    this.http.get("https://api.openweathermap.org/data/2.5/weather?q=" + this.cityname8 +
      "&appid=789e26faae68a5e88e56a40ff0dbb70e&units=metric").subscribe(val => {
        console.log(val)
        this.temp8 = val['main'].temp
        this.img8 = "http://openweathermap.org/img/w/" +
          val['weather'][0].icon +
          ".png";
        this.display8 = true;

      },
        (error) => {
          this.display8 = false;
          this.error8 = true
        }
      )

  }
  edit8() {
    this.display8 = false;

  }
  enterCity9() {
    this.enter9 = true;

  }
  getweather9() {

    console.log(this.cityname9);
    this.http.get("https://api.openweathermap.org/data/2.5/weather?q=" + this.cityname9 +
      "&appid=789e26faae68a5e88e56a40ff0dbb70e&units=metric").subscribe(val => {
        console.log(val)
        this.temp9 = val['main'].temp
        this.img9 = "http://openweathermap.org/img/w/" +
          val['weather'][0].icon +
          ".png";
        this.display9 = true;

      },
        (error) => {
          this.display9 = false;
          this.error9 = true
        }
      )

  }
  edit9() {
    this.display9 = false;

  }
}
