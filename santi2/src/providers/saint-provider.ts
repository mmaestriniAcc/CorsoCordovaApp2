import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Santo } from '../models/santo';

/*
  Generated class for the SaintProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SaintProvider {

  santi: Santo[];

  constructor(public http: Http) {
    console.log('Hello SaintProvider Provider');
  }

  getSaints(): Promise<Santo[]> {
    return new Promise (
      resolve => {
        this.http.get("http://santieicone.azurewebsites.net/saints")
        .map(res => res.json())
        .subscribe(data => {
            this.santi = data;
            resolve(this.santi);
        });
      });
  }

  searchSaints(nome: string): Promise<Santo[]> {
    return new Promise (
      resolve => {
        this.http.get("http://santieicone.azurewebsites.net/search/" + nome)
        .map(res => res.json())
        .subscribe(data => {
            this.santi = data;
            resolve(this.santi);
        });
      });
  }


}
