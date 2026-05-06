import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-instructor-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class Dashboard {

  userName = "Dr. Instructor";

  today = new Date();

  stats = {
    todayClasses: 4,
    bookedRooms: 2,
    pendingRequests: 3
  };

  classes = [
    {
      course: "Data Structures",
      time: "10:00 AM - 11:30 AM",
      room: "A-101",
      status: "Ongoing"
    },
    {
      course: "Software Engineering",
      time: "1:00 PM - 2:30 PM",
      room: "B-201",
      status: "Upcoming"
    },
    {
      course: "Database Systems",
      time: "3:00 PM - 4:30 PM",
      room: "C-301",
      status: "Upcoming"
    }
  ];

  logout() {
    console.log("Instructor logged out");
    // add auth logout logic here
  }
}