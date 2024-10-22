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
  profilePicture: string = ''; // متغير لحفظ الصورة بعد التحويل إلى Base64

  selectRole(role: string) {
    this.selectedRole = role;
  }

  // وظيفة لقراءة الصورة المختارة وتحويلها إلى Base64
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.profilePicture = reader.result as string; // حفظ الصورة كـ Base64
      };
      reader.readAsDataURL(file); // قراءة الصورة
    }
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

    // حساب عدد المستخدمين الموجودين بالفعل في localStorage
    const existingUsersCount = Object.keys(localStorage).filter((key) =>
      key.startsWith('user_')
    ).length;
    const newId = existingUsersCount + 1; // إنشاء معرف جديد يبدأ من 1

    const userData = {
      id: newId, // إضافة المعرف هنا
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
      profilePicture: this.profilePicture, // إضافة الصورة المحفوظة في Base64
      agreeToPolicy: this.agreeToPolicy,
    };

    // حفظ بيانات المستخدم الجديد في localStorage مع مفتاح فريد 'user_<id>'
    localStorage.setItem(`user_${newId}`, JSON.stringify(userData));

    alert(`Registration successful! Your data has been saved `);
  }
}
