import { Component, OnInit } from '@angular/core';
declare function initSenku(): any;

@Component({
  selector: 'app-senku',
  templateUrl: './senku.component.html',
  styleUrls: ['./senku.component.scss']
})
export class SenkuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    initSenku();
  }

  instructions(){
    document.getElementById('instBtn').click();
  }

  confirmResetGame() {
    document.getElementById('reiniciar').click();
  }
}