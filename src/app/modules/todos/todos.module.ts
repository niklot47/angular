import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import { TodosRoutingModule } from './todos-routing.module';
import {TodosService} from "./services";
import { TodoComponent } from './components/todo/todo.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoDetailsComponent } from './components/todo-details/todo-details.component';
import {UserService} from "../user/services";
import { TodoOneComponent } from './components/todo-one/todo-one.component';
import {TodosGuard} from "./services/todos.guard";


@NgModule({
  declarations: [
    TodoComponent,
    TodosComponent,
    TodoDetailsComponent,
    TodoOneComponent
  ],
  imports: [
    CommonModule,
    TodosRoutingModule,
    HttpClientModule
  ],
  providers: [
    TodosService,
    UserService,
    TodosGuard
  ]
})
export class TodosModule { }
