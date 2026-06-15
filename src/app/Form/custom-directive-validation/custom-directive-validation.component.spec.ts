import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDirectiveValidationComponent } from './custom-directive-validation.component';

describe('CustomDirectiveValidationComponent', () => {
  let component: CustomDirectiveValidationComponent;
  let fixture: ComponentFixture<CustomDirectiveValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomDirectiveValidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomDirectiveValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
