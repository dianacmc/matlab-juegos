import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-magic-squares',
  templateUrl: './magic-squares.component.html',
  styleUrls: ['./magic-squares.component.scss']
})
export class MagicSquaresComponent implements OnInit {

  private squareOrder: number = 3;
  private squareOrderTemp: string = "3";
  private numberGameOrder3: number = 1;
  private numberGameOrder4: number = 1;
  private completeLine: number;
  private square: Array<Array<any>>;
  private squareTemp: Array<Array<any>>;
  private square_3_1: Array<Array<any>>;
  private square_3_2: Array<Array<any>>;
  private square_4_1: Array<Array<any>>;
  private square_4_2: Array<Array<any>>;

  constructor() { 
    //init square
    this.square_3_1 = new Array<Array<any>>();
    this.square_3_2 = new Array<Array<any>>();

    this.square_4_1 = new Array<Array<any>>();
    this.square_4_2 = new Array<Array<any>>();

    //fill squares
    this.square_3_1.push(new Array([7], [0], [5]));
    this.square_3_1.push(new Array([2], [4], [6]));
    this.square_3_1.push(new Array([3], [8], [1]));

    this.square_3_2.push(new Array([4], [9], [2]));
    this.square_3_2.push(new Array([3], [5], [7]));
    this.square_3_2.push(new Array([8], [1], [6]));

    this.square_4_1.push(new Array([1], [15], [14], [4]));
    this.square_4_1.push(new Array([12], [6], [7], [9]));
    this.square_4_1.push(new Array([8], [10], [11], [5]));
    this.square_4_1.push(new Array([13], [3], [2], [16]));

    this.square_4_2.push(new Array([7], [12], [1], [14]));
    this.square_4_2.push(new Array([2], [13], [8], [11]));
    this.square_4_2.push(new Array([16], [3], [10], [5]));
    this.square_4_2.push(new Array([9], [6], [15], [4]));
  }

  ngOnInit() {
    this.initGame();
  }
  
  //initialize the game
  initGame() {
    this.initSquare();
    let lineToComplete: number;
    if (this.squareOrder == 3) {
      lineToComplete = this.getRandomNumber(1, 8);
      this.initSquareTempOrder3(lineToComplete); 
    } else {
      lineToComplete = this.getRandomNumber(1, 10);
      this.initSquareTempOrder4(lineToComplete);
    }
    this.completeLine = lineToComplete;
  }

  //initialize the square with all the numbers
  initSquare() {
    switch(this.squareOrder) {
      case 3:
        switch(this.numberGameOrder3) {
          case 1:
            this.square = this.square_3_1;
            break;
          case 2:
            this.square = this.square_3_2;
            break;
          default:
            this.numberGameOrder3 = 1;
            this.initSquare();
            break;
        }
        break;
      case 4:
        switch(this.numberGameOrder4) {
          case 1:
            this.square = this.square_4_1;
            break;
          case 2:
            this.square = this.square_4_2;
            break;
          default:
            this.numberGameOrder4 = 1;
            this.initSquare();
            break;
        }
        break;
    }
  }

  //fill in the square of order 3 to be displayed
  initSquareTempOrder3(lineToComplete: number) {
    this.squareTemp = new Array<Array<any>>();
    switch(lineToComplete) {
      case 1:
        //diagonal 1
        this.squareTemp.push(new Array(this.square[0][0], 0, 0));
        this.squareTemp.push(new Array(0, this.square[1][1], this.square[1][2]));
        this.squareTemp.push(new Array(0, 0, this.square[2][2]));
        break;
      case 2:
        //diagonal 2
        this.squareTemp.push(new Array(0, 0, this.square[0][2]));
        this.squareTemp.push(new Array(this.square[1][0], this.square[1][1], 0));
        this.squareTemp.push(new Array(this.square[2][0], 0, 0));
      break;
      case 3:
        //row 1
        this.squareTemp.push(new Array(this.square[0][0], this.square[0][1], this.square[0][2]));
        this.squareTemp.push(new Array(0, this.square[1][1], 0));
        this.squareTemp.push(new Array(0, 0, 0));
      break;
      case 4:
        //row 2
        this.squareTemp.push(new Array(0, 0, 0));
        this.squareTemp.push(new Array(this.square[1][0], this.square[1][1], this.square[1][2]));
        this.squareTemp.push(new Array(this.square[2][0], 0, 0));
      break;
      case 5:
        //row 3
        this.squareTemp.push(new Array(0, 0, this.square[0][2]));
        this.squareTemp.push(new Array(0, 0, 0));
        this.squareTemp.push(new Array(this.square[2][0], this.square[2][1], this.square[2][2]));
      break;
      case 6:
        //col 1
        this.squareTemp.push(new Array(this.square[0][0], 0, 0));
        this.squareTemp.push(new Array(this.square[1][0], 0, 0));
        this.squareTemp.push(new Array(this.square[2][0], this.square[2][1], 0));
      break;
      case 7:
        //col 2
        this.squareTemp.push(new Array(0, this.square[0][1], 0));
        this.squareTemp.push(new Array(this.square[1][0], this.square[1][1], 0));
        this.squareTemp.push(new Array(0, this.square[2][1], 0));
      break;
      case 8:
        //col 3
        this.squareTemp.push(new Array(0, 0, this.square[0][2]));
        this.squareTemp.push(new Array(0, 0, this.square[1][2]));
        this.squareTemp.push(new Array(0, this.square[2][1], this.square[2][2]));
      break;
    }
  }

  //fill in the square of order 4 to be displayed
  initSquareTempOrder4(lineToComplete: number) {
    this.squareTemp = new Array<Array<any>>();
    switch(lineToComplete) {
      case 1:
        //diagonal 1
        this.squareTemp.push(new Array(this.square[0][0], 0, 0, 0));
        this.squareTemp.push(new Array(0, this.square[1][1], 0, 0));
        this.squareTemp.push(new Array(0, 0, this.square[2][2], 0));
        this.squareTemp.push(new Array(0, this.square[3][1], this.square[3][2], this.square[3][3]));
        break;
      case 2:
        //diagonal 2
        this.squareTemp.push(new Array(0, this.square[0][1], this.square[0][2], this.square[0][3]));
        this.squareTemp.push(new Array(0, 0, this.square[1][2], 0));
        this.squareTemp.push(new Array(0, this.square[2][1], 0, 0));
        this.squareTemp.push(new Array(this.square[3][0], 0, 0, 0));
      break;
      case 3:
        //row 1
        this.squareTemp.push(new Array(this.square[0][0], this.square[0][1], this.square[0][2], this.square[0][3]));
        this.squareTemp.push(new Array(this.square[1][0], 0, 0, 0));
        this.squareTemp.push(new Array(this.square[2][0], 0, 0, 0));
        this.squareTemp.push(new Array(0, 0, 0, 0));
      break;
      case 4:
        //row 2
        this.squareTemp.push(new Array(0, 0, 0, 0));
        this.squareTemp.push(new Array(this.square[1][0], this.square[1][1], this.square[1][2], this.square[1][3]));
        this.squareTemp.push(new Array(0, this.square[2][1], 0, 0));
        this.squareTemp.push(new Array(0, this.square[3][1], 0, 0));
      break;
      case 5:
        //row 3
        this.squareTemp.push(new Array(0, 0, this.square[0][2], 0));
        this.squareTemp.push(new Array(0, 0, this.square[1][2], 0));
        this.squareTemp.push(new Array(this.square[2][0], this.square[2][1], this.square[2][2], this.square[2][3]));
        this.squareTemp.push(new Array(0, 0, 0, 0));
      break;
      case 6:
        //row 4
        this.squareTemp.push(new Array(0, 0, 0, 0));
        this.squareTemp.push(new Array(0, 0, 0, this.square[1][3]));
        this.squareTemp.push(new Array(0, 0, 0, this.square[2][3]));
        this.squareTemp.push(new Array(this.square[3][0], this.square[3][1], this.square[3][2], this.square[3][3]));
        break;
      case 7:
        this.squareTemp.push(new Array(this.square[0][0], 0, 0, 0));
        this.squareTemp.push(new Array(this.square[1][0], 0, 0, 0));
        this.squareTemp.push(new Array(this.square[2][0], 0, 0, 0));
        this.squareTemp.push(new Array(this.square[3][0], this.square[3][1], this.square[3][2], 0));
      break;
      case 8:
        //col 2
        this.squareTemp.push(new Array(0, this.square[0][1], 0, 0));
        this.squareTemp.push(new Array(0, this.square[1][1], 0, 0));
        this.squareTemp.push(new Array(this.square[2][0], this.square[2][1], this.square[2][2], 0));
        this.squareTemp.push(new Array(0, this.square[3][1], 0, 0));
      break;
      case 9:
        //col 3
        this.squareTemp.push(new Array(0, 0, this.square[0][2], 0));
        this.squareTemp.push(new Array(this.square[1][0], this.square[1][1], this.square[1][2], 0));
        this.squareTemp.push(new Array(0, 0, this.square[2][2], 0));
        this.squareTemp.push(new Array(0, 0, this.square[3][2], 0));
      break;
      case 10:
        //col 3
        this.squareTemp.push(new Array(0, 0, 0, this.square[0][3]));
        this.squareTemp.push(new Array(0, 0, 0, this.square[1][3]));
        this.squareTemp.push(new Array(0, 0, 0, this.square[2][3]));
        this.squareTemp.push(new Array(0, this.square[3][1], this.square[3][2], this.square[3][3]));
      break;
    }
  }

  //get a random integer
  getRandomNumber(min: any, max: any) {
    return min + Math.floor((max - min) * Math.random());
  }

  //no se esta usando
  fillNumberCol() {
    for(var i = 0; i < this.squareOrder; i++) {
        this.square[i] = [];
        for(var j = 0; j < this.squareOrder; j++) {
          this.square[i][j] = this.squareOrder*i + j+1;

        }
    }
  }

  //restart the current game
  restart() {
    if (this.squareOrder == 3) {
      this.initSquareTempOrder3(this.completeLine); 
    } else {
      this.initSquareTempOrder4(this.completeLine);
    }
  }

  //verify that the square is correctly completed
  verifySquare() {
    let squareArray: Array<number> = new Array();
    let square: Array<any> = new Array();

    var contenteditable = document.getElementsByName("square-items");
    contenteditable.forEach(element => {
      let item = +element.textContent; 
      squareArray.push(item);
    });
    console.log(squareArray.toString());

    if(this.squareOrder == 3) {
      square.push(new Array(squareArray.shift(), squareArray.shift(), squareArray.shift()));
      square.push(new Array(squareArray.shift(), squareArray.shift(), squareArray.shift()));
      square.push(new Array(squareArray.shift(), squareArray.shift(), squareArray.shift()));
    } else {
      square.push(new Array(squareArray.shift(), squareArray.shift(), squareArray.shift(), squareArray.shift()));
      square.push(new Array(squareArray.shift(), squareArray.shift(), squareArray.shift(), squareArray.shift()));
      square.push(new Array(squareArray.shift(), squareArray.shift(), squareArray.shift(), squareArray.shift()));
      square.push(new Array(squareArray.shift(), squareArray.shift(), squareArray.shift(), squareArray.shift()));
    }

    for(var i = 0; i < this.squareOrder; i++) {
      for(var j = 0; j < this.squareOrder; j++) {
        if (this.square[i][j] != square[i][j]) {
          this.gameOver();
          return;
        }
      }
    }

    if(this.numberGameOrder3 == 2 || this.numberGameOrder4 == 2) {
      this.gameWon();
    } else {
      this.confirmWinGame();
    }
  }
  
  incrementNumberGame() {
    if (this.squareOrder == 3) {
      this.numberGameOrder3++;
    } else {
      this.numberGameOrder4++;
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
    this.initGame();
  }
  
  confirmWinGame() {
    document.getElementById('winnerButton').click();
    this.incrementNumberGame();
  }

  gameOver() {
    document.getElementById('finishButton').click();
  }

  gameWon() {
    document.getElementById('winnerGameButton').click();
    this.incrementNumberGame();
  }
}