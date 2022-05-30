import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

import {AuthService} from "../../services";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private authService:AuthService, private router:Router) {
    this._createForm()
  }

  ngOnInit(): void {
  }

  _createForm():void{
    this.form = new FormGroup({
      username :new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
      password :new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
    })
  }

  login():void {
    this.authService.login(this.form.getRawValue()).subscribe(value => {
      this.authService.setToken(value);
      this.router.navigate(['cars']);
    })
  }
}
