import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-instructor-schedule',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './schedule-status.html',
  styleUrls: ['./schedule-status.css']
})
export class ScheduleStatus {

  schedules = signal([
    {
      course: 'Data Structures',
      time: '10:00 AM - 11:30 AM',
      day: 'Monday',
      room: 'A-101',
      capacity: 40,
      status: 'Confirmed'
    },
    {
      course: 'Software Engineering',
      time: '1:00 PM - 2:30 PM',
      day: 'Tuesday',
      room: 'B-201',
      capacity: 35,
      status: 'Pending'
    },
    {
      course: 'Database Systems',
      time: '3:00 PM - 4:30 PM',
      day: 'Wednesday',
      room: 'C-301',
      capacity: 50,
      status: 'Confirmed'
    }
  ]);

}