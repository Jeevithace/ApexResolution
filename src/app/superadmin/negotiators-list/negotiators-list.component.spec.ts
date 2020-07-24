import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NegotiatorsListComponent } from './negotiators-list.component';

describe('NegotiatorsListComponent', () => {
  let component: NegotiatorsListComponent;
  let fixture: ComponentFixture<NegotiatorsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NegotiatorsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NegotiatorsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
