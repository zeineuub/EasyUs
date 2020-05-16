import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContacompanyComponent } from './contacompany.component';

describe('ContacompanyComponent', () => {
  let component: ContacompanyComponent;
  let fixture: ComponentFixture<ContacompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContacompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContacompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
