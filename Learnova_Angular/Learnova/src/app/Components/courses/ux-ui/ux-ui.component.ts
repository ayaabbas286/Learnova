import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Courses } from '../courses'; 

@Component({
  selector: 'app-ux-ui',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ux-ui.component.html',
  styleUrl: './ux-ui.component.css'
})
export class UxUiComponent {
  ux_uiCourses = Courses.filter(course => course.typ.startsWith('ux_ui'));

}
