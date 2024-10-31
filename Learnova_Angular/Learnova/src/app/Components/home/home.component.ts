import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { Expert, InstructorsComponent } from '../instructors/instructors.component';
import { InstructorsServiceService } from '../Instructors-serv/instructors-service.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, RouterLink, RouterModule,RouterLinkActive,RouterOutlet,CommonModule, InstructorsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit  {
  experts: Expert[] = [];

  constructor(private instructorsService: InstructorsServiceService) {}

  ngOnInit(): void {
    this.experts = this.instructorsService.getExperts();
  }

  getExpertGroups(array: Expert[], groupSize: number): Expert[][] {
    const groups: Expert[][] = [];
    for (let i = 0; i < array.length; i += groupSize) {
      groups.push(array.slice(i, i + groupSize));
    }
    return groups;
  }

}
