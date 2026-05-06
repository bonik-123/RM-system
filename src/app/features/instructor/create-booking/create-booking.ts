import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Booking {
  name: string;
  date: string;
  time: string;
  status: 'Confirmed' | 'Pending';
}

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-booking.html',
  styleUrls: ['./create-booking.css']
})
export class CreateBooking {

  // =========================
  // STATE (Signals)
  // =========================

  bookingType = signal<'room' | 'resource'>('room');

  selectedRoom = '';
  selectedResource = '';
  purpose = '';
  date = '';
  time = '';
  duration = 1;
  numberOfItems = 1;

  // =========================
  // DATA (Mock / Replace with API later)
  // =========================

  rooms = signal<string[]>([
    'Lecture Hall 1',
    'Room A-101',
    'Room A-102',
    'Computer Lab B-201'
  ]);

  resources = signal<string[]>([
    'Projector',
    'Laptop',
    'Microphone',
    'Whiteboard Marker Set'
  ]);

  purposes = signal<string[]>([
    'Lecture',
    'Exam',
    'Meeting',
    'Lab Session',
    'Presentation'
  ]);

  recentBookings = signal<Booking[]>([
    {
      name: 'Lecture Hall 1 Booking',
      date: 'April 20, 2026',
      time: '10:00 AM',
      status: 'Confirmed'
    },
    {
      name: 'Projector Request',
      date: 'April 21, 2026',
      time: '1:00 PM',
      status: 'Pending'
    },
    {
      name: 'Room A-101 Booking',
      date: 'April 22, 2026',
      time: '8:00 AM',
      status: 'Confirmed'
    }
  ]);

  // =========================
  // ACTIONS
  // =========================

  onSubmit() {

    if (this.bookingType() === 'room') {
      const newBooking: Booking = {
        name: `${this.selectedRoom} Booking`,
        date: this.date,
        time: this.time,
        status: 'Pending'
      };

      this.recentBookings.update(list => [newBooking, ...list]);
    }

    if (this.bookingType() === 'resource') {
      const newBooking: Booking = {
        name: `${this.selectedResource} Request`,
        date: this.date,
        time: 'Requested',
        status: 'Pending'
      };

      this.recentBookings.update(list => [newBooking, ...list]);
    }

    this.resetForm();
  }

  resetForm() {
    this.selectedRoom = '';
    this.selectedResource = '';
    this.purpose = '';
    this.date = '';
    this.time = '';
    this.duration = 1;
    this.numberOfItems = 1;
  }
}