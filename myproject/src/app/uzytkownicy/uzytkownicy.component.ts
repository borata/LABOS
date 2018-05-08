import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { AngularFireDatabase } from 'angularfire2/database';
import {TabsModule} from "ngx-tabset";


@Component({
  selector: 'app-uzytkownicy',
  template: `
  <pre>
  <ng2-smart-table [settings]="settings" [source]="data" ></ng2-smart-table>
  {{uzytkownicy | json }}
  </pre>
  `,
  styleUrls: ['./uzytkownicy.component.css']
})
export class UzytkownicyComponent implements OnInit {

  uzytkownicy: any[];
  settings = {
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
  
  constructor(private db: AngularFireDatabase) {

    db.list('/uzytkownicy').valueChanges()
   .subscribe(uzytkownicy => {
     this.uzytkownicy = uzytkownicy;
     this.data.load(uzytkownicy);
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
     
           this.db.list('/uzytkownicy').push(event.newData);
 
      }
    } else {
      event.confirm.reject();
    }
  }

}
