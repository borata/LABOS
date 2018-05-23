import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { AngularFireDatabase, AngularFireList  } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { mergeAll, tap, map } from 'rxjs/operators';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-wprowadz-ilosc',
    templateUrl: './wprowadz-ilosc.component.html',
    styleUrls: ['./wprowadz-ilosc.component.css'],
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

    constructor(fireDB: AngularFireDatabase, private modalService: NgbModal) {
      this.fireDB = fireDB;
    }

   

    ngOnInit() {
      this.listaProduktow = this.fireDB.list('produkty');
      this.produkty$ = this.listaProduktow.snapshotChanges();
       this.produkty$.subscribe(x => this.costam = x);

    }

    open(content){
      this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
    }

    addItem(event,content) {
      console.log(this.costam[0]);
      if(this.wybranyProdukt && this.wybranyProdukt.iloscPosiadana!=0 && this.wybranyProdukt.iloscPosiadana>this.substanceAmount){
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

    update(event, newValue:string){

      event.confirm.resolve(event);
      
      event.newData.upd = new Date() ; 
      this.fireDB.object('/produkt.iloscPosiadana/').update(event.newData);

    }

}
