import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NegotiatorsEditComponent } from './negotiators-edit.component';

describe('NegotiatorsEditComponent', () => {
  let component: NegotiatorsEditComponent;
  let fixture: ComponentFixture<NegotiatorsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NegotiatorsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NegotiatorsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
