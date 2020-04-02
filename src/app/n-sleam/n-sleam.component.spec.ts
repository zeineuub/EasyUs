import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NSLEAMComponent } from './n-sleam.component';

describe('NSLEAMComponent', () => {
  let component: NSLEAMComponent;
  let fixture: ComponentFixture<NSLEAMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NSLEAMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NSLEAMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
