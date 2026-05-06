import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-room-availability',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './room-availability.html',
  styleUrls: ['./room-availability.css']
})
export class RoomAvailability {

  // =========================
  // STATE
  // =========================

  activeTab = signal<'rooms' | 'resources'>('rooms');

  setTab(tab: 'rooms' | 'resources') {
    this.activeTab.set(tab);
  }

  // =========================
  // STATS
  // =========================

  roomStats = signal({
    available: 5,
    resources: 12
  });

  // =========================
  // ROOMS DATA
  // =========================

  rooms = signal([
    {
      name: 'Lecture Hall 1',
      location: 'Building A',
      seats: 150,
      availability: 'available',
      status: 'Available',
      freeUntil: '3:00 PM',
      amenities: ['Projector', 'AC', 'WiFi']
    },
    {
      name: 'Room A-101',
      location: '1st Floor',
      seats: 40,
      availability: 'occupied',
      status: 'Occupied',
      freeUntil: 'N/A',
      amenities: ['Smart Board', 'AC']
    },
    {
      name: 'Computer Lab B-201',
      location: '2nd Floor',
      seats: 35,
      availability: 'maintenance',
      status: 'Maintenance',
      freeUntil: 'N/A',
      amenities: ['PC', 'AC']
    }
  ]);

  // =========================
  // RESOURCES DATA
  // =========================

  resources = signal([
    {
      name: 'Projector',
      type: 'AV Equipment',
      available: 8,
      total: 12,
      status: 'Good'
    },
    {
      name: 'Laptop Units',
      type: 'IT Equipment',
      available: 22,
      total: 30,
      status: 'Good'
    }
  ]);

  // =========================
  // HELPERS
  // =========================

  getAvailabilityClass(status: string) {
    return status; // matches CSS classes: available | occupied | maintenance
  }
}