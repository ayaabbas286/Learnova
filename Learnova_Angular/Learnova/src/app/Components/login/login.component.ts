import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  // تنفيذ عملية تسجيل الدخول
  onLogin() {
    const storedData = localStorage.getItem('userData');
    if (storedData) {
      const userData = JSON.parse(storedData);

      // التحقق من صحة البريد الإلكتروني وكلمة المرور
      if (
        this.email === userData.email &&
        this.password === userData.password
      ) {
        if (userData.role === 'student') {
          // توجيه الطالب إلى الصفحة الخاصة بالطلاب
          this.router.navigate(['/student']);
        } else if (userData.role === 'teacher') {
          // توجيه المدرس إلى الصفحة الخاصة بالمدرسين
          this.router.navigate(['/teacher']);
        }
      } else {
        alert('البيانات غير صحيحة');
      }
    } else {
      alert('لم يتم العثور على بيانات المستخدم. يرجى التسجيل أولاً.');
    }
  }
}
