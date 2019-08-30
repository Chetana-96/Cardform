import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Edittask1Component } from './edittask1.component';

describe('Edittask1Component', () => {
  let component: Edittask1Component;
  let fixture: ComponentFixture<Edittask1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Edittask1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Edittask1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
