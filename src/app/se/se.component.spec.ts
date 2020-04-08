import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SEComponent } from './se.component';

describe('SEComponent', () => {
  let component: SEComponent;
  let fixture: ComponentFixture<SEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
