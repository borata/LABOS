import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {

    user: Observable<firebase.User>;
    userUID: string;

    constructor(private firebaseAuth: AngularFireAuth, private fireDb: AngularFireDatabase) {
        this.user = firebaseAuth.authState;
    }

    signup(email: string, password: string) {
        this.firebaseAuth
            .auth
            .createUserWithEmailAndPassword(email, password)
            .then(value => {
            })
            .catch(err => {
                console.log('Something went wrong:', err.message);
            });
    }

    login(email: string, password: string) {
        return this.firebaseAuth
            .auth
            .signInWithEmailAndPassword(email, password)
            .then(value => {
                localStorage.setItem('user', value.uid);
                this.userUID = value.uid;
            })
            .catch(err => {
                console.log('Something went wrong:', err.message);
            });
    }

    test() {
        let a = firebase.database().ref('/uzytkownicy');
        a.orderByChild('Iduzytkownika').equalTo(8712).once('value').then((snap) => console.log(snap.val()));
    }
}