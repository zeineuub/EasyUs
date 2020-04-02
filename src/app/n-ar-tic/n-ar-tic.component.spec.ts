import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NArTicComponent } from './n-ar-tic.component';

describe('NArTicComponent', () => {
  let component: NArTicComponent;
  let fixture: ComponentFixture<NArTicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NArTicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NArTicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
