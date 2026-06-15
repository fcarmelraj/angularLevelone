import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesListAllComponent } from './directives-list-all.component';

describe('DirectivesListAllComponent', () => {
  let component: DirectivesListAllComponent;
  let fixture: ComponentFixture<DirectivesListAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivesListAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivesListAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
