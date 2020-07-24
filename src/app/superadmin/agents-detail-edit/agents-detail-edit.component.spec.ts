import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentsDetailEditComponent } from './agents-detail-edit.component';

describe('AgentsDetailEditComponent', () => {
  let component: AgentsDetailEditComponent;
  let fixture: ComponentFixture<AgentsDetailEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentsDetailEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentsDetailEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
