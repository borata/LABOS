import { LoginService } from './../services/login.service';
import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})


export class LoginComponent {
    loginForm: FormGroup;

    constructor(private loginService: LoginService, private fb: FormBuilder, private router: Router) {
        // this.loginService.login("oter96@gmail.com", "olgajestsuperowa"); przykładowe logowanie
        // this.loginService.test();                                        przykładowe wyciąganie z bazy

        this.loginForm = fb.group({
            login:    ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]],
        });
    }

    login() {
        if(this.loginForm.valid) {
            this.loginService.login(
                this.loginForm.get('login').value,
                this.loginForm.get('password').value,
            
            ).then(res => {
                if(res.uid)
                this.router.navigate(['/wybierzstrefe'])
            },err => {console.log(err)}
                
               );
        } else {

        }
    }

    signup() {
        this.loginService.signup('abcd@abcs.pl', 'abcdabcd');
    }
}
