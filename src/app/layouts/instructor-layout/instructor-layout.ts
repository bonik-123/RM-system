import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-instructor-layout',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './instructor-layout.html',
  styleUrl: './instructor-layout.css',
})
export class InstructorLayout {

}
