import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloserEditComponent } from './closer-edit.component';

describe('CloserEditComponent', () => {
  let component: CloserEditComponent;
  let fixture: ComponentFixture<CloserEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloserEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloserEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
