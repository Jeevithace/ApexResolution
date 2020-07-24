import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadRejectedEditComponent } from './lead-rejected-edit.component';

describe('LeadRejectedEditComponent', () => {
  let component: LeadRejectedEditComponent;
  let fixture: ComponentFixture<LeadRejectedEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadRejectedEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadRejectedEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
