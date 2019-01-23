import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hanoit-tower',
  templateUrl: './hanoit-tower.component.html',
  styleUrls: ['./hanoit-tower.component.scss']
})
export class HanoitTowerComponent implements OnInit {

  private moves: number = 0;
  private tower1 = [];
  private tower2 = [];
  private tower3 = [];
  private toBeMoved;

  constructor() {
    this.initGame();
  }

  ngOnInit() {
  }

  initGame() {
    this.tower1 = [
      { name: 'first', value: 1 },
      { name: 'second', value: 2 },
      { name: 'third', value: 3 },
      { name: 'fourth', value: 4 }
    ];
    this.tower2 = [
      { name: 'zero', value: 0 },
      { name: 'zero', value: 0 },
      { name: 'zero', value: 0 },
      { name: 'zero', value: 0 }
    ];
    this.tower3 = [
      { name: 'zero', value: 0 },
      { name: 'zero', value: 0 },
      { name: 'zero', value: 0 },
      { name: 'zero', value: 0 }
    ];

    this.moves = 0;
    this.toBeMoved = null;
  }

  private moveToAnotherTower(tower: Array<any>) {
    for (let index = tower.length - 1; index >= 0; index--) {
      if (tower[index].value == 0) {
        if (!tower[index + 1]) {
          tower[index] = this.toBeMoved;
          this.toBeMoved = null;
          this.moves++;
          this.gameFinished();
          break;
        } else {
          if ((tower[index + 1].value != 0)
            && (tower[index + 1].value >
              this.toBeMoved.value)) {
            tower[index] = this.toBeMoved;
            this.toBeMoved = null;
            this.moves++;
            this.gameFinished();
            break;
          }
        }
      }
    }
  }

  private selectToBeMoved(tower) {
    for (let index = 0; index < tower.length; index++) {
      if (tower[index].value != 0) {
        this.toBeMoved = tower[index];
        tower[index] = { name: 'zero', value: 0 };
        break;
      }
    }
  }

  move(tower: Array<any>) {
    if (this.toBeMoved) {
      this.moveToAnotherTower(tower);
    } else {
      this.selectToBeMoved(tower);
    }
  }

  private gameFinished(){
    if(this.tower2[0].value != 0 || this.tower3[0].value != 0 ) {
      console.log("Juego terminado");
      document.getElementById('alertBtn').click();
    }
  }

  instructions(){
    document.getElementById('instBtn').click();
  }

}
