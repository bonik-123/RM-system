import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-submit-maintenance',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './submit-maintenance.html',
  styleUrls: ['./submit-maintenance.css']
})
export class SubmitMaintenance {

  roomNumber: string = '';
  issueType: string = '';
  description: string = '';

  onSubmit(form?: NgForm) {
    if (!this.roomNumber || !this.issueType || !this.description) {
      alert('Please fill out all required fields.');
      return;
    }

    const reportData = {
      roomNumber: this.roomNumber,
      issueType: this.issueType,
      description: this.description,
      date: new Date()
    };

    console.log('Submitted Report:', reportData);

    alert('Report submitted successfully!');

    // reset form
    this.roomNumber = '';
    this.issueType = '';
    this.description = '';

    if (form) form.resetForm();
  }
}