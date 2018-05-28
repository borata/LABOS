import { UzytkownicyAdminComponent } from './../uzytkownicy-admin/uzytkownicy-admin.component';
import { ProductsAdminComponent } from './../products-admin/products-admin.component';
import { OznaczeniaAdminComponent } from './../oznaczenia-admin/oznaczenia-admin.component';
import { Component, OnInit } from '@angular/core';
import { TabsModule} from "ngx-tabset";
import { LocalDataSource, Ng2SmartTableModule} from 'ng2-smart-table';
import { ProducenciAdminComponent } from '../producenci-admin/producenci-admin.component';


@Component({
  selector: 'app-alltabs-admin',
  templateUrl: './alltabs-admin.component.html',
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
