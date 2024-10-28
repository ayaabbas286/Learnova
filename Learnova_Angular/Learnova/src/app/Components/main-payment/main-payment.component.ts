import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import * as bootstrap from 'bootstrap';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-main-payment',
  standalone: true,
  imports: [NgClass,RouterLink,RouterOutlet,FormsModule,CommonModule],
  templateUrl: './main-payment.component.html',
  styleUrl: './main-payment.component.css'
})
export class MainPaymentComponent {

// Display control for proceed button
isProceedVisible: boolean = true;
isNotProceedVisible: boolean = false;


onProceedClick() {
  this.isProceedVisible = false;
  this.isNotProceedVisible = true;
}


// Confirmation toggle
isConfirmed: boolean = false;

toggleConfirmation() {
  this.isConfirmed = !this.isConfirmed;
  console.log(this.isConfirmed);
}









  // Initialize states for the plan cards
  status: boolean = false;
  statustwo: boolean = false;
  statusthree: boolean = false;

  // Default selected plan and cost
  theplan: string = 'Yearly Plan';
  thecost: number = 199.00;

  // Display state for proceed button
  display: boolean = true;
  nondisplay: boolean = false;

  // Payment-related properties
  inputValue: string = ''; // Clear input
  showAlert: boolean = false;
  confirmtrans: boolean = false;

  // Form data for handling user input
  formData = {
    name: '',
    email: '',
    message: '',
  };

  // Toggle the active state of the monthly plan
  oncardClick() {
    this.status = !this.status;
    this.statustwo = false; // Close the quarterly plan
    this.statusthree = false; // Close the yearly plan
    this.theplan = 'Monthly Plan';
    this.thecost = 399.00;
  }

  // Toggle the active state of the quarterly plan
  oncardTwoClick() {
    this.statustwo = !this.statustwo;
    this.status = false; // Close the monthly plan
    this.statusthree = false; // Close the yearly plan
    this.theplan = 'Quarterly Plan';
    this.thecost = 266.00;
  }

  // Toggle the active state of the yearly plan
  oncardThreeClick() {
    this.statusthree = !this.statusthree;
    this.status = false; // Close the monthly plan
    this.statustwo = false; // Close the quarterly plan
    this.theplan = 'Yearly Plan';
    this.thecost = 199.00;
  }

  // Handle proceed button click
  onproceedclick() {
    this.display = !this.display;
    this.nondisplay = true;
  }

  // Function to handle payment logic
  pay() {
    // Logic to handle payment (you can replace this with actual payment logic)

    // Show success alert
    this.showAlert = true;
    this.clearinput();
  }

  // Clear input field
  clearinput() {
    this.inputValue = ''; // Clear the input field
  }

  // Confirm transaction
  confirmed() {
    this.confirmtrans = true;
  }

  // Function to initialize popovers (if applicable)
  initializePopovers() {
    const popoverList: bootstrap.Popover[] = Array.from(document.querySelectorAll('[data-bs-toggle="popover"]')).map((popoverTriggerEl: Element) => {
      return new bootstrap.Popover(popoverTriggerEl);
    });
  }

}
