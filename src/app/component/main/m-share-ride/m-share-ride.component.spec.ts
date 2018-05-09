import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MShareRideComponent } from './m-share-ride.component';

describe('MShareRideComponent', () => {
  let component: MShareRideComponent;
  let fixture: ComponentFixture<MShareRideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MShareRideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MShareRideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
