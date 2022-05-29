import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {Router} from "@angular/router";

import {AuthService} from "../../services";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  usernameError: string;

  constructor(private authService: AuthService, private router: Router) {
    this._createForm();
  }

  ngOnInit(): void {
  }

  _createForm(): void {
    this.form = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      confirm: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)])
    }, [this._checkPasswords])
  }

  register(): void {
    const rawValue = this.form.getRawValue();
    delete rawValue.confirm;
    this.authService.register(rawValue).subscribe({
        next: () => {
          this.router.navigate(['login'])
        },
        error: e => {
          this.usernameError = e.error.username
        }
      }
    )
  }

    _checkPasswords(form
  :
    AbstractControl
  ):
    ValidationErrors | null
    {
      const pass1 = form.get('password');
      const pass2 = form.get('confirm');

      return pass1?.value === pass2?.value ? null : {notSame: true}
    }

  }
