import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature3Component } from './feature3.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('Feature3Component', () => {
  let component: Feature3Component;
  let fixture: ComponentFixture<Feature3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature3Component],
      schemas: [NO_ERRORS_SCHEMA]


    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
