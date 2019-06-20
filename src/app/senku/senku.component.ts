import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-senku',
  templateUrl: './senku.component.html',
  styleUrls: ['./senku.component.scss']
})
export class SenkuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  instructions(){
    document.getElementById('instBtn').click();
  }


}


