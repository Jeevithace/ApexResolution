import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadRejectedListComponent } from './lead-rejected-list.component';

describe('LeadRejectedListComponent', () => {
  let component: LeadRejectedListComponent;
  let fixture: ComponentFixture<LeadRejectedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadRejectedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadRejectedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
