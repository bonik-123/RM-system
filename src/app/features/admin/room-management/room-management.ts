import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-room-management',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './room-management.html',
  styleUrls: ['./room-management.css']
})
export class RoomManagement {

  currentDate = new Date().toDateString();

  totalRooms = 8;
  available = 5;
  occupied = 2;
  maintenance = 1;

  rooms = [
    {
      icon: '🏫',
      name: 'Lecture Hall 1',
      type: 'Lecture Hall',
      floor: 'Ground Floor',
      capacity: 150,
      features: ['Projector', 'AC', 'WiFi'],
      status: 'Available',
      statusClass: 'status-available'
    },
    {
      icon: '📚',
      name: 'Room A-101',
      type: 'Classroom',
      floor: '1st Floor',
      capacity: 40,
      features: ['Smart Board', 'AC', 'WiFi'],
      status: 'Occupied',
      statusClass: 'status-occupied'
    },
    {
      icon: '📚',
      name: 'Room A-102',
      type: 'Classroom',
      floor: '1st Floor',
      capacity: 40,
      features: ['Projector', 'AC'],
      status: 'Available',
      statusClass: 'status-available'
    },
    {
      icon: '💻',
      name: 'Computer Lab B-201',
      type: 'Computer Lab',
      floor: '2nd Floor',
      capacity: 35,
      features: ['PC', 'AC', 'WiFi'],
      status: 'Under Maintenance',
      statusClass: 'status-maintenance'
    },
    {
      icon: '🎤',
      name: 'Seminar Room C-301',
      type: 'Seminar Room',
      floor: '3rd Floor',
      capacity: 25,
      features: ['Projector', 'AC', 'WiFi'],
      status: 'Available',
      statusClass: 'status-available'
    },
    {
      icon: '📚',
      name: 'Room B-202',
      type: 'Classroom',
      floor: '2nd Floor',
      capacity: 50,
      features: ['Smart Board', 'AC'],
      status: 'Occupied',
      statusClass: 'status-occupied'
    }
  ];

  addRoom() {
    console.log("Add room");
  }

  edit(room: any) {
    console.log("Edit room", room);
  }

  delete(room: any) {
    console.log("Delete room", room);
  }
}