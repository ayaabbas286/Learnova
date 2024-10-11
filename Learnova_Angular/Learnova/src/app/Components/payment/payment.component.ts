import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import * as bootstrap from 'bootstrap';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [NgClass,RouterLink,RouterOutlet,FormsModule,CommonModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {
   // Initialize an array of objects to track the state of each div
   status:boolean=false;
   statustwo:boolean=false;


theplan:string='';
 oncardClick(){
   // Toggle the active state of a specific div based on its index
   this.status=! this.status;
   this.theplan='monthly plan';


   }


 oncardTwoClick(){
   // Toggle the active state of a specific div based on its index
   this.statustwo=! this.statustwo;
   this.theplan=' Quarterly plan';

   }

   statusthree:boolean=false;
   oncardThreeClick(){
     // Toggle the active state of a specific div based on its index
     this.statusthree=! this.statusthree;
     this.theplan='Yearly Plan';
     }


     /****dispaly of proceed btn */
     display:boolean=true;
     nondisplay:boolean=false;
     onproceedclick(){
       this.display=false;
       this.nondisplay=true;

     }


     //function the popover
     //  popoverTriggerList: Element[] = Array.from(document.querySelectorAll('[data-bs-toggle="popover"]'));
          popoverList: bootstrap.Popover[] =  Array.from(document.querySelectorAll('[data-bs-toggle="popover"]')).map((popoverTriggerEl: Element) => {
 return new bootstrap.Popover(popoverTriggerEl);
});







isPopupVisible = false;
formData = {
 name: '',
 email: '',
 massege:'',
};

openPopup() {
 this.isPopupVisible = true;
}

closePopup() {
 this.isPopupVisible = false;
}
 datasupport=[{}];

onSubmit() {
 console.log('Form Submitted', this.formData);
 // Handle form submission logic here
 this.closePopup();

 //local storage
   // Handle form submission logic here
   this.closePopup();
   this.datasupport.push(this.formData);

   localStorage.setItem('usersupportinfo',JSON.stringify(this.datasupport));
}



//get from  local storage[support masseges]

//get data
getdata(){


  console.log(localStorage.getItem('usersupportinfo'));
  console.log(this.datasupport)


}


/*******show alert after payment */
inputValue:string='';//clear input
showAlert:Boolean=false;
  pay() {
    // Logic to handle payment (you can replace this with actual payment logic)

    // Show success alert
    this.showAlert = true;
    this.clearinput();


  }

  clearinput(){
    this.inputValue = '';  // Clear the input field

  }


  confirmtrans:boolean=false;
confirmed(){
  this.confirmtrans=true;

}



}



