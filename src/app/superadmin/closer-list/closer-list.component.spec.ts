import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloserListComponent } from './closer-list.component';

describe('CloserListComponent', () => {
  let component: CloserListComponent;
  let fixture: ComponentFixture<CloserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
