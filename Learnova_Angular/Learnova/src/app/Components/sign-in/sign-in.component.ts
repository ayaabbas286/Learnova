import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [ RouterModule,FormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  rememberMe: boolean = false;
  email: string = '';
  password: string = '';

  constructor(private router: Router) {  const rememberedEmail = localStorage.getItem('rememberedEmail');
    const rememberedPassword = localStorage.getItem('rememberedPassword');
    if (rememberedEmail && rememberedPassword) {
      this.email = rememberedEmail;
      this.password = rememberedPassword;
      this.rememberMe = true;
    }}

  // تنفيذ عملية تسجيل الدخول
  onLogin() {
    // جلب جميع المستخدمين من localStorage
    const storedUsers: any[] = [];
    for (let i = 1; i <= localStorage.length; i++) {
      const userData = localStorage.getItem(`user_${i}`);
      if (userData) {
        storedUsers.push(JSON.parse(userData));
      }
    }

    // التحقق من صحة البريد الإلكتروني وكلمة المرور
    const user = storedUsers.find(
      (user) => user.email === this.email && user.password === this.password
    );
    if (user) {
      // Save credentials if "Remember me" is checked
      if (this.rememberMe) {
        localStorage.setItem('rememberedEmail', this.email);
        localStorage.setItem('rememberedPassword', this.password);
      } else {
        localStorage.removeItem('rememberedEmail');
        localStorage.removeItem('rememberedPassword');
      }

    if (user) {
      // التحقق من الدور وتوجيه المستخدم
      if (user.role === 'student') {
        this.router.navigate(['/student']); // توجيه الطالب
      } else if (user.role === 'teacher') {
        this.router.navigate(['/InstDAshBoard']); // توجيه المدرس
      }
    } else {
      // رسالة تنبيه عند إدخال بيانات خاطئة
      alert('ًWrong Email or Password!');
    }
  }
  }}
