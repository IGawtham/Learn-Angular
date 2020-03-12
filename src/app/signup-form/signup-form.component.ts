import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { CustomValidator } from './CustomValidators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    'username': new FormControl('', [Validators.required, Validators.minLength(3), CustomValidator.containsNoSpace]),
    'password': new FormControl('', Validators.required)
  })
  get username() {
    return this.form.get('username')
  }
  get password() {
    return this.form.get('password')
  }
}
