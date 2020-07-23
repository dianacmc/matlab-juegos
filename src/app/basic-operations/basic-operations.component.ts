import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-operations',
  templateUrl: './basic-operations.component.html',
  styleUrls: ['./basic-operations.component.scss']
})
export class BasicOperationsComponent implements OnInit {

  private number1: number = 2;
  private number2: number = 3;
  private operator: string = "+";
  private options: Array<any>;

  ngOnInit() {
    this.initGame();
  }

  private initGame() {
    this.number1 = this.getRandomNumber(1, 100);
    this.number2 = this.getRandomNumber(1, 100);
    this.getRandomOperator();
    this.fillOptions();
  }

  private getRandomNumber(min: any, max: any) {
    return min + Math.floor((max - min) * Math.random());
  }

  private getRandomOperator() {
    let number = this.getRandomNumber(1, 5);
    switch(number) {
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

  private fillOptions() {
    this.options = new Array<any>();
    this.options.push({ name: 'first', value: 140 });
    this.options.push({ name: 'second', value: 221 });
    this.options.push({ name: 'third', value: 30 });
  }

  instructions() {
    document.getElementById("instructionsButton").click();
  }

}
