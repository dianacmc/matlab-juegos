import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hanoit-tower',
  templateUrl: './hanoit-tower.component.html',
  styleUrls: ['./hanoit-tower.component.scss']
})
export class HanoitTowerComponent implements OnInit {

  private moves: number = 0;
  private disks: number = 4;
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
    let temporalTower = [
      { name: 'first', value: 1 },
      { name: 'second', value: 2 },
      { name: 'third', value: 3 },
      { name: 'fourth', value: 4 },
      { name: 'fifth', value: 5 },
      { name: 'sixth', value: 6 }
    ];
    
    this.tower1 = temporalTower.slice(0, this.disks);
    this.tower2 = [];
    this.tower3 = [];
    
    for (let index = 0; index < this.disks; index++) {
      this.tower2.push({name: 'zero', value: 0});
      this.tower3.push({name: 'zero', value: 0});
    }
    
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
      setTimeout(() => {
        document.getElementById('alertBtn').click();
      }, 0);
    }
  }

  instructions(){
    document.getElementById('instBtn').click();
  }

  options() {
    document.getElementById('optionsBtn').click();
  }

  onOptionsClose() {
    const selectedOption = document.querySelector('input[name=diskNumberOptions]:checked');
    if (!selectedOption) return;
    this.disks = +(<HTMLInputElement>selectedOption).value;
    this.initGame();
  }
}
