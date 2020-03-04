import { Component, OnInit, Input, ɵConsole } from '@angular/core';
import  *  as  squaresOrder3  from  './squares-order-3.json';
import  *  as  squaresOrder4  from  './squares-order-4.json';

@Component({
  selector: 'app-magic-squares',
  templateUrl: './magic-squares.component.html',
  styleUrls: ['./magic-squares.component.scss']
})
export class MagicSquaresComponent implements OnInit {

  private squareOrder: number = 3;
  private squareOrderTemp: string = "3";
  private numberGameOrder3: number = 0;
  private numberGameOrder4: number = 0;
  private completeLine: number;
  private square: Array<Array<any>>;
  private squareTemp: Array<Array<any>>;

  ngOnInit() {
    this.initGame();
  }

  //get a square by id from json file
  private getSquareFromJson(id: any) {
    let squareArray: Array<number> = new Array();
    let square: Array<any> = new Array();
    let squareJson: any;

    if(this.squareOrder == 3) {
      squareJson = squaresOrder3.find(square => square.id == id).content;
    } else {
      squareJson = squaresOrder4.find(square => square.id == id).content;
    }
    squareJson.forEach(element => {
      element.forEach(number => {
        let item = number; 
        squareArray.push(item);
      });
    });

    this.fillSquareByOrder(square, squareArray);
    this.square = square;
  }

  //fill square according to order
  private fillSquareByOrder(square: Array<any>, squareArray: Array<number>) {
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
    this.incrementNumberGame();
  }

  //initialize the square with all the numbers
  private initSquare() {
    if (this.squareOrder == 3) {
      switch(this.numberGameOrder3) {
        case 1:
          this.getSquareFromJson(1);
          break;
        case 2:
          this.getSquareFromJson(2);
          break;
        case 3:
          this.getSquareFromJson(3);
          break;
        case 4:
          this.getSquareFromJson(4);
          break;
        case 5:
          this.getSquareFromJson(5);
          break;
        case 6:
          this.getSquareFromJson(6);
          break;
        case 7:
          this.getSquareFromJson(7);
          break;
        case 8:
          this.getSquareFromJson(8);
          break;
        case 9:
          this.getSquareFromJson(9);
          break;
        case 10:
          this.getSquareFromJson(10);
          break;
        default:
          this.numberGameOrder3 = 1;
          this.initSquare();
          break;
      }
    }
    else {
      switch(this.numberGameOrder4) {
        case 1:
          this.getSquareFromJson(1);
          break;
        case 2:
          this.getSquareFromJson(2);
          break;
        case 3:
          this.getSquareFromJson(3);
          break;
        case 4:
          this.getSquareFromJson(4);
          break;
        case 5:
          this.getSquareFromJson(5);
          break;
        case 6:
          this.getSquareFromJson(6);
          break;
        case 7:
          this.getSquareFromJson(7);
          break;
        case 8:
          this.getSquareFromJson(8);
          break;
        case 9:
          this.getSquareFromJson(9);
          break;
        case 10:
          this.getSquareFromJson(10);
          break;
        default:
          this.numberGameOrder4 = 1;
          this.initSquare();
          break;
      }
    }
  }

  //fill in the square of order 3 to be displayed
  private initSquareTempOrder3(lineToComplete: number) {
    this.squareTemp = new Array<Array<any>>();
    switch(lineToComplete) {
      case 1:
        //diagonal 1
        this.squareTemp.push(new Array({value: this.square[0][0], selected: true}, {value: 0, selected: false}, {value: 0, selected: false}));
        this.squareTemp.push(new Array({value: 0, selected: false}, {value: this.square[1][1], selected: true}, {value: this.square[1][2], selected: true}));
        this.squareTemp.push(new Array({value: 0, selected: false}, {value: 0, selected: false}, {value: this.square[2][2], selected: true}));
        break;
      case 2:
        //diagonal 2
        this.squareTemp.push(new Array({value: 0, selected: false}, {value: 0, selected: false}, {value: this.square[0][2], selected: true}));
        this.squareTemp.push(new Array({value: this.square[1][0], selected: true}, {value: this.square[1][1], selected: true}, {value: 0, selected: false}));
        this.squareTemp.push(new Array({value: this.square[2][0], selected: true}, {value: 0, selected: false}, {value: 0, selected: false}));
      break;
      case 3:
        //row 1
        this.squareTemp.push(new Array({value: this.square[0][0], selected: true}, {value: this.square[0][1], selected: true}, {value: this.square[0][2], selected: true}));
        this.squareTemp.push(new Array({value: 0, selected: false}, {value: this.square[1][1], selected: true}, {value: 0, selected: false}));
        this.squareTemp.push(new Array({value: 0, selected: false}, {value: 0, selected: false}, {value: 0, selected: false}));
      break;
      case 4:
        //row 2
        this.squareTemp.push(new Array({value: 0, selected: false}, {value: 0, selected: false}, {value: 0, selected: false}));
        this.squareTemp.push(new Array({value: this.square[1][0], selected: true}, {value: this.square[1][1], selected: true}, {value: this.square[1][2], selected: true}));
        this.squareTemp.push(new Array({value: this.square[2][0], selected: true}, {value: 0, selected: false}, {value: 0, selected: false}));
      break;
      case 5:
        //row 3
        this.squareTemp.push(new Array({value: 0, selected: false}, {value: 0, selected: false}, {value: this.square[0][2], selected: true}));
        this.squareTemp.push(new Array({value: 0, selected: false}, {value: 0, selected: false}, {value: 0, selected: false}));
        this.squareTemp.push(new Array({value: this.square[2][0], selected: true}, {value: this.square[2][1], selected: true}, {value: this.square[2][2], selected: true}));
      break;
      case 6:
        //col 1
        this.squareTemp.push(new Array({value: this.square[0][0], selected: true}, {value: 0, selected: false}, {value: 0, selected: false}));
        this.squareTemp.push(new Array({value: this.square[1][0], selected: true}, {value: 0, selected: false}, {value: 0, selected: false}));
        this.squareTemp.push(new Array({value: this.square[2][0], selected: true}, {value: this.square[2][1], selected: true}, {value: 0, selected: false}));
      break;
      case 7:
        //col 2
        this.squareTemp.push(new Array({value: 0, selected: false}, {value: this.square[0][1], selected: true}, {value: this.square[0][2], selected: true}));
        this.squareTemp.push(new Array({value: this.square[1][0], selected: true}, {value: this.square[1][1], selected: true}, {value: 0, selected: false}));
        this.squareTemp.push(new Array({value: 0, selected: false}, {value: this.square[2][1], selected: true}, {value: 0, selected: false}));
      break;
      case 8:
        //col 3
        this.squareTemp.push(new Array({value: 0, selected: false}, {value: 0, selected: false}, {value: this.square[0][2], selected: true}));
        this.squareTemp.push(new Array({value: 0, selected: false}, {value: 0, selected: false}, {value: this.square[1][2], selected: true}));
        this.squareTemp.push(new Array({value: 0, selected: false}, {value: this.square[2][1], selected: true}, {value: this.square[2][2], selected: true}));
      break;
    }
  }

  //fill in the square of order 4 to be displayed
  private initSquareTempOrder4(lineToComplete: number) {
    this.squareTemp = new Array<Array<any>>();
    switch(lineToComplete) {
      case 1:
        //diagonal 1
        this.squareTemp.push(new Array({value: this.square[0][0], selected: true}, {value: 0, selected: false}, {value: 0, selected: false}, {value: this.square[0][3], selected: true}));
        this.squareTemp.push(new Array({value: 0, selected: false}, {value: this.square[1][1], selected: true}, {value: 0, selected: false}, {value: this.square[1][3], selected: true}));
        this.squareTemp.push(new Array({value: this.square[2][0], selected: true}, {value: 0, selected: false}, {value: this.square[2][2], selected: true}, {value: 0, selected: false}));
        this.squareTemp.push(new Array({value: 0, selected: false}, {value: this.square[3][1], selected: true}, {value: this.square[3][2], selected: true}, {value: this.square[3][3], selected: true}));
        break;
      case 2:
        //diagonal 2
        this.squareTemp.push(new Array({value: 0, selected: false}, {value: this.square[0][1], selected: true}, {value: this.square[0][2], selected: true}, {value: this.square[0][3], selected: true}));
        this.squareTemp.push(new Array({value: this.square[1][0], selected: true}, {value: 0, selected: false}, {value: this.square[1][2], selected: true}, {value: 0, selected: false}));
        this.squareTemp.push(new Array({value: 0, selected: false}, {value: this.square[2][1], selected: true}, {value: 0, selected: false}, {value: this.square[2][3], selected: true}));
        this.squareTemp.push(new Array({value: this.square[3][0], selected: true}, {value: 0, selected: false}, {value: 0, selected: false}, {value: this.square[3][3], selected: true}));
      break;
      case 3:
        //row 1
        this.squareTemp.push(new Array({value: this.square[0][0], selected: true}, {value: this.square[0][1], selected: true}, {value: this.square[0][2], selected: true}, {value: this.square[0][3], selected: true}));
        this.squareTemp.push(new Array({value: this.square[1][0], selected: true}, {value: 0, selected: false}, {value: this.square[1][2], selected: true}, {value: this.square[1][3], selected: true}));
        this.squareTemp.push(new Array({value: this.square[2][0], selected: true}, {value: this.square[2][1], selected: true}, {value: 0, selected: false}, {value: 0, selected: false}));
        this.squareTemp.push(new Array({value: 0, selected: false}, {value: 0, selected: false}, {value: 0, selected: false}, {value: 0, selected: false}));
      break;
      case 4:
        //row 2
        this.squareTemp.push(new Array({value: this.square[0][0], selected: true}, {value: 0, selected: false}, {value: this.square[0][2], selected: true}, {value: 0, selected: false}));
        this.squareTemp.push(new Array({value: this.square[1][0], selected: true}, {value: this.square[1][1], selected: true}, {value: this.square[1][2], selected: true}, {value: this.square[1][3], selected: true}));
        this.squareTemp.push(new Array({value: 0, selected: false}, {value: this.square[2][1], selected: true}, {value: 0, selected: false}, {value: 0, selected: false}));
        this.squareTemp.push(new Array({value: 0, selected: false}, {value: this.square[3][1], selected: true}, {value: 0, selected: false}, {value: this.square[3][3], selected: true}));
      break;
      case 5:
        //row 3
        this.squareTemp.push(new Array({value: 0, selected: false}, {value: 0, selected: false}, {value: this.square[0][2], selected: true}, {value: 0, selected: false}));
        this.squareTemp.push(new Array({value: 0, selected: false}, {value: 0, selected: false}, {value: this.square[1][2], selected: true}, {value: 0, selected: false}));
        this.squareTemp.push(new Array({value: this.square[2][0], selected: true}, {value: this.square[2][1], selected: true}, {value: this.square[2][2], selected: true}, {value: this.square[2][3], selected: true}));
        this.squareTemp.push(new Array({value: 0, selected: false}, {value: this.square[3][1], selected: true}, {value: 0, selected: false}, {value: this.square[3][3], selected: true}));
      break;
      case 6:
        //row 4
        this.squareTemp.push(new Array({value: 0, selected: false}, {value: this.square[0][1], selected: true}, {value: 0, selected: false}, {value: 0, selected: false}));
        this.squareTemp.push(new Array({value: this.square[1][0], selected: true}, {value: 0, selected: false}, {value: 0, selected: false}, {value: this.square[1][3], selected: true}));
        this.squareTemp.push(new Array({value: 0, selected: false}, {value: this.square[2][1], selected: true}, {value: 0, selected: false}, {value: this.square[2][3], selected: true}));
        this.squareTemp.push(new Array({value: this.square[3][0], selected: true}, {value: this.square[3][1], selected: true}, {value: this.square[3][2], selected: true}, {value: this.square[3][3], selected: true}));
        break;
      case 7:
        //col 1
        this.squareTemp.push(new Array({value: this.square[0][0], selected: true}, {value: 0, selected: false}, {value: this.square[0][2], selected: true}, {value: this.square[0][3], selected: true}));
        this.squareTemp.push(new Array({value: this.square[1][0], selected: true}, {value: this.square[1][1], selected: true}, {value: 0, selected: false}, {value: 0, selected: false}));
        this.squareTemp.push(new Array({value: this.square[2][0], selected: true}, {value: 0, selected: false}, {value: 0, selected: false}, {value: 0, selected: false}));
        this.squareTemp.push(new Array({value: this.square[3][0], selected: true}, {value: this.square[3][1], selected: true}, {value: this.square[3][2], selected: true}, {value: 0, selected: false}));
      break;
      case 8:
        //col 2
        this.squareTemp.push(new Array({value: 0, selected: false}, {value: this.square[0][1], selected: true}, {value: this.square[0][2], selected: true}, {value: this.square[0][3], selected: true}));
        this.squareTemp.push(new Array({value: 0, selected: false}, {value: this.square[1][1], selected: true}, {value: 0, selected: false}, {value: 0, selected: false}));
        this.squareTemp.push(new Array({value: this.square[2][0], selected: true}, {value: this.square[2][1], selected: true}, {value: this.square[2][2], selected: true}, {value: 0, selected: false}));
        this.squareTemp.push(new Array({value: 0, selected: false}, {value: this.square[3][1], selected: true}, {value: 0, selected: false}, {value: this.square[3][3], selected: true}));
      break;
      case 9:
        //col 3
        this.squareTemp.push(new Array({value: this.square[0][0], selected: true}, {value: 0, selected: false}, {value: this.square[0][2], selected: true}, {value: 0, selected: false}));
        this.squareTemp.push(new Array({value: this.square[1][0], selected: true}, {value: this.square[1][1], selected: true}, {value: this.square[1][2], selected: true}, {value: 0, selected: false}));
        this.squareTemp.push(new Array({value: 0, selected: false}, {value: 0, selected: false}, {value: this.square[2][2], selected: true}, {value: 0, selected: false}));
        this.squareTemp.push(new Array({value: 0, selected: false}, {value: this.square[3][1], selected: true}, {value: this.square[3][2], selected: true}, {value: 0, selected: false}));
      break;
      case 10:
        //col 4
        this.squareTemp.push(new Array({value: 0, selected: false}, {value: this.square[0][1], selected: true}, {value: 0, selected: false}, {value: this.square[0][3], selected: true}));
        this.squareTemp.push(new Array({value: this.square[1][0], selected: true}, {value: 0, selected: false}, {value: 0, selected: false}, {value: this.square[1][3], selected: true}));
        this.squareTemp.push(new Array({value: 0, selected: false}, {value: this.square[2][1], selected: true}, {value: 0, selected: false}, {value: this.square[2][3], selected: true}));
        this.squareTemp.push(new Array({value: 0, selected: false}, {value: this.square[3][1], selected: true}, {value: this.square[3][2], selected: true}, {value: this.square[3][3], selected: true}));
      break;
    }
  }

  //get a random number
  private getRandomNumber(min: any, max: any) {
    return min + Math.floor((max - min) * Math.random());
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
    for(var i = 0; i < this.squareOrder; i++) {
      for(var j = 0; j < this.squareOrder; j++) {
        if (this.square[i][j] != this.squareTemp[i][j].value) {
          this.gameOver();
          return;
        }
      }
    }

    if(this.numberGameOrder3 >= 11 || this.numberGameOrder4 >= 11) {
      this.gameWon();
    } else {
      this.confirmSquareSolved();
    }
  }

  //save the number entered by the user
  numberChanged(event, i: number, j: number) {
    this.squareTemp[i][j].value = event.target.value;
  }
  
  //increase the number of games in the game depending on the order of the square
  private incrementNumberGame() {
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
    document.getElementById('optionsButton').click();
  }

  optionsConfirm() {
    this.squareOrder = +this.squareOrderTemp;
    this.initGame();
  }
  
  confirmSquareSolved() {
    document.getElementById('squareSolvedButton').click();
  }

  gameOver() {
    document.getElementById('incorrectButton').click();
  }

  gameWon() {
    document.getElementById('winnerGameButton').click();
  }
}