import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SIMComponent } from './sim.component';

describe('SIMComponent', () => {
  let component: SIMComponent;
  let fixture: ComponentFixture<SIMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SIMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SIMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
