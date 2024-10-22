import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inst-dash-board',
  standalone: true,
  imports: [],
  templateUrl: './inst-dash-board.component.html',
  styleUrl: './inst-dash-board.component.css',
})
export class InstDAshBoardComponent implements OnInit {
  toggleSidebar() {
    const wrapper = document.getElementById('wrapper');
    wrapper?.classList.toggle('toggled');
  }
  instructorName: string = '';
  instructorPicture: string = '';

  ngOnInit(): void {
    // استرجاع بيانات المستخدم
    const userData = this.getInstructorData();
    if (userData) {
      this.instructorName = `${userData.firstName} ${userData.lastName}`;
      this.instructorPicture = userData.profilePicture;
    }
  }

  // دالة لاسترجاع بيانات المدرس
  getInstructorData() {
    // ابحث عن المدرس المسجل في localStorage
    const keys = Object.keys(localStorage).filter((key) =>
      key.startsWith('user_')
    );
    for (const key of keys) {
      const user = JSON.parse(localStorage.getItem(key) || '{}');
      if (user.role === 'teacher') {
        return user; // إرجاع بيانات المدرس
      }
    }
    return null;
  }
}
