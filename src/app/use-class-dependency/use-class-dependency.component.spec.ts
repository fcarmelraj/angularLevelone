import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseClassDependencyComponent } from './use-class-dependency.component';

describe('UseClassDependencyComponent', () => {
  let component: UseClassDependencyComponent;
  let fixture: ComponentFixture<UseClassDependencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseClassDependencyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseClassDependencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
