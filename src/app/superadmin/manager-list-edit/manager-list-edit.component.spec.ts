import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerListEditComponent } from './manager-list-edit.component';

describe('ManagerListEditComponent', () => {
  let component: ManagerListEditComponent;
  let fixture: ComponentFixture<ManagerListEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerListEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerListEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
