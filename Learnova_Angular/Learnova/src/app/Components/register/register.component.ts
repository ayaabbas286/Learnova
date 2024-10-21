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
  selectedRole: string = 'student';
  firstName: string = '';
  lastName: string = '';
  phone: string = '';
  email: string = '';
  password: string = '';
  specialization: string = '';
  experience: number = 0;
  nationalId: string = '';
  country: string = '';
  confirmEmail: any;
  confirmPassword: any;
  agreeToPolicy: any;

  selectRole(role: string) {
    this.selectedRole = role;
  }

  onSubmit() {
    // Regular expression to check valid email domains
    const emailPattern =
      /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|hotmail\.com|outlook\.com)$/;

    // Check if emails match and if the email ends with allowed domains
    if (this.email !== this.confirmEmail) {
      alert('Email and Confirm Email do not match!');
      return;
    }

    if (!emailPattern.test(this.email)) {
      alert(
        'Email must be from gmail.com, yahoo.com, hotmail.com, or outlook.com'
      );
      return;
    }

    if (this.password !== this.confirmPassword) {
      alert('Password and Confirm Password do not match!');
      return;
    }

    const userData = {
      role: this.selectedRole,
      firstName: this.firstName,
      lastName: this.lastName,
      phone: this.phone,
      email: this.email,
      password: this.password,
      specialization:
        this.selectedRole === 'teacher' ? this.specialization : '',
      experience: this.selectedRole === 'teacher' ? this.experience : '',
      nationalId: this.selectedRole === 'teacher' ? this.nationalId : '',
      country: this.selectedRole === 'teacher' ? this.country : '',
      agreeToPolicy: this.agreeToPolicy,
    };

    // Save data to localStorage
    localStorage.setItem('userData', JSON.stringify(userData));

    alert('Registration successful! Your data has been saved.');
  }
}
