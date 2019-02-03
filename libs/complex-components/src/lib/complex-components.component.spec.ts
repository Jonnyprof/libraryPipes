import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexComponentComponent } from './complex-component.component';

describe('ComplexComponentComponent', () => {
  let component: ComplexComponentComponent;
  let fixture: ComponentFixture<ComplexComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplexComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
