import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentListEditComponent } from './agent-list-edit.component';

describe('AgentListEditComponent', () => {
  let component: AgentListEditComponent;
  let fixture: ComponentFixture<AgentListEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentListEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentListEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
