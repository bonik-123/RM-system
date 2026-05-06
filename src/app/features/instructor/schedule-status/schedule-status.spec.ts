import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleStatus } from './schedule-status';

describe('ScheduleStatus', () => {
  let component: ScheduleStatus;
  let fixture: ComponentFixture<ScheduleStatus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScheduleStatus]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleStatus);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
