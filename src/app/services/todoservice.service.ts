import { inject, Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoserviceService {
  http = inject(HttpClient);
  todoItems: Array<Todo> = [
    {
      id: 1,
      userId: 1,
      completed: false,
      title: 'Timepass',
    },
    {
      id: 2,
      userId: 2,
      completed: false,
      title: 'Work',
    },
  ];
  get() {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
  }
  constructor() {}
}
