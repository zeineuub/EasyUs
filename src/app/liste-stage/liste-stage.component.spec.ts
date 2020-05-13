import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeStageComponent } from './liste-stage.component';

describe('ListeStageComponent', () => {
  let component: ListeStageComponent;
  let fixture: ComponentFixture<ListeStageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeStageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
