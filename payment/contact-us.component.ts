import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [NgClass,CommonModule,RouterLink,RouterOutlet],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUSComponent {
    // Initialize an array of objects to track the state of each div
    status:boolean=false;
    statustwo:boolean=false;



  oncardClick():void{
    // Toggle the active state of a specific div based on its index
    this.status=! this.status;
    }


  oncardTwoClick():void{
    // Toggle the active state of a specific div based on its index
    this.statustwo=! this.statustwo;
    }

    statusthree:boolean=false;
    oncardThreeClick():void{
      // Toggle the active state of a specific div based on its index
      this.statusthree=! this.statusthree;
      }








}
