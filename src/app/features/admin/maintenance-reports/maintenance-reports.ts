import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-maintenance-reports',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './maintenance-reports.html',
  styleUrls: ['./maintenance-reports.css']
})
export class MaintenanceReports {

  currentDate = new Date().toDateString();

  totalReports = 7;
  pending = 2;
  inProgress = 3;
  resolved = 2;

  reports = [
    {
      icon: '⚠️',
      title: 'Broken Projector Bulb',
      priority: 'High',
      room: 'Room B-204',
      category: 'A/V Equipment',
      date: 'Apr 3, 2026',
      status: 'In Progress',
      statusClass: 'progress'
    },
    {
      icon: '❄️',
      title: 'AC Not Cooling',
      priority: 'Medium',
      room: 'Room A-105',
      category: 'HVAC',
      date: 'Mar 28, 2026',
      status: 'Resolved',
      statusClass: 'resolved'
    },
    {
      icon: '💻',
      title: '3 PCs Won’t Boot',
      priority: 'High',
      room: 'Lab B-201',
      category: 'IT Equipment',
      date: 'Apr 1, 2026',
      status: 'Pending',
      statusClass: 'pending'
    },
    {
      icon: '🪑',
      title: 'Broken Chairs (x5)',
      priority: 'Low',
      room: 'Seminar Room',
      category: 'Furniture',
      date: 'Apr 4, 2026',
      status: 'Pending',
      statusClass: 'pending'
    }
  ];
}