import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ErrorComponent } from './Components/error/error.component';
import { CoursesComponent } from './Components/courses/courses.component';
import { InstructorsComponent } from './Components/instructors/instructors.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { NotificationsComponent } from './Components/notifications/notifications.component';
import { ArLanguageComponent } from './Components/ar-language/ar-language.component';
import { CartComponent } from './Components/cart/cart.component';
import { ContactUSComponent } from './Components/payment/contact-us.component';
import { CodingComponent } from './Components/courses/coding/coding.component';
import { UxUiComponent } from './Components/courses/ux-ui/ux-ui.component';
import { NetworkComponent } from './Components/courses/network/network.component';
// import { SecpaymentComponent } from './Components/secpayment/secpayment.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { InstDAshBoardComponent } from './Components/inst-dash-board/inst-dash-board.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'Secpayment', component:SecpaymentComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'instructors', component: InstructorsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'contact-us', component: ContactUSComponent },
  { path: 'Coding', component: CodingComponent },
  { path: 'UxUi', component: UxUiComponent },
  { path: 'Network', component: NetworkComponent },

  { path: 'cart', component: CartComponent },

  { path: 'ar', component: ArLanguageComponent },

  { path: 'register', component: RegisterComponent },
  { path: 'InstDAshBoard', component: InstDAshBoardComponent },
  { path: '**', component: ErrorComponent },
];
