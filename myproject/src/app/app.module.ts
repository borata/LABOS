import { environment } from './../environments/environment.prod';
import { ProductsService } from './products/products.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import {TabsModule} from "ngx-tabset";
import { AlltabsComponent } from './alltabs/alltabs.component';
import { UzytkownicyComponent } from './uzytkownicy/uzytkownicy.component';
import { ProducenciComponent } from './producenci/producenci.component';
import { OznaczeniaComponent } from './oznaczenia/oznaczenia.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

 
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AlltabsComponent,
    UzytkownicyComponent,
    ProducenciComponent,
    OznaczeniaComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    Ng2SmartTableModule,
    TabsModule.forRoot(),
    CommonModule,
    BrowserAnimationsModule
  ],
  providers: [
    ProductsService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
