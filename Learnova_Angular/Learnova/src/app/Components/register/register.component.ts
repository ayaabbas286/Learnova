import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  selectedRole: string = 'student'; // Default role
  firstName: string = '';
  lastName: string = '';
  phone: string = '';
  email: string = '';
  password: string = '';

  // For teachers
  specialization: string = '';
  experience: number | null = null;
  nationalId: string = '';

  // Images for roles
  studentImage: string = 'Images/Reg_Photo/stu.png'; // Replace with actual path
  teacherImage: string = 'Images/Reg_Photo/tech.png'; // Replace with actual path

  selectedImage: string = this.studentImage;
  Country: string | undefined;

  // Change image based on selected role
  onRoleChange() {
    this.selectedImage =
      this.selectedRole === 'teacher' ? this.teacherImage : this.studentImage;
  }

  // Handle form submission and store data in localStorage
  onSubmit() {
    const userData = {
      role: this.selectedRole,
      firstName: this.firstName,
      lastName: this.lastName,
      phone: this.phone,
      email: this.email,
      password: this.password,
      specialization: this.specialization,
      experience: this.experience,
      nationalId: this.nationalId,
      Country: this.Country,
    };

    // Store data in localStorage
    localStorage.setItem('userData', JSON.stringify(userData));
    alert('Data saved successfully!');
  }
}
