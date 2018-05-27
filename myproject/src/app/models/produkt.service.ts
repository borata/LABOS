import { Injectable } from '@angular/core';
 import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import {Produkt} from './produkt.model';
@Injectable()
export class ProduktService {
  produktList: AngularFireList<any>;
  selectedProdukt: Produkt = new Produkt();
  constructor(private firebase :AngularFireDatabase ) { }
 
  getData(){
    this.produktList = this.firebase.list('produkty');
    return this.produktList;
  }
 
  insertProdukt(produkt : Produkt)
  {
    this.produktList.push({
      DnumerCAS:produkt.IDnumerCAS,
      dataAktualizacji:produkt.dataAktualizacji,
      godzinaAktualizacji:produkt.godzinaAktualizacji,
      iloscPosiadana:produkt.iloscPosiadana,
      materialNiebezpieczny:produkt.materialNiebezpieczny,
      miejscePrzechowywania:produkt.miejscePrzechowywania,
      nazwaChemiczna:produkt.nazwaChemiczna,
      osobaOdpowiedzialana:produkt.osobaOdpowiedzialana,
      przeznaczenie:produkt.przeznaczenie,
      rodzaj:produkt.rodzaj,
      symboleOstrzegawcze:produkt.symboleOstrzegawcze,
      wydzial:produkt.wydzial,
      zwrotRyzykaR:produkt.zwrotRyzykaR,
      zwrotWskazujacyRodzajZagrozeniaH:produkt.zwrotWskazujacyRodzajZagrozeniaH,
      zwrotyBezpieczenstwaS:produkt.zwrotyBezpieczenstwaS,
      zwrotyWskazujaceSrodkiOstroznosciP:produkt.zwrotyWskazujaceSrodkiOstroznosciP,
    });
  }
 
  updateProdukt(produkt : Produkt){
    this.produktList.update(produkt.$key,
      {
      IDnumerCAS:produkt.IDnumerCAS,
      dataAktualizacji:produkt.dataAktualizacji,
      godzinaAktualizacji:produkt.godzinaAktualizacji,
      iloscPosiadana:produkt.iloscPosiadana,
      materialNiebezpieczny:produkt.materialNiebezpieczny,
      miejscePrzechowywania:produkt.miejscePrzechowywania,
      nazwaChemiczna:produkt.nazwaChemiczna,
      osobaOdpowiedzialana:produkt.osobaOdpowiedzialana,
      przeznaczenie:produkt.przeznaczenie,
      rodzaj:produkt.rodzaj,
      symboleOstrzegawcze:produkt.symboleOstrzegawcze,
      wydzial:produkt.wydzial,
      zwrotRyzykaR:produkt.zwrotRyzykaR,
      zwrotWskazujacyRodzajZagrozeniaH:produkt.zwrotWskazujacyRodzajZagrozeniaH,
      zwrotyBezpieczenstwaS:produkt.zwrotyBezpieczenstwaS,
      zwrotyWskazujaceSrodkiOstroznosciP:produkt.zwrotyWskazujaceSrodkiOstroznosciP,
      });
  }
 
  deleteProdukt($key : string){
    this.produktList.remove($key);
  }
 
}
