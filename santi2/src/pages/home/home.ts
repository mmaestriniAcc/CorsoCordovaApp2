import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import {SaintProvider} from '../../providers/saint-provider';
import { Santo } from '../../models/santo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [SaintProvider]
})
export class HomePage {

  santi: Santo[];

  constructor(public navCtrl: NavController, public saintService: SaintProvider) {
     
  }

  saintCerca(nomeSanto) {
    alert("cerchi " + nomeSanto );
    this.saintService.searchSaints(nomeSanto).then(data =>{
        this.santi = data;
        alert("trovato " + this.santi[0].Storia );
      });
    //this.navCtrl.push(SaintDetailPage, {item : santo});
  }
}
