import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import {TabsModule} from "ngx-tabset";
import {AngularFireAuth} from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-oznaczenia',
  templateUrl: './oznaczenia.component.html',
  styleUrls: ['./oznaczenia.component.css']
})
export class OznaczeniaComponent implements OnInit {
 
  fireDB: AngularFireDatabase;
  oznaczenia$: Observable<any>;
  public values = '';

  
  constructor(fireDB: AngularFireDatabase, private modalService: NgbModal) {
    this.fireDB = fireDB;
  
  }
  ngOnInit() {
    this.oznaczenia$ = this.fireDB.list('oznaczenia').valueChanges();
  }

  onKey(event: any) { 
    this.values = event.target.value ;
  }
}
