import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditReactiveComponent } from './edit-reactive.component';

describe('EditReactiveComponent', () => {
  let component: EditReactiveComponent;
  let fixture: ComponentFixture<EditReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
