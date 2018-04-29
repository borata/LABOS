import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { AngularFireDatabase, AngularFireList  } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { mergeAll, tap, map } from 'rxjs/operators';

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
    produkty$: Observable<any>;
    wybranyProdukt;
    constructor(fireDB: AngularFireDatabase) {
      this.fireDB = fireDB;
    }

    ngOnInit() {
      this.produkty$ = this.fireDB.list('produkty').valueChanges();
    }

    addItem() {
        this.usedSubstances.push({
          wybranyProdukt: this.wybranyProdukt,
          ilosc: this.substanceAmount,
        });
        console.log(this.usedSubstances);
        this.itemCount = this.usedSubstances.length;
    }

    onOptionsSelected(event){
      console.log(event);
      console.log(this.wybranyProdukt);
    }

}
