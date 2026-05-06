import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-request-management',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './request-management.html',
  styleUrls: ['./request-management.css']
})
export class RequestManagement {

  currentDate = new Date().toDateString();

  totalRequests = 15;
  pending = 8;
  approved = 6;
  rejected = 1;

  requests = [
    {
      icon: '🏫',
      title: 'Room A-101 - Data Structures',
      type: 'Room Booking',
      requester: 'Dr. Smith',
      time: '10:00 AM',
      features: ['Lecture Hall', 'Capacity: 40'],
      status: 'Pending',
      statusClass: 'status-pending'
    },
    {
      icon: '📽️',
      title: '3 Projectors for Event',
      type: 'Resource Request',
      requester: 'Prof. Johnson',
      time: '2:00 PM',
      features: ['Equipment', 'Quantity: 3'],
      status: 'Approved',
      statusClass: 'status-approved'
    },
    {
      icon: '🏫',
      title: 'Seminar Hall 1',
      type: 'Room Booking',
      requester: 'Dr. Lee',
      time: '9:00 AM',
      features: ['Seminar Room', 'Capacity: 80'],
      status: 'Rejected',
      statusClass: 'status-rejected'
    }
  ];

  approve(req: any) {
    req.status = 'Approved';
    req.statusClass = 'status-approved';
  }

  reject(req: any) {
    req.status = 'Rejected';
    req.statusClass = 'status-rejected';
  }
}