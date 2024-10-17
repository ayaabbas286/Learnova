import { Component } from '@angular/core';
import { InstructorsComponent } from '../instructors/instructors.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [ InstructorsComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

}
