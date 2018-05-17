import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MRideListComponent } from './m-ride-list.component';

describe('MRideListComponent', () => {
  let component: MRideListComponent;
  let fixture: ComponentFixture<MRideListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MRideListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MRideListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
