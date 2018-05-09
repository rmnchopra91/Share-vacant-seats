import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MAuthenticationComponent } from './m-authentication.component';

describe('MAuthenticationComponent', () => {
  let component: MAuthenticationComponent;
  let fixture: ComponentFixture<MAuthenticationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MAuthenticationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MAuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
