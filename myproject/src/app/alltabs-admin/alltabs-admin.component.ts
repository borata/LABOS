import { UzytkownicyAdminComponent } from './../uzytkownicy-admin/uzytkownicy-admin.component';
import { ProductsAdminComponent } from './../products-admin/products-admin.component';
import { OznaczeniaAdminComponent } from './../oznaczenia-admin/oznaczenia-admin.component';
import { Component, OnInit } from '@angular/core';
import { TabsModule} from "ngx-tabset";
import { LocalDataSource, Ng2SmartTableModule} from 'ng2-smart-table';
import { ProducenciAdminComponent } from '../producenci-admin/producenci-admin.component';


@Component({
  selector: 'app-alltabs-admin',
  template: `

  
 <div class=""style="background-color:ghostwhite;">
 
 <ngx-tabset>
   <ngx-tab title="PRODUKTY" >
     <app-products-admin> </app-products-admin>
   </ngx-tab>
   <ngx-tab title="UZYTKOWNICY">
     <app-uzytkownicy-admin> </app-uzytkownicy-admin>
   </ngx-tab>
   <ngx-tab title="PRODUCENCI" >
     <app-producenci-admin> </app-producenci-admin>
   </ngx-tab>
   <ngx-tab title="OZNACZENIA" >
     <app-oznaczenia-admin> </app-oznaczenia-admin>
   </ngx-tab>
 </ngx-tabset>
 </div>
   `,
  styleUrls: ['./alltabs-admin.component.css']
})
export class AlltabsAdminComponent implements OnInit {

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
