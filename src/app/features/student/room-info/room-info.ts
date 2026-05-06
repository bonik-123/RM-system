import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-room-information',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './room-info.html',
  styleUrls: ['./room-info.css']
})
export class RoomInfo {

  rooms = () => [
    {
      name: 'A-101',
      subtitle: 'Main Building - 1st Floor',
      capacity: 40,
      status: 'Available',
      features: ['Projector', 'Whiteboard', 'Aircon']
    },
    {
      name: 'B-203',
      subtitle: 'Science Building - 2nd Floor',
      capacity: 35,
      status: 'Currently Occupied',
      features: ['Lab Equipment', 'Sink', 'Aircon']
    },
    {
      name: 'C-105',
      subtitle: 'Engineering Wing',
      capacity: 50,
      status: 'Under Maintenance',
      features: ['3D Printer', 'Computers', 'Aircon']
    }
  ];

}