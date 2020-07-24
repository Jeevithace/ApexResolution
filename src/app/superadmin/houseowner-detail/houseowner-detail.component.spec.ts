import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseownerDetailComponent } from './houseowner-detail.component';

describe('HouseownerDetailComponent', () => {
  let component: HouseownerDetailComponent;
  let fixture: ComponentFixture<HouseownerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseownerDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseownerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
