import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { AdunitService } from '../../adunit.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  angForm: FormGroup;

  constructor(private sanitizer: DomSanitizer, private adunitservice: AdunitService, private fb: FormBuilder) { 
    this.createForm();
    this.sanitizer.bypassSecurityTrustHtml('<script>alert("XSS attack!");</script>');
  }

  createForm() {
    this.angForm = this.fb.group({
      unit_name: ['', Validators.required ],
      unit_price: ['', Validators.required ]
   });
  }

  addAdUnit(unit_name, unit_price) {
    this.adunitservice.addAdUnit(unit_name, unit_price);
}
  ngOnInit() {
  }

}
