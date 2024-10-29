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
import { CodingComponent } from './Components/courses/coding/coding.component';
import { UxUiComponent } from './Components/courses/ux-ui/ux-ui.component';
import { NetworkComponent } from './Components/courses/network/network.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { InstDAshBoardComponent } from './Components/inst-dash-board/inst-dash-board.component';
import { ContactComponent } from './Components/contact/contact.component';
import { MainPaymentComponent } from './Components/main-payment/main-payment.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'instructors', component: InstructorsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'Coding', component: CodingComponent },
  { path: 'UxUi', component: UxUiComponent },
  { path: 'Network', component: NetworkComponent },
  { path: 'sign-up', component: SignUpComponent },

  { path: 'cart', component: CartComponent },

  { path: 'ar', component: ArLanguageComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'main-payment', component: MainPaymentComponent },


  { path: 'register', component: RegisterComponent },
  { path: 'InstDAshBoard', component: InstDAshBoardComponent },
  { path: '**', component: ErrorComponent },
];
