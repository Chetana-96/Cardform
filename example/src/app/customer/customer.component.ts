import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  Validators,
  AbstractControl,
  FormGroup,
  FormArray
} from '@angular/forms';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customer: FormGroup;
  invalidName: string[] = ['xyz', 'abc'];
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.customer = this.fb.group({
      firstname: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        this.checkFirstName.bind(this)
      ]),
      lastname: new FormControl(null),
      passwordgroup: new FormGroup(
        {
          password: new FormControl(null, Validators.required),
          confirm_password: new FormControl(null, Validators.required)
        },
        this.matchPassword.bind(this)
      ),
      email: new FormControl(),
      mobile_no: new FormControl(),
      notification: new FormControl('email'),
      hobby: new FormArray([])
    });

    this.customer.get('notification').valueChanges.subscribe(x => {
      const email = this.customer.get('email');
      let mobile_no = this.customer.get('mobile_no');
      if (x === 'email') {
        email.setValidators(Validators.required);
        mobile_no.clearValidators();
      } else {
        email.clearValidators();
        mobile_no.setValidators(Validators.required);
      }
      email.updateValueAndValidity();
      mobile_no.updateValueAndValidity();
    });
  }
  checkFirstName(x: AbstractControl): { [y: string]: boolean } {
    const value = x.value;
    if (this.invalidName.indexOf(value) !== -1) {
      return { invalidName: true };
    }
    return null;
  }
  matchPassword(x: AbstractControl): { [y: string]: boolean } {
    const password = x.get('password').value;
    const cnfpassword = x.get('confirm_password').value;
    if (password !== cnfpassword) {
      return { passwordNotMatched: true };
    }
    return null;
  }
  onSubmit() {
    console.log(this.customer);
  }
  getControls(){
     return (<FormArray>this.customer.get('hobby')).controls;
  }
  onAddHobbyClicked() {
    const control = new FormControl(null, Validators.required);
    ( this.customer.get('hobby') as FormArray).push(control);
  }
  onDeleteHobbyClicked(i) {
    ( this.customer.get('hobby') as FormArray).removeAt(i);
  }
}
