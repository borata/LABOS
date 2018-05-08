import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { AngularFireDatabase } from 'angularfire2/database';
import {TabsModule} from "ngx-tabset";
import {AngularFireAuth} from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';



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
      }
    } 
  };

  
  data: LocalDataSource = new LocalDataSource();
  
  constructor(private db: AngularFireDatabase) { 

    db.list('/producenci').valueChanges()
   .subscribe(producenci => {
     this.producenci = producenci;
     this.data.load(producenci)
     
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
     
           this.db.list('/producenci').push(event.newData);
 
      }
    } else {
      event.confirm.reject();
    }
  }

}
