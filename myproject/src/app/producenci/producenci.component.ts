import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import {TabsModule} from "ngx-tabset";
import {AngularFireAuth} from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-producenci',
  templateUrl: './producenci.component.html',
  styleUrls: ['./producenci.component.css']
})
export class ProducenciComponent implements OnInit {

  fireDB: AngularFireDatabase;
  producenci$: Observable<any>;

  
  constructor(fireDB: AngularFireDatabase, private modalService: NgbModal) {
    this.fireDB = fireDB;
  
  }
  ngOnInit() {
    this.producenci$ = this.fireDB.list('producenci').valueChanges();
  }
}