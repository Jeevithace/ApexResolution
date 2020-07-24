import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseownerDetailEditComponent } from './houseowner-detail-edit.component';

describe('HouseownerDetailEditComponent', () => {
  let component: HouseownerDetailEditComponent;
  let fixture: ComponentFixture<HouseownerDetailEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseownerDetailEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseownerDetailEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
