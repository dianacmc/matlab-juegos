import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicSquaresComponent } from './magic-squares.component';

describe('MagicSquaresComponent', () => {
  let component: MagicSquaresComponent;
  let fixture: ComponentFixture<MagicSquaresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagicSquaresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicSquaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
