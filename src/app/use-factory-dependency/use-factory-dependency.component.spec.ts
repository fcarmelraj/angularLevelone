import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseFactoryDependencyComponent } from './use-factory-dependency.component';

describe('UseFactoryDependencyComponent', () => {
  let component: UseFactoryDependencyComponent;
  let fixture: ComponentFixture<UseFactoryDependencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseFactoryDependencyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseFactoryDependencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
