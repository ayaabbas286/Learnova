import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-instructors',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './instructors.component.html',
  styleUrl: './instructors.component.css',
})
export class InstructorsComponent implements OnInit {
  experts: Expert[] = [];

  ngOnInit(): void {
    this.experts = experts;
  }
}

export interface Expert {
  name: string;
  role: string;
  image: string;
}

export const experts: Expert[] = [
  {
    name: ' Mohamed El-Desoky',
    role: 'Coding Instractour',
    image: 'Images/Inst_img/d.jpeg',
  },
  {
    name: 'Osama Mohamed',
    role: 'Coding Instractour',
    image: 'Images/Inst_img/z.jpeg',
  },
  {
    name: 'Mohammed Issa ',
    role: 'Coding Instractour',
    image: 'Images/Inst_img/Mohammed_Issa.jpeg',
  },
  {
    name: 'Ahmed Nazmy',
    role: 'IT&Network Instractour',
    image: 'Images/Inst_img/Ahmed_N.jpeg',
  },
  {
    name: 'Moustafa Makram',
    role: 'Graphic Designer Instractour',
    image: 'Images/Inst_img/Moustafa_M.jpeg',
  },
  {
    name: ' Mohamed El-Desoky',
    role: 'Coding Instractour',
    image: 'Images/Inst_img/d.jpeg',
  },
  {
    name: 'Osama Mohamed',
    role: 'Coding Instractour',
    image: 'Images/Inst_img/z.jpeg',
  },
  {
    name: 'Mohammed Issa ',
    role: 'Coding Instractour',
    image: 'Images/Inst_img/Mohammed_Issa.jpeg',
  },
  {
    name: 'Ahmed Nazmy',
    role: 'IT&Network Instractour',
    image: 'Images/Inst_img/Ahmed_N.jpeg',
  },
  {
    name: 'Moustafa Makram',
    role: 'Graphic Designer Instractour',
    image: 'Images/Inst_img/Moustafa_M.jpeg',
  },
  {
    name: ' Mohamed El-Desoky',
    role: 'Coding Instractour',
    image: 'Images/Inst_img/d.jpeg',
  },
  {
    name: 'Osama Mohamed',
    role: 'Coding Instractour',
    image: 'Images/Inst_img/z.jpeg',
  },
  {
    name: 'Mohammed Issa ',
    role: 'Coding Instractour',
    image: 'Images/Inst_img/Mohammed_Issa.jpeg',
  },
  {
    name: 'Ahmed Nazmy',
    role: 'IT&Network Instractour',
    image: 'Images/Inst_img/Ahmed_N.jpeg',
  },
  {
    name: 'Moustafa Makram',
    role: 'Graphic Designer Instractour',
    image: 'Images/Inst_img/Moustafa_M.jpeg',
  },
];
