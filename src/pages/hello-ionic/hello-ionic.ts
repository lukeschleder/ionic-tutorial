import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { LukesPage } from '../lukes-page/lukes-page';



@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }
  itemTapped(event) {
    this.navCtrl.push(LukesPage);
  }
}
