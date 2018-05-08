import { LocalDataSource } from 'ng2-smart-table';

import { AngularFireDatabase } from 'angularfire2/database';
import { environment } from './../../environments/environment';
import { Component } from '@angular/core';


@Component({
  selector: 'app-wprowadz-id',
  templateUrl: './wprowadz-id.component.html',
  styleUrls: ['./wprowadz-id.component.css']
})
export class WprowadzIdComponent {

  [x: string]: any;
  starRate = 2;
  heartRate = 4;
  products: any[];
  settings = {
    columns: {
      nazwaChemiczna: {
        title: 'nazwaChemiczna'
      }
    }
  };
  data: LocalDataSource = new LocalDataSource();
  constructor(db: AngularFireDatabase) {
    db.list('/produkty').valueChanges()
      .subscribe(products => {
        this.products = products;
        this.data.load(products)
        JSON.stringify(this.products);
      });
  }
}