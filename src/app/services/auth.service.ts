import { Injectable } from '@angular/core';
import * as auth from 'firebase/auth';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( public firebaseAuth: AngularFireAuth,private router:Router) { }

  inscription(email:string,password:string){
    return this.firebaseAuth.createUserWithEmailAndPassword(email,password);


  }

  connexion(email:string,password:string){
    return this.firebaseAuth.signInWithEmailAndPassword(email,password);
  }


}
