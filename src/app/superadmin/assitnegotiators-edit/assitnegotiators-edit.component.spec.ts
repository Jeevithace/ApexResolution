import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssitnegotiatorsEditComponent } from './assitnegotiators-edit.component';

describe('AssitnegotiatorsEditComponent', () => {
  let component: AssitnegotiatorsEditComponent;
  let fixture: ComponentFixture<AssitnegotiatorsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssitnegotiatorsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssitnegotiatorsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
