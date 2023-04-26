import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {
user={name:'',phone:'',email:'',password:''};
  constructor(public auth:AuthService,public router:Router) { }

  ngOnInit() {
  }
  onSubmit(){
  this.auth.inscription(this.user.email,this.user.password)
   .then(userCredential => {
      console.log('Utilisateur créé avec succès :', userCredential);
      this.router.navigate(['/login']);
    })
    .catch(error => {
      console.log('Erreur lors de la création de l\'utilisateur :', error);
    });

}}
