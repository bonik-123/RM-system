import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-resource-management',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resource-management.html',
  styleUrls: ['./resource-management.css']
})
export class ResourceManagement {

  currentDate = new Date().toDateString();

  totalResources = 93;
  available = 61;

  resources = [
    {
      icon: '📽️',
      name: 'Projector',
      category: 'AV Equipment',
      available: 8,
      total: 12,
      percent: 66,
      status: 'Good',
      statusClass: 'good',
      location: 'AV Room'
    },
    {
      icon: '💻',
      name: 'Laptop',
      category: 'IT Equipment',
      available: 22,
      total: 30,
      percent: 73,
      status: 'Good',
      statusClass: 'good',
      location: 'IT Department'
    },
    {
      icon: '🎤',
      name: 'Microphone',
      category: 'Audio',
      available: 15,
      total: 20,
      percent: 75,
      status: 'Fair',
      statusClass: 'fair',
      location: 'Events Office'
    }
  ];

  addResource() {
    console.log("Add resource clicked");
  }

  edit(r: any) {
    console.log("Edit", r);
  }

  remove(r: any) {
    console.log("Delete", r);
  }
}