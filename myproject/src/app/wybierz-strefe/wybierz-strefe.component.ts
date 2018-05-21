import { LoginService } from './../services/login.service';
import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { AngularFireDatabase, AngularFireList  } from 'angularfire2/database';



@Component({
    selector: 'app-wybierzstrefe',
    templateUrl: './wybierz-strefe.component.html',
    styleUrls: ['./wybierz-strefe.component.css']
})


export class WybierzStrefeComponent {
    fireDB: AngularFireDatabase;

    constructor( fireDB: AngularFireDatabase, private modalService: NgbModal) 
    {
        this.fireDB = fireDB; }

    open(content) {
        this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
      }
}
