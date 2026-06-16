import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalJsonDataComponent } from './local-json-data.component';

describe('LocalJsonDataComponent', () => {
  let component: LocalJsonDataComponent;
  let fixture: ComponentFixture<LocalJsonDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalJsonDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalJsonDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
