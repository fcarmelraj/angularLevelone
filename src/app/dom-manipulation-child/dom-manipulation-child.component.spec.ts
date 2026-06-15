import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomManipulationChildComponent } from './dom-manipulation-child.component';

describe('DomManipulationChildComponent', () => {
  let component: DomManipulationChildComponent;
  let fixture: ComponentFixture<DomManipulationChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomManipulationChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DomManipulationChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
