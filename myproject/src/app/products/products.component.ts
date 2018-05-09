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
        title: 'Numer CAS'
      },
      dataAktualizacji: {
        title: 'Data Aktualizacji'
      },
      materialNiebezpieczny: {
        title: 'Material Niebezpieczny'
      },
      nazwaChemiczna: {
        title: 'nazwa Chemiczna'
      },
      przeznaczenie: {
        title: 'przeznaczenie'
      },
      zwrotWskazujacyRodzajZagrozeniaH: {
        title: 'zwrot Wskazujacy Rodzaj Zagrozenia H'
      },
      zwrotyWskazujaceSrodkiOstroznosciP: {
        title: 'zwroty Wskazujace Srodki Ostroznosci P'
      },
      symboleOstrzegawcze: {
        title: 'symbole Ostrzegawcze'
      },
      zwrotRyzykaR: {
        title: 'zwrot RyzykaR'
      },
      zwrotyBezpieczenstwaS: {
        title: ' zwroty Bezpieczenstwa S'
      },
      iloscPosiadana: {
        title: 'ilosc Posiadana'
      },
      godzinaAktualizacji: {
        title: 'godzina Aktualizacji'
      },
      miejscePrzechowywania: {
        title: 'miejsce Przechowywania'
      },
      wydzial: {
        title: 'wydzial'
      },
      osobaOdpowiedzialna: {
        title: 'osoba Odpowiedzialna'
      }
    },
    attr: {
      class: 'wymyslona'
    },
  };

  
  data: LocalDataSource = new LocalDataSource();
  
  constructor (private db: AngularFireDatabase) {

   db.list('/produkty').valueChanges()
   .subscribe(products => {
     this.products = products;
     this.data.load(products) // create the source
 
   } ) 
}
  ngOnInit() {
  }

  create(event, product: HTMLInputElement) {
 
    if (window.confirm('Are you sure you want to create?')) {
   
      event.confirm.resolve(event.newData);
      if( event.newData != ''){
          console.log(event.newData)
      event.newData.createdDate = new Date() ; 
     
           this.db.list('/produkty').push(event.newData);
 
      }
    } else {
      event.confirm.reject();
    }

}}

