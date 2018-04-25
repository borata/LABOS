import { OznaczeniaComponent } from './../oznaczenia/oznaczenia.component';
import { ProductsComponent } from './../products/products.component';
import { Component, OnInit } from '@angular/core';
import { TabsModule} from "ngx-tabset";
import { UzytkownicyComponent } from '../uzytkownicy/uzytkownicy.component';
import { ProducenciComponent } from '../producenci/producenci.component';
import { LocalDataSource, Ng2SmartTableModule} from 'ng2-smart-table';



//tutaj zaimportowac z kazdych komponentow i wsadzic do tabel np app product app skladnik

@Component({
  selector: 'app-alltabs',
  template: `
  <div class="col-sm-4 table" style="background-color:lavender;">

<ngx-tabset>
  <ngx-tab title="PRODUKTY" >
    <app-products> </app-products>
  </ngx-tab>
  <ngx-tab title="UZYTKOWNICY">
    <app-uzytkownicy> </app-uzytkownicy>
  </ngx-tab>
  <ngx-tab title="PRODUCENCI" >
    <app-producenci> </app-producenci>
  </ngx-tab>
  <ngx-tab title="OZNACZENIA" >
    <app-oznaczenia> </app-oznaczenia>
  </ngx-tab>
  <ngx-tab title="WPROWADZ ILOSC" >
    <app-wprowadz-ilosc> </app-wprowadz-ilosc>
  </ngx-tab>
</ngx-tabset>
  </div>
  `,
  styleUrls: ['./alltabs.component.css']
})
export class AlltabsComponent implements OnInit {

  products:any[];
  oznaczenia:any[];
  producenci:any[];
  uzytkownicy:any[];
  wprowadz_ilosc:any[]
  
data: LocalDataSource = new LocalDataSource();

  constructor() { }

  ngOnInit() {
  }

}
