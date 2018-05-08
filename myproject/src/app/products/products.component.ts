import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Injectable } from '@angular/core';
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
 
  <div class="tableproducts">
    <pre>
    <ng2-smart-table [settings]="settings" [source]="data" 
    (createConfirm)="create($event)"  
     ></ng2-smart-table>
    {{products | json }}
    </pre>
  </div>

  `,
  styleUrls: ['./products.component.css']
})

@Injectable()
export class ProductsComponent implements OnInit {
  
  
  products$: Observable<any>;
  products: any[]; //atrybuty
  oznaczenia: any[];
producenci: any[];

  
 
  settings = {
    add:
    {
      confirmCreate: true,
    },
    delete: {
      confirmDelete: true,
    },
    columns: {
      IDnumerCAS: {
        title: 'IDnumerCAS',
        type: 'string',        
      },
      dataAktualizacji: {
        title: 'DataAktualizacji',
      },
      materialNiebezpieczny: {
        title: 'MaterialNiebezpieczny',
        type: 'boolean',  
      },
      nazwaChemiczna: {
        title: 'nazwaChemiczna',
        type: 'string',
      },
      przeznaczenie: {
        title: 'przeznaczenie',
        type: 'string',
      },
      zwrotWskazujacyRodzajZagrozeniaH: {
        title: 'zwrotWskazujacyRodzajZagrozeniaH',
        type: 'string',
      },
      zwrotyWskazujaceSrodkiOstroznosciP: {
        title: 'zwrotyWskazujaceSrodkiOstroznosciP',
        type: 'string',
      },
      symboleOstrzegawcze: {
        title: 'symboleOstrzegawcze',
        type: 'string',
      },
      zwrotRyzykaR: {
        title: 'zwrotRyzykaR',
        type: 'string',
      },
      zwrotyBezpieczenstwaS: {
        title: 'zwrotyBezpieczenstwaS ',
        type: 'string',
      },
      iloscPosiadana: {
        title: ' iloscPosiadana',
        type: 'number',
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
    }
  };


  
  data: LocalDataSource = new LocalDataSource();
  
  items: Observable<any[]>;
  constructor ( private db: AngularFireDatabase) {

   db.list('/produkty').valueChanges()
   .subscribe(products => {
     this.products = products;
     this.data.load(products) // create the source
 
   } ) 
}
  ngOnInit() {
    console.log('adasdsadasds')
 
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
  }

  // onDeleteConfirm(event): void {
  //   if (window.confirm('Czy usunąć?')) {
  //     console.log(event)
  //     event.confirm.resolve();
  //     this.db.object('/produkty').remove();

     
  //   } else {
  //     event.confirm.reject();
  //   }
  // }
}

