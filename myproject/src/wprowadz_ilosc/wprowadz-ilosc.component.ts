import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
    selector: 'app-wprowadz-ilosc',
    templateUrl: './wprowadz-ilosc.component.html',
    styleUrls: ['./wprowadz-ilosc.component.css'],
    // animations: [

    //     trigger('goals', [
    //         transition('* => *', [

    //             query(':enter', style({ opacity: 0 }), { optional: true }),

    //             query(':enter', stagger('300ms', [
    //                 animate('.6s ease-in', keyframes([
    //                     style({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
    //                     style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
    //                     style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 }),
    //                 ]))]), { optional: true })
    //         ])
    //     ])

    // ]
})
export class WprowadzIloscComponent implements OnInit {

    itemCount: number;
    btnText: string = 'Akceptuj';
    substanceID: string;
    substanceAmount: number;
    substances = ['Aceton 50', 'Metanol 100', 'Etanol 500'];

    constructor() { }

    ngOnInit() {
        this.itemCount = this.substances.length;
    }

    addItem() {
        this.substances.push(this.substanceID + ' ' + this.substanceAmount);
        this.itemCount = this.substances.length;
    }

}