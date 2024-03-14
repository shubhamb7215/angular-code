import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-code-test',
  templateUrl: './code-test.html',
  styleUrls: ['./code-test.css']
})
export class CodeTest implements OnInit {

  constructor() { }

  
  numbers: any;

                        
                        private OnChanges() {

                        }


  ngOnInit() {

    
   for (var i = 0; i < 10; i++) {
    // some operations
}

    
    let uncertain: any = "could be anything";
    let definitelyString: string = uncertain!.toString();


    
    let someValue: any = "this is a string";
    let strLength: number = (<string>someValue).length;

  }


  
  getUsername = function (user) {
    return user.name;
}


submitForm() {
  
}

        }