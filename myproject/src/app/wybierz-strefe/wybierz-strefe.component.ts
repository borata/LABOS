import { LoginService } from './../services/login.service';
import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
    selector: 'app-wybierzstrefe',
    templateUrl: './wybierz-strefe.component.html',
    styleUrls: ['./wybierz-strefe.component.css']
})


export class WybierzStrefeComponent {

    constructor() { }
   
}
