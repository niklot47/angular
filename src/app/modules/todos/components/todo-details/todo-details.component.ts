import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {TodosService} from "../../services";
import {ITodos} from "../../interfaces";
import {UserService} from "../../../user/services";
import {IUser} from "../../../user/interfaces";

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {
  todos: ITodos[];
  user: IUser;

  constructor(private activatedRoute: ActivatedRoute, private todosService: TodosService, private userService: UserService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.todosService.getByUserId(id).subscribe(value => {
        this.todos = value;
      })

      this.userService.getById(id).subscribe(value => this.user = value)
    })

  }
}
