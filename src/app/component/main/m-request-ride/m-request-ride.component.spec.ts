import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MRequestRideComponent } from './m-request-ride.component';

describe('MRequestRideComponent', () => {
  let component: MRequestRideComponent;
  let fixture: ComponentFixture<MRequestRideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MRequestRideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MRequestRideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
