import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { LocalDataSource } from 'ng2-smart-table';
import {TabsModule} from "ngx-tabset";
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'app-oznaczenia-admin',
  template: `
 
<pre>
<ng2-smart-table [settings]="settings" [source]="data" 
(createConfirm)="create($event)"  
></ng2-smart-table>
</pre>
 `,
  styleUrls:  ['./oznaczenia-admin.component.css']
})

@Injectable()
export class OznaczeniaAdminComponent implements OnInit {


  oznaczenia: any[]; //atrybuty

settings = {
  add:
  {
    confirmCreate: true,
  },
  delete: {
    confirmDelete: true,
  },
   columns: {
     
    status: {
      title: 'status'
    },
    zwrot: {
      title: 'zwrot'
    },
    slownie: {
      title: 'slownie'
    }
         
         }
 };

 data: LocalDataSource = new LocalDataSource();
 items: Observable<any[]>;

 
  constructor(private db: AngularFireDatabase) { db.list('/oznaczenia').valueChanges()
  .subscribe(oznaczenia => {
    this.oznaczenia = oznaczenia;
    this.data.load(oznaczenia) // create the source

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
     
           this.db.list('/oznaczenia').push(event.newData);
 
      }
    } else {
      event.confirm.reject();
   }

  }}

