import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { AngularFireDatabase, AngularFireList  } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { mergeAll, tap, map } from 'rxjs/operators';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ProduktService} from '../models/produkt.service';
import { Produkt } from '../models/produkt.model';

@Component({
    selector: 'app-wprowadz-ilosc',
    templateUrl: './wprowadz-ilosc.component.html',
    styleUrls: ['./wprowadz-ilosc.component.css'],
    providers :[ProduktService],
})


export class WprowadzIloscComponent implements OnInit {

    itemCount: number;
    btnText: string = 'Akceptuj';
    substanceID: string;
    substanceAmount: number;
    usedSubstances = [];
    fireDB: AngularFireDatabase;
    listaProduktow: AngularFireList<any>
    produkty$: Observable<any>;
    wybranyProdukt;
    costam;
    produktList: Produkt[];

    constructor(private produktService:ProduktService, private modalService: NgbModal) {}

   

    ngOnInit() {
      var x = this.produktService.getData();
      x.snapshotChanges().subscribe(item => {
        this.produktList = [];
        item.forEach(element => {
          var y = element.payload.toJSON();
          y["$key"] = element.key;
          this.produktList.push(y as Produkt);
        });
      });
    }

    open(content){
      this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
    }

    addItem(event,content) {
      if(this.wybranyProdukt && this.wybranyProdukt.iloscPosiadana>this.substanceAmount){
        this.usedSubstances.push({
          wybranyProdukt: this.wybranyProdukt,
          ilosc: this.substanceAmount,
        });
        console.log(this.usedSubstances);
        this.itemCount = this.usedSubstances.length;
        this.open(content);
        this.wybranyProdukt.iloscPosiadana -= this.substanceAmount;
        console.log(this.wybranyProdukt.key);
    }
    else {
      alert('Wprowadzono niepoprawna ilosc');
    }
  }
  onOptionsSelected(event){
    console.log(event);
    console.log(this.wybranyProdukt);
  }

}
