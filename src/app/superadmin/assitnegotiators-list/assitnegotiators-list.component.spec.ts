import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssitnegotiatorsListComponent } from './assitnegotiators-list.component';

describe('AssitnegotiatorsListComponent', () => {
  let component: AssitnegotiatorsListComponent;
  let fixture: ComponentFixture<AssitnegotiatorsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssitnegotiatorsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssitnegotiatorsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
