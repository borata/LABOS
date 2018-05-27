import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { LocalDataSource } from 'ng2-smart-table';
import {TabsModule} from "ngx-tabset";
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'app-uzytkownicy-admin',
  template: `
  <div class="tableproducts">
<pre>
<ng2-smart-table [settings]="settings" [source]="data" 
(createConfirm)="create($event)"  
></ng2-smart-table>
</pre>
</div>`,
  styleUrls:  ['./uzytkownicy-admin.component.css']
})

@Injectable()
export class UzytkownicyAdminComponent implements OnInit {


  uzytkownicy: any[]; //atrybuty

settings = {
  add:
  {
    confirmCreate: true,
  },
  delete: {
    confirmDelete: true,
  },
   columns: {
     
    Iduzytkownika: {
      title: 'IIduzytkownika'
    },
    rola: {
      title: 'rola'
    },
    imie: {
      title: 'imie'
    },
    nazwisko: {
      title: 'nazwisko'
    },
    email: {
      title: 'email'
    },
    numerIndeksu: {
      title: 'numerIndeksu'
    },
    wydzial: {
      title: 'wydzial'
    },
    kierunek: {
      title: 'kierunek'
    },
    rokStudiow: {
      title: 'rokStudiow'
    },
    grupaZajeciowa: {
      title: 'grupaZajeciowa'
    },
    numerTelefonuw: {
      title: 'numerTelefonu'
    }
         
         }
 };

 data: LocalDataSource = new LocalDataSource();
 items: Observable<any[]>;

 
  constructor(private db: AngularFireDatabase) { db.list('/uzytkownicy').valueChanges()
  .subscribe(uzytkownicy=> {
    this. uzytkownicy = uzytkownicy;
    this.data.load(uzytkownicy) // create the source

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
     
           this.db.list('/uzytkownicy').push(event.newData);
 
      }
    } else {
      event.confirm.reject();
   }

  }}

