import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { SaintDetailPage } from '../saint-detail/saint-detail';

import {SaintProvider} from '../../providers/saint-provider';
import { Santo } from '../../models/santo';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  providers: [SaintProvider]
})
export class AboutPage {

  santi: Santo[];

  constructor(public navCtrl: NavController, public saintService: SaintProvider) {
     // this.santi = {};

      saintService.getSaints().then(data =>{
        this.santi = data;
      });


  }

  saintSelected(santo) {

    this.navCtrl.push(SaintDetailPage, {item : santo});
    //alert("Oggi è " + santo.Nome);

  }

}
