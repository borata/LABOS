import { OznaczeniaComponent } from './../oznaczenia/oznaczenia.component';
import { ProductsComponent } from './../products/products.component';
import { Component, OnInit } from '@angular/core';
import {TabsModule} from "ngx-tabset";
import { UzytkownicyComponent } from '../uzytkownicy/uzytkownicy.component';
import { ProducenciComponent } from '../producenci/producenci.component';
import { LocalDataSource, Ng2SmartTableModule} from 'ng2-smart-table';



//tutaj zaimportowac z kazdych komponentow i wsadzic do tabel np app product app skladnik

@Component({
  selector: 'app-alltabs',
  template: `

  <ng2-smart-table [settings]="settings" [source]="data" ></ng2-smart-table>

<ngx-tabset>
  <ngx-tab title="PRODUKTY">
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
</ngx-tabset>
  
  `,
  styleUrls: ['./alltabs.component.css']
})
export class AlltabsComponent implements OnInit {

  products:any[];
  oznaczenia:any[];
  producenci:any[];
  uzytkownicy:any[];
data: LocalDataSource = new LocalDataSource();

  constructor() { }

  ngOnInit() {
  }

}
