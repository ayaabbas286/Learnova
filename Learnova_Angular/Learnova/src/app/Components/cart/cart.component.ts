import { Component, Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// Define the Course interface
interface Course {
  id: number;
  name: string;
  price: number;
}

// CartService to manage cart items
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: Course[] = [];
  private totalPrice = new BehaviorSubject<number>(0);
  totalPrice$ = this.totalPrice.asObservable();
  cartItems$ = new BehaviorSubject<Course[]>(this.cartItems); // Observable for cart items

  // Method to add a course to the cart
  addToCart(course: Course) {
    this.cartItems.push(course);
    this.updateTotalPrice();
    this.cartItems$.next(this.cartItems); // Emit the updated cart items
  }

  // Method to remove a course from the cart
  removeFromCart(courseId: number) {
    this.cartItems = this.cartItems.filter(course => course.id !== courseId);
    this.updateTotalPrice();
    this.cartItems$.next(this.cartItems); // Emit the updated cart items
  }

  // Get all cart items
  getCartItems(): Course[] {
    return this.cartItems;
  }

  // Update the total price of the cart
  private updateTotalPrice() {
    const total = this.cartItems.reduce((sum, item) => sum + item.price, 0);
    this.totalPrice.next(total);
  }
}

// CartComponent to display and manage cart UI
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartCourses: Course[] = [];
  isCartEmpty: boolean = true;
  totalPrice: number = 0;

  constructor(private cartService: CartService) { }

  // Lifecycle hook: Called once after the component is initialized
  ngOnInit() {
    // Subscribe to cart items
    this.cartService.cartItems$.subscribe(courses => {
      this.cartCourses = courses;
      this.checkCartEmpty(); // Check if cart is empty
    });

    // Subscribe to total price
    this.cartService.totalPrice$.subscribe(price => {
      this.totalPrice = price;
    });
  }

  // Remove a course from the cart
  removeCourse(courseId: number) {
    this.cartService.removeFromCart(courseId);
    // No need to call loadCartItems() as cartItems$ already updates the cartCourses
  }

  // Check if the cart is empty
  checkCartEmpty() {
    this.isCartEmpty = this.cartCourses.length === 0;
  }
}

