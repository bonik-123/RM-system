import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomInfo } from './room-info';

describe('RoomInfo', () => {
  let component: RoomInfo;
  let fixture: ComponentFixture<RoomInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomInfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
