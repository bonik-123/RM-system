import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitMaintenance } from './submit-maintenance';

describe('SubmitMaintenance', () => {
  let component: SubmitMaintenance;
  let fixture: ComponentFixture<SubmitMaintenance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmitMaintenance]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmitMaintenance);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
