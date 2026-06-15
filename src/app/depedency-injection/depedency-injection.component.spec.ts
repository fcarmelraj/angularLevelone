import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepedencyInjectionComponent } from './depedency-injection.component';

describe('DepedencyInjectionComponent', () => {
  let component: DepedencyInjectionComponent;
  let fixture: ComponentFixture<DepedencyInjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepedencyInjectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepedencyInjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
