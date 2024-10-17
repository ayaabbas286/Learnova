import { Component } from '@angular/core';
import { InstructorsComponent } from '../instructors/instructors.component';
import { Header2Component } from "../../header2/header2.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [InstructorsComponent, Header2Component, FooterComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

}

