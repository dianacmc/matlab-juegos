import { Component, OnInit } from '@angular/core';
import { convertActionBinding } from '@angular/compiler/src/compiler_util/expression_converter';
import { element } from 'protractor';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-basic-operations',
  templateUrl: './basic-operations.component.html',
  styleUrls: ['./basic-operations.component.scss']
})
export class BasicOperationsComponent implements OnInit {

  private number1: number;
  private number2: number;
  private operator: string;
  private success: number = 0;
  private fails: number = 0;
  private difficulty: string = "1";
  private difficultyTemp: string = "1";

  private operatorNumber: number;
  private options: Array<any>;

  ngOnInit() {
    this.initGame(0);
  }

  //initialize game
  initGame(type: number) {
    this.getRandomOperator();
    this.validateOperation();
    this.fillOptions();
    

    switch(type) {
      case 0:
        this.success = type;
        this.fails = type;
        break;
      case 1:
        this.success++;
        break;
      default:
        break;
    }
  }

  private validateOperation() {
    switch (this.difficulty) {
      case "1":
        switch(this.operatorNumber) {
          case 1:
            //this.operator = "+";
            this.number1 = this.getRandomNumber(1, 50);
            this.number2 = this.getRandomNumber(1, 100);
            break;
          case 2:
            //this.operator = "-";
            this.number1 = this.getRandomNumber(1, 100);
            this.number2 = this.getRandomNumber(1, 100);
            while(this.number1 < this.number2 
                  || this.number1.valueOf() === this.number2.valueOf()) {
              this.number1 = this.getRandomNumber(1, 100);
            }
            break;
          case 3:
            //this.operator = "x";
            this.number1 = this.getRandomNumber(1, 10);
            this.number2 = this.getRandomNumber(1, 10);
            break;
          case 4:
            //this.operator = "÷";
            this.number1 = this.getRandomNumber(1, 100);
            this.number2 = this.getRandomNumber(1, 100);
            while ((this.number1 % this.number2) != 0 
                    || this.number1.valueOf() === this.number2.valueOf()) {
              this.number1 = this.getRandomNumber(1, 100);
              this.number2 = this.getRandomNumber(1, 100);
            }
            break;
        }
        break;
      case "2":
        switch(this.operatorNumber) {
          case 1:
            //this.operator = "+";
            this.number1 = this.getRandomNumber(-50, 200);
            this.number2 = this.getRandomNumber(-50, 200);
            break;
          case 2:
            //this.operator = "-";
            this.number1 = this.getRandomNumber(-50, 200);
            this.number2 = this.getRandomNumber(-50, 200);
            while(/**this.number1 < this.number2 
                  ||*/ this.number1.valueOf() === this.number2.valueOf()) {
              this.number1 = this.getRandomNumber(-50, 200);
            }
            break;
          case 3:
            //this.operator = "x";
            this.number1 = this.getRandomNumber(-5, 20);
            this.number2 = this.getRandomNumber(-5, 20);
            break;
          case 4:
            this.number1 = this.getRandomNumber(-50, 500);
            this.number2 = this.getRandomNumber(-50, 500);
            while((this.number1 % this.number2) != 0 
                    || this.number1.valueOf() === this.number2.valueOf()) {
              this.number1 = this.getRandomNumber(-50, 500);
              this.number2 = this.getRandomNumber(-50, 500);
            }
            break;
        }
        break;
      case "3":
        switch(this.operatorNumber) {
          case 1:
            //this.operator = "+";
            this.number1 = this.getRandomNumber(-100, -1000);
            this.number2 = this.getRandomNumber(100, 1000);
            break;
          case 2:
            //this.operator = "-";
            this.number1 = this.getRandomNumber(-100, -1000);
            this.number2 = this.getRandomNumber(100, 1000);
            while(/**this.number1 < this.number2 
                  ||**/ this.number1.valueOf() === this.number2.valueOf()) {
              this.number1 = this.getRandomNumber(100, 1000);
            }
            break;
          case 3:
            //this.operator = "x";
            this.number1 = this.getRandomNumber(-10, -30);
            this.number2 = this.getRandomNumber(10, 30);
            break;
          case 4:
            //this.operator = "÷";
            this.number1 = this.getRandomNumber(-100, -1000);
            this.number2 = this.getRandomNumber(100, 1000);
            while((this.number1 % this.number2) !== 0 
                    || this.number1.valueOf() === this.number2.valueOf()) {
              this.number1 = this.getRandomNumber(100, 1000);
              this.number2 = this.getRandomNumber(100, 1000);
            }
            break;
        }
        break;
    }
  }

  //get a random number
  private getRandomNumber(min: any, max: any) {
    return min + Math.floor((max - min) * Math.random());
  }

  //get a random operator
  private getRandomOperator() {
    this.operatorNumber = this.getRandomNumber(1, 5);
    switch(this.operatorNumber) {
      case 1:
        this.operator = "+";
        break;
      case 2:
        this.operator = "-";
        break;
      case 3:
        this.operator = "x";
          break;
      case 4:
        this.operator = "÷";
          break;
    }
  }

  //fill the options of the answers
  private fillOptions() {
    this.options = new Array<any>();
    
    let correct = +this.getCorrectOption();
    let option1 = correct+10;
    let option2 = correct+4;
    let option3 = correct <= 10 ? correct+20 : correct-10;

    this.options.push({ value: option1 + '', order: 1 });
    this.options.push({ value: option2 + '', order: 2 });
    this.options.push({ value: option3 + '', order: 3 });
    this.options.push({ value: correct, order: 4});

    this.options = this.desorderedOptions();
  }

  //mess up answer choices randomly
  private desorderedOptions() {
    let desorderedOrderList = new Array<any>();
    let desorderedOptionList = new Array<any>();

    for(var i = 0; i < 4; i++) {
      this.getDesordered(desorderedOrderList);
    }
    
    for(var i = 0; i < desorderedOrderList.length; i++) {
      for(var j = 0; j < this.options.length; j++) {
        if(desorderedOrderList[i] == this.options[j].order) {
          desorderedOptionList.push(this.options[j]);
        }
      }
    }

    desorderedOptionList[0] = { ...desorderedOptionList[0], name: 'first' };
    desorderedOptionList[1] = { ...desorderedOptionList[1], name: 'second' };
    desorderedOptionList[2] = { ...desorderedOptionList[2], name: 'third' };
    desorderedOptionList[3] = { ...desorderedOptionList[3], name: 'fourth' };

    return desorderedOptionList;
  }

  //returns a random number from 1 to 4 that is not repeated in the received array
  private getDesordered(desorderedOrderList: Array<any>) {
    let randomNumber = this.getRandomNumber(1, 5);

    while(desorderedOrderList.find(e => e == randomNumber)) {
      randomNumber = this.getRandomNumber(1, 5);
    }
    desorderedOrderList.push(randomNumber);
    return randomNumber;
  }

  //get the correct option
  private getCorrectOption() {
    let answer: string;
    switch(this.operatorNumber) {
      case 1:
        answer = this.number1 + this.number2 + "";
        break;
      case 2:
        answer = this.number1 - this.number2 + "";
        break;
      case 3:
        answer = this.number1 * this.number2 + "";
          break;
      case 4:
        answer = this.number1 / this.number2 + "";
          break;
    }
    return answer;
  }

  //verify that the selected answer is correct
  verify(value: any) {
    let answer: string;
    switch(this.operatorNumber) {
      case 1:
        answer = this.number1 + this.number2 + "";
        if(answer == value) {
          this.confirmOperationSolved();
        } else {
          this.incorrectAnswer();
        }
        break;
      case 2:
        answer = this.number1 - this.number2 + "";
        if(answer == value) {
          this.confirmOperationSolved();
        } else {
          this.incorrectAnswer();
        }
        break;
      case 3:
        answer = this.number1 * this.number2 + "";
        if(answer == value) {
          this.confirmOperationSolved();
        } else {
          this.incorrectAnswer();
        }
        break;
      case 4:
        answer = this.number1 / this.number2 + "";
        if(answer == value) {
          this.confirmOperationSolved();
        } else {
          this.incorrectAnswer();
        }
        break;
    }
  }

  incorrectAnswer() {
    this.fails++;
    document.getElementById("incorrectButton").click();
  }

  confirmOperationSolved() {
    document.getElementById('correctButton').click();
  }

  instructions() {
    document.getElementById("instructionsButton").click();
  }

  restart() {
    this.difficulty = this.difficultyTemp;
    this.initGame(0);
  }

  difficultyGame() {
    this.difficultyTemp = this.difficulty;
    document.getElementById("difficultyBtn").click();
  }

  difficultyConfirm() {
    this.difficulty = this.difficultyTemp;
    this.initGame(0);
  }

}