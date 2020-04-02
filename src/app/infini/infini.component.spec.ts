import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfiniComponent } from './infini.component';

describe('InfiniComponent', () => {
  let component: InfiniComponent;
  let fixture: ComponentFixture<InfiniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfiniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
