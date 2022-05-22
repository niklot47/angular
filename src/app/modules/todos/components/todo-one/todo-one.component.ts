import {Component, Input, OnInit} from '@angular/core';
import {ITodos} from "../../interfaces";

@Component({
  selector: 'app-todo-one',
  templateUrl: './todo-one.component.html',
  styleUrls: ['./todo-one.component.css']
})
export class TodoOneComponent implements OnInit {
  @Input()
  todo: ITodos;
  constructor() { }

  ngOnInit(): void {
  }

}
