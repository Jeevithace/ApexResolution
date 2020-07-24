import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokersListEditComponent } from './brokers-list-edit.component';

describe('BrokersListEditComponent', () => {
  let component: BrokersListEditComponent;
  let fixture: ComponentFixture<BrokersListEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrokersListEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrokersListEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
