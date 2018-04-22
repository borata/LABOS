import { environment } from './../environments/environment.prod';
import { ProductsService } from './products/products.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { TabsModule } from "ngx-tabset";
import { AlltabsComponent } from './alltabs/alltabs.component';
import { UzytkownicyComponent } from './uzytkownicy/uzytkownicy.component';
import { ProducenciComponent } from './producenci/producenci.component';
import { OznaczeniaComponent } from './oznaczenia/oznaczenia.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WprowadzIdComponent } from './wprowadz-id/wprowadz-id.component';
import { SubstancjaComponent } from './substancja/substancja.component';

//dodałam poniżej application routes 

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'strefy', component: AlltabsComponent },
  { path: 'wprowadz_id', component: WprowadzIdComponent},
  {path: 'substancja', component: SubstancjaComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AlltabsComponent,
    UzytkownicyComponent,
    ProducenciComponent,
    OznaczeniaComponent,
    LoginComponent,
    WprowadzIdComponent,
    SubstancjaComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    Ng2SmartTableModule,
    TabsModule.forRoot(),
    CommonModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ProductsService,

  ],
  bootstrap: [AppComponent]


})
export class AppModule { }
