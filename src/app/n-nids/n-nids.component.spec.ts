import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NNIDSComponent } from './n-nids.component';

describe('NNIDSComponent', () => {
  let component: NNIDSComponent;
  let fixture: ComponentFixture<NNIDSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NNIDSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NNIDSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
