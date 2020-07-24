import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadListEditComponent } from './lead-list-edit.component';

describe('LeadListEditComponent', () => {
  let component: LeadListEditComponent;
  let fixture: ComponentFixture<LeadListEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadListEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadListEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
