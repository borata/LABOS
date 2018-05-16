import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import {TabsModule} from "ngx-tabset";
import {AngularFireAuth} from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-uzytkownicy',
  templateUrl: './uzytkownicy.component.html',
  styleUrls: ['./uzytkownicy.component.css']
})
export class UzytkownicyComponent implements OnInit {

  fireDB: AngularFireDatabase;
  uzytkownicy$: Observable<any>;

  
  constructor(fireDB: AngularFireDatabase, private modalService: NgbModal) {
    this.fireDB = fireDB;
  
  }
  ngOnInit() {
    this.uzytkownicy$ = this.fireDB.list('uzytkownicy').valueChanges();
  }
}