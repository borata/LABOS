
import { WprowadzIloscComponent } from './../wprowadz_ilosc/wprowadz-ilosc.component';
import { LoginService } from './services/login.service';
import { AuthenticationGuard } from './guards/authentication.guard';
import { AngularFireAuthModule } from 'angularfire2/auth';
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
import { AngularFireAuth } from 'angularfire2/auth';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { WprowadzIdComponent } from './wprowadz-id/wprowadz-id.component';
import { SubstancjaComponent } from './substancja/substancja.component';
import {WybierzStrefeComponent} from './wybierz-strefe/wybierz-strefe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ProductsAdminComponent } from './products-admin/products-admin.component';
import { ProducenciAdminComponent } from './producenci-admin/producenci-admin.component';
import { OznaczeniaAdminComponent } from './oznaczenia-admin/oznaczenia-admin.component';
import { UzytkownicyAdminComponent } from './uzytkownicy-admin/uzytkownicy-admin.component';
import { AlltabsAdminComponent } from './alltabs-admin/alltabs-admin.component';
//dodałam poniżej application routes 

const appRoutes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'strefy', component: AlltabsComponent },
  { path: 'substancja', component: WprowadzIloscComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'wybierzstrefe', component: WybierzStrefeComponent },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'strefyadmin',
    component: AlltabsAdminComponent,
  
  },

  {
    path: 'strefy',
    component: AlltabsComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },

  {
    path: '**',
    redirectTo: '/login',
  },

]


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AlltabsComponent,
    UzytkownicyComponent,
    ProducenciComponent,
    OznaczeniaComponent,
    WprowadzIloscComponent,
    LoginComponent,
    WprowadzIdComponent,
    SubstancjaComponent,
    WybierzStrefeComponent,
    ProductsAdminComponent,
    ProducenciAdminComponent,
    OznaczeniaAdminComponent,
    UzytkownicyAdminComponent,
    AlltabsAdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    Ng2SmartTableModule,
    TabsModule.forRoot(),
    CommonModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot()
    
  ],
  providers: [
    LoginService,
    AuthenticationGuard,
    ProductsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
