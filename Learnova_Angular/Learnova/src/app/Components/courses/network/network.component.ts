import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Courses } from '../courses';

@Component({
  selector: 'app-network',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './network.component.html',
  styleUrl: './network.component.css'
})
export class NetworkComponent {
  networkCourses = Courses.filter(course => course.typ.startsWith('network'));
}
