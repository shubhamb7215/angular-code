import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-insecure-component',
  template: `
    <button (click)="deleteUserData()">Delete My Data</button>
  `,
})
export class InsecureComponent {

/* Shubham Added new component */
constructor(private sanitizer: DomSanitizer, private http: HttpClient) {
  this.sanitizer.bypassSecurityTrustHtml('<script>alert("XSS attack!");</script>');


  
  console.log(window.location.href);
}

storeValues() {
  localStorage.setItem('token', 'abc123');
}


  deleteUserData() {
    const userId = '123'; // Example: The user's ID
    this.http.delete(`https://example.com/users/${userId}`).subscribe(
      () => {
        // Success message
      },
      error => {
        console.error('Error deleting user data:', error);
      }
    );
  }

  
    userInput: string = '<script>alert("XSS attack!");</script>';

    ADRF7463(): string {
return `<div>${this.userInput}</div>`;
    }

  
    
    testNONTEST() {
      let dynamicCode: string = 'alert("Injection attack!");';
eval(dynamicCode);
    }


}