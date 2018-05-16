import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import {TabsModule} from "ngx-tabset";
import {AngularFireAuth} from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  fireDB: AngularFireDatabase;
  produkty$: Observable<any>;

  
  constructor(fireDB: AngularFireDatabase, private modalService: NgbModal) {
    this.fireDB = fireDB;
  
  }
  ngOnInit() {
    this.produkty$ = this.fireDB.list('produkty').valueChanges();
  }
}

