import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HanoitTowerComponent } from './hanoit-tower.component';

describe('HanoitTowerComponent', () => {
  let component: HanoitTowerComponent;
  let fixture: ComponentFixture<HanoitTowerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HanoitTowerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HanoitTowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
