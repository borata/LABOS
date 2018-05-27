
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { LocalDataSource } from 'ng2-smart-table';
import {TabsModule} from "ngx-tabset";
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'app-producenci-admin',
  template: `
 
<pre>
<ng2-smart-table [settings]="settings" [source]="data" 
(createConfirm)="create($event)"  
></ng2-smart-table>
</pre>`,
  styleUrls:  ['./producenci-admin.component.css']
})

@Injectable()
export class ProducenciAdminComponent implements OnInit {


  producenci: any[]; //atrybuty

settings = {
  add:
  {
    confirmCreate: true,
  },
  delete: {
    confirmDelete: true,
  },
   columns: {
     
    nazwaFirmy: {
      title: 'nazwaFirmy'
    },
    adres: {
            title: 'adres'
             }
         
         }
 };

 data: LocalDataSource = new LocalDataSource();
 items: Observable<any[]>;

 
  constructor(private db: AngularFireDatabase) { db.list('/producenci').valueChanges()
  .subscribe(producenci=> {
    this.producenci = producenci;
    this.data.load(producenci) // create the source

  } ) }

  ngOnInit() {
    console.log('adasdsadasds')
  }

  create(event, product: HTMLInputElement) {
 
    if (window.confirm('Are you sure you want to create?')) {
   
      event.confirm.resolve(event.newData);
      if( event.newData != ''){
          console.log(event.newData)
      event.newData.createdDate = new Date() ; 
     
           this.db.list('/producenci').push(event.newData);
 
      }
    } else {
      event.confirm.reject();
   }

  }}

