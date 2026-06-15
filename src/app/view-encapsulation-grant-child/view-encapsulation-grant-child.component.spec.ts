import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEncapsulationGrantChildComponent } from './view-encapsulation-grant-child.component';

describe('ViewEncapsulationGrantChildComponent', () => {
  let component: ViewEncapsulationGrantChildComponent;
  let fixture: ComponentFixture<ViewEncapsulationGrantChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEncapsulationGrantChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEncapsulationGrantChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
