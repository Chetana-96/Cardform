import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTask1Component } from './addtask1.component';

describe('Addtask1Component', () => {
  let component: AddTask1Component;
  let fixture: ComponentFixture<AddTask1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTask1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTask1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
