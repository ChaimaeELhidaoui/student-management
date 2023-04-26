import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router:Router) {}

  ngOnInit(): void {

  }
 gotoLoginpage(){
    this.router.navigate(['/login'])
  }
   registerUser(){
    this.router.navigate(['/inscription'])
  }
}
