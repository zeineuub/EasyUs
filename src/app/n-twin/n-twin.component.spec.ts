import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NTWINComponent } from './n-twin.component';

describe('NTWINComponent', () => {
  let component: NTWINComponent;
  let fixture: ComponentFixture<NTWINComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NTWINComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NTWINComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
