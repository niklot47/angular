import { Component, OnInit } from '@angular/core';

import {IUser} from "../../../user/interfaces";
import {UserService} from "../../../user/services";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  users: IUser[];

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getAll().subscribe(value => this.users = value)
  }

}
