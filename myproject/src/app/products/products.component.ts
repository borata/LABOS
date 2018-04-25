import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { LocalDataSource } from 'ng2-smart-table';
import {TabsModule} from "ngx-tabset";
import {AngularFireAuth} from 'angularfire2/auth';



//musi miec inny source - a potem rozdzielic na inne komponenty
//nie jest tempalteURL wiec mi nie czyta products.component.html
//zrobić main komponent który bedzie przechowywał tabsy
// zrodło to tam gdzie /products
// skopioać wszystkie komponenty 

@Component({
  selector: 'app-products',
  template: `  
 
  <pre>
  <ng2-smart-table [settings]="settings" [source]="data" ></ng2-smart-table>
  {{products | json }}
  </pre>
  

  `,
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any[]; //atrybuty
  oznaczenia: any[];
producenci: any[];
  
 
  settings = {
    columns: {
      IDnumerCAS: {
        title: 'IDnumerCAS'
      },
      dataAktualizacji: {
        title: 'DataAktualizacji'
      },
      materialNiebezpieczny: {
        title: 'MaterialNiebezpieczny'
      },
      nazwaChemiczna: {
        title: 'nazwaChemiczna'
      },
      przeznaczenie: {
        title: 'przeznaczenie'
      },
      zwrotWskazujacyRodzajZagrozeniaH: {
        title: 'zwrotWskazujacyRodzajZagrozeniaH'
      },
      zwrotyWskazujaceSrodkiOstroznosciP: {
        title: 'zwrotyWskazujaceSrodkiOstroznosciP'
      },
      symboleOstrzegawcze: {
        title: 'symboleOstrzegawcze'
      },
      zwrotRyzykaR: {
        title: 'zwrotRyzykaR'
      },
      zwrotyBezpieczenstwaS: {
        title: 'nazwaChemiczna'
      },
      iloscPosiadana: {
        title: 'nazwaChemiczna'
      },
      godzinaAktualizacji: {
        title: 'godzinaAktualizacji'
      },
      miejscePrzechowywania: {
        title: 'miejscePrzechowywania'
      },
      wydzial: {
        title: 'wydzial'
      },
      osobaOdpowiedzialna: {
        title: 'osobaOdpowiedzialna'
      }
    },
    attr: {
      class: 'table table-bordered'
    },
  };

  
  data: LocalDataSource = new LocalDataSource();
  
  constructor (db: AngularFireDatabase) {

   db.list('/produkty').valueChanges()
   .subscribe(products => {
     this.products = products;
     this.data.load(products) // create the source
 
   } ) 
}
  ngOnInit() {
  }

}

