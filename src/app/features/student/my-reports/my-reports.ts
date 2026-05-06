import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-reports',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-reports.html',
  styleUrls: ['./my-reports.css']
})
export class MyReports {

  searchKey: string = '';
  statusFilter: string = 'all';

  reports = () => [
    {
      title: 'Broken Projector',
      room: 'A-101',
      category: 'Audio/Visual',
      date: 'Apr 21, 2026',
      level: 'High',
      status: 'Pending'
    },
    {
      title: 'Aircon not working',
      room: 'B-203',
      category: 'HVAC',
      date: 'Apr 20, 2026',
      level: 'Medium',
      status: 'In Progress'
    },
    {
      title: 'Broken Chair',
      room: 'C-105',
      category: 'Structural',
      date: 'Apr 18, 2026',
      level: 'Low',
      status: 'Resolved'
    }
  ];

}