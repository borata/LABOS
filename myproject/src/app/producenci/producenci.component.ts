import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { AngularFireDatabase } from 'angularfire2/database';
import {TabsModule} from "ngx-tabset";


@Component({
  selector: 'app-producenci',
  template: `
  <pre>
  <ng2-smart-table [settings]="settings" [source]="data" ></ng2-smart-table>
  {{producenci | json }}
  </pre>
  `,
  styleUrls: ['./producenci.component.css']
})
export class ProducenciComponent implements OnInit {

  producenci: any[];
  settings = {
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
  
  constructor(db: AngularFireDatabase) { 

    db.list('/producenci').valueChanges()
   .subscribe(producenci => {
     this.producenci = producenci;
     console.log(this.producenci);
     
   } )

  }
 
  
 
  
  ngOnInit() {
  }

}
