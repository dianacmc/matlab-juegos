import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-magic-squares',
  templateUrl: './magic-squares.component.html',
  styleUrls: ['./magic-squares.component.scss']
})
export class MagicSquaresComponent implements OnInit {

  private squareOrder: number = 4;
  private squareOrderTemp: string = "4";
  private square: Array<Array<any>>;

  constructor() { }

  ngOnInit() {
    this.initSquare();
  }

  initSquare() {
    this.square = [];
    for(var i = 0; i < this.squareOrder; i++) {
        this.square[i] = [];
        for(var j = 0; j < this.squareOrder; j++) {
          this.square[i][j] = this.squareOrder*i + j+1;

        }
    }
  }

  instructions() {
    document.getElementById("instructionsButton").click();
  }

  options() {
    this.squareOrderTemp = this.squareOrder.toString();
    document.getElementById('optionsBtn').click();
  }

  optionsConfirm() {
    this.squareOrder = +this.squareOrderTemp;
    this.initSquare();
  }

}
