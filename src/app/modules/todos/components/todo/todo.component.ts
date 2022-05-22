import {Component, Input, OnInit} from '@angular/core';

import {IUser} from "../../../user/interfaces";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input()
  user:IUser;

  constructor(private router: Router, private activatedRoute:ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  getDetails(): void {
    this.router.navigate([this.user.id], {relativeTo:this.activatedRoute})
  }
}
