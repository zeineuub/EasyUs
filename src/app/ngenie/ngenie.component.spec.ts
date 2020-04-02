import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgenieComponent } from './ngenie.component';

describe('NgenieComponent', () => {
  let component: NgenieComponent;
  let fixture: ComponentFixture<NgenieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgenieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgenieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
