import { Component } from '@angular/core';
import { Courses } from '../courses';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-coding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './coding.component.html',
  styleUrl: './coding.component.css',
})
export class CodingComponent {
  // coding.component.ts
  codingCourses = Courses.filter((course) => course.typ.startsWith('coding'));
}
