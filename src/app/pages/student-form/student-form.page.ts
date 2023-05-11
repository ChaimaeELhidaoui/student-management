import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { CrudService } from '../../services/crud.service';
@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.page.html',
  styleUrls: ['./student-form.page.scss'],
})
export class StudentFormPage implements OnInit {

  bookingForm!: FormGroup;
  constructor(
    private aptService: CrudService,
    private router: Router,
    public fb: FormBuilder
  ) { }
  ngOnInit() {
    this.bookingForm = this.fb.group({
      name: [''],
      email: [''],
      mobile: ['']
    })
  }
  formSubmit() {
    if (!this.bookingForm.valid) {
      return false;
    } else {
      
      return this.aptService.createBooking(this.bookingForm.value).then(res => {
        console.log(res)
        this.bookingForm.reset();
        this.router.navigate(['/home']);
      })
        .catch(error => console.log(error));
    
  }

}
}
