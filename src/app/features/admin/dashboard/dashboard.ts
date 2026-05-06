import { Component } from '@angular/core';
import { CommonModule, DatePipe, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DatePipe,
    UpperCasePipe
  ],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class Dashboard {
  
  today = new Date();
  userName = "Admin";

  searchKey = "";
  filterType = "all";
  timeFilter = "all";

  stats = {
    totalBookings: 24,
    activeRooms: 8,
    pendingRequests: 5,
    maintenance: 2
  };

  calendarDays = Array.from({ length: 28 }, (_, i) => ({
    number: i + 1,
    event: [10, 12, 18, 26].includes(i + 1) ? "A-101" : null
  }));

  activities = [
    {
      icon: "📅",
      title: "Room A-101 Reserved",
      description: "Booking confirmed for Data Structures class",
      type: "booking",
      label1: "User",
      value1: "Dr. Smith",
      label2: "Time",
      value2: "10:00 AM - 11:30 AM",
      time: "2 minutes ago"
    },
    {
      icon: "🔧",
      title: "Projector Issue Reported",
      description: "Maintenance request for Room B-201",
      type: "maintenance",
      label1: "Reported by",
      value1: "Prof. Johnson",
      label2: "Priority",
      value2: "High",
      time: "10 minutes ago"
    },
    {
      icon: "👤",
      title: "New User Registered",
      description: "Instructor account created",
      type: "user",
      label1: "Name",
      value1: "Dr. Lee",
      label2: "Department",
      value2: "Computer Science",
      time: "30 minutes ago"
    }
  ];
}