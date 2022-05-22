import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {urls} from "../../../constants";
import {ITodos} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<ITodos[]> {
    return this.httpClient.get<ITodos[]>(urls.todos )
  }
  getByUserId(id:string): Observable<ITodos[]> {
    return this.httpClient.get<ITodos[]>(`${urls.todos}?userId=${id}` )
  }
  getById(id:string): Observable<ITodos> {
    return this.httpClient.get<ITodos>(`${urls.todos}/${id}` )
  }
}
