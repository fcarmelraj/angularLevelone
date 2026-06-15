import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseValueDependencyComponent } from './use-value-dependency.component';

describe('UseValueDependencyComponent', () => {
  let component: UseValueDependencyComponent;
  let fixture: ComponentFixture<UseValueDependencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseValueDependencyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseValueDependencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
