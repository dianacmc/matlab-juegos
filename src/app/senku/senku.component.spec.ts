import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SenkuComponent } from './senku.component';

describe('SenkuComponent', () => {
  let component: SenkuComponent;
  let fixture: ComponentFixture<SenkuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SenkuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SenkuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
