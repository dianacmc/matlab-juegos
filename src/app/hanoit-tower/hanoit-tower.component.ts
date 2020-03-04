import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hanoit-tower',
  templateUrl: './hanoit-tower.component.html',
  styleUrls: ['./hanoit-tower.component.scss']
})
export class HanoitTowerComponent implements OnInit {

  private moves: number;
  private minMoves: number;
  private disks: number = 4;
  private disksTemp: string = "4";
  private toBeMoved: any;
  private originTower: Array<any>;
  private tower1: Array<any>;
  private tower2: Array<any>;
  private tower3: Array<any>;

  ngOnInit() {
    this.initGame();
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
    
    this.moves = 0;
    this.minMoves = (2 ** this.disks) - 1;
    this.toBeMoved = null;
  }

  private moveToAnotherTower(tower: Array<any>) {
    if (tower.length === 0 || tower[0].value > this.toBeMoved.value) {
      this.toBeMoved.selected = false;
      tower.unshift(this.toBeMoved);
      this.originTower.shift();
      this.toBeMoved = null;
      this.moves++;
      this.gameFinished();
    }
  }

  private selectToBeMoved(tower: Array<any>) {
    if (this.toBeMoved) {
      this.toBeMoved.selected = false;
    } else if (tower.length > 0) {
      this.originTower = tower;
      this.toBeMoved = tower[0];
      tower[0] = { ...tower[0], selected: true };
    }
  }

  move(tower: Array<any>) {
    if (this.toBeMoved) {
      if (this.originTower != tower) {
        this.moveToAnotherTower(tower);
      } else {
        tower[0] = { ...tower[0], selected: false };
        this.toBeMoved = null;
      }
    } else {
      this.selectToBeMoved(tower);
    }
  }

  private gameFinished(){
    if (this.tower2.length === this.disks || this.tower3.length === this.disks) {
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
    this.disksTemp = this.disks.toString();
    document.getElementById('optionsBtn').click();
  }

  optionsConfirm() {
    this.disks = +this.disksTemp;
    this.initGame();
  }
}
