import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { AngularFireDatabase } from 'angularfire2/database';
import {TabsModule} from "ngx-tabset";
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'app-oznaczenia',
  template: `
  <pre>
  <ng2-smart-table [settings]="settings" [source]="data" ></ng2-smart-table>
  {{oznaczenia | json }}
  </pre>
  `,
  styleUrls: ['./oznaczenia.component.css']
})
export class OznaczeniaComponent implements OnInit {

  oznaczenia: any[];
  settings = {
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
  constructor(db: AngularFireDatabase) { 
    db.list('/oznaczenia').valueChanges()
    .subscribe(oznaczenia => {
      this.oznaczenia = oznaczenia;
      this.data.load(oznaczenia)
    } )
  }

  ngOnInit() {
  }

}
