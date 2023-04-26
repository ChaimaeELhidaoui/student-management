import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {AuthService} from "src/app/services/auth.service"

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


user={name:'',phone:'',email:'',password:''};

  //  validationUserMessage ={
  //   email:[
  //     {type:"required", message:"Please enter your Email"},
  //     {type:"pattern", message:"The Email entered is Incorrect.Try again"}
  //   ],
  //   password:[
  //     {type:"required", message:"please Enter your Password!"},
  //     {type:"minlength", message:"The Password must be at least 5 characters or more"}

  //   ]
  // }

  //  validationFormUser!: FormGroup;

  constructor(public formbuider: FormBuilder,private auth:AuthService,private router:Router, public authservice:AuthService
    ) { }

  ngOnInit() {
  //   this.validationFormUser = this.formbuider.group({
  //   email: new FormControl('', Validators.compose([
  //     Validators.required,
  //     Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
  //   ])),
  //   password: new FormControl('', Validators.compose([
  //     Validators.required,
  //     Validators.minLength(5)
  //   ]))
  // })

  }
  goToSignup(){

    this.router.navigate(['/inscription']);

  }


  onConnexion(){
  this.auth.connexion(this.user.email,this.user.password)
   .then(userCredential => {
      console.log('connexion avec succès :', userCredential);
      this.router.navigate(['/mainpage']);
    })
    .catch(error => {
      console.log('Erreur lors de la connexion:', error);
    });
 };



}



